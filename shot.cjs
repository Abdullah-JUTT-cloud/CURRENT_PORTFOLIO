/* Ground-truth capture: seams + About watermark, from the live vite dev server. */
const puppeteer = require('puppeteer-core');
const fs = require('fs');

const OUT = '/tmp/shots';
fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/opt/brave.com/brave/brave',
    headless: 'new',
    args: ['--no-sandbox', '--disable-gpu', '--hide-scrollbars', '--mute-audio', '--force-device-scale-factor=1', '--autoplay-policy=no-user-gesture-required']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2', timeout: 90000 });
  await new Promise(r => setTimeout(r, 6000)); // let preloader finish

  const info = await page.evaluate(() => {
    const ids = ['home','about','intro-video','projects','experience','expertise','skills','education','certificates'];
    const sections = {};
    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) { sections[id] = null; continue; }
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      sections[id] = {
        top: Math.round(r.top + window.scrollY),
        bottom: Math.round(r.bottom + window.scrollY),
        height: Math.round(r.height),
        overflow: cs.overflow,
        bg: cs.backgroundColor
      };
    }
    const dividers = [];
    document.querySelectorAll('svg').forEach(svg => {
      const p = svg.querySelector('path');
      if (p && (p.getAttribute('d') || '').startsWith('M0,36')) {
        const host = svg.parentElement;
        const hr = host.getBoundingClientRect();
        const grad = svg.querySelector('linearGradient');
        const stops = grad ? Array.from(grad.querySelectorAll('stop')).map(s => s.getAttribute('stopColor')) : [];
        dividers.push({
          wrapperTop: Math.round(hr.top + window.scrollY),
          wrapperBottom: Math.round(hr.bottom + window.scrollY),
          gradientId: grad ? grad.id : null,
          stops,
          fill: p.getAttribute('fill')
        });
      }
    });
    // watermark span: big text inside #about with z-0
    const about = document.getElementById('about');
    let watermark = null;
    if (about) {
      const spans = about.querySelectorAll('span');
      for (const s of spans) {
        const cs = getComputedStyle(s);
        if (cs.fontSize && parseFloat(cs.fontSize) > 200) {
          const r = s.getBoundingClientRect();
          watermark = {
            text: s.textContent, color: cs.color, opacity: cs.opacity,
            fontSizePx: Math.round(parseFloat(cs.fontSize)),
            zIndex: cs.zIndex, position: cs.position,
            rectTop: Math.round(r.top + window.scrollY),
            height: Math.round(r.height), width: Math.round(r.width)
          };
        }
      }
    }
    return { sections, dividers, watermark, scrollY: window.scrollY, docHeight: document.body.scrollHeight };
  });
  console.log(JSON.stringify(info, null, 2));
  fs.writeFileSync('/tmp/page-info.json', JSON.stringify(info, null, 2));

  const s = info.sections;
  const seams = [
    { name: '1-hero-about', y: (s['home'].bottom + s['about'].top) / 2 },
    { name: '2-about-introvideo', y: (s['about'].bottom + s['intro-video'].top) / 2 },
    { name: '3-introvideo-projects', y: (s['intro-video'].bottom + s['projects'].top) / 2 },
    { name: '4-projects-experience', y: (s['projects'].bottom + s['experience'].top) / 2 },
    { name: '5-experience-expertise', y: (s['experience'].bottom + s['expertise'].top) / 2 },
    { name: '6-skills-education', y: (s['skills'].bottom + s['education'].top) / 2 },
    { name: '7-education-certificates', y: (s['education'].bottom + s['certificates'].top) / 2 }
  ];

  for (const seam of seams) {
    await page.evaluate((yy) => { window.scrollTo(0, Math.max(0, yy - 430)); }, seam.y);
    await new Promise(r => setTimeout(r, 900));
    await page.screenshot({ path: `${OUT}/${seam.name}.png` });
    console.log('shot saved:', seam.name, 'at seam y=', seam.y);
  }

  // About section: full element screenshot + a wide shot centered on content
  await page.evaluate(() => { document.getElementById('about').scrollIntoView({ block: 'start' }); window.scrollBy(0, -80); });
  await new Promise(r => setTimeout(r, 1400));
  await page.screenshot({ path: `${OUT}/about-top.png` });
  const aboutEl = await page.$('#about');
  try { await aboutEl.screenshot({ path: `${OUT}/about-full.png` }); } catch (e) { console.log('about-full fail:', e.message); }
  console.log('about shots saved');

  await browser.close();
})().catch(e => { console.error('FATAL', e); process.exit(1); });
