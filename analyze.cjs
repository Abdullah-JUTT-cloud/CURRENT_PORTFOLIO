/* Pixel-analyze seam screenshots: for each seam, scan a horizontal band and
   report whether the boundary between the two sections is a hard cut (1-2px
   color jump) or a smooth blend (gradient across many px), plus row-color variance. */
const fs = require('fs');
const { PNG } = require('pngjs');

const files = process.argv.slice(2);
for (const f of files) {
  const png = PNG.sync.read(fs.readFileSync(f));
  const { width: W, height: H, data } = png;
  const rowAt = (y) => {
    // sample center column region (x = W/2) with 5-px average to dodge grid lines
    let r = 0, g = 0, b = 0, n = 0;
    const x = Math.floor(W / 2);
    for (let dx = -2; dx <= 2; dx++) {
      const i = (y * W + (x + dx)) * 4;
      r += data[i]; g += data[i + 1]; b += data[i + 2]; n++;
    }
    return [r / n, g / n, b / n];
  };
  // find rows that change color vs previous row
  const changes = [];
  let prev = rowAt(0);
  for (let y = 1; y < H; y++) {
    const cur = rowAt(y);
    const d = Math.abs(cur[0] - prev[0]) + Math.abs(cur[1] - prev[1]) + Math.abs(cur[2] - prev[2]);
    if (d > 30) changes.push({ y, d: Math.round(d), rgb: cur.map(v => Math.round(v)) });
    prev = cur;
  }
  // summarize color runs (hard cut => 2 long runs; wave => many medium runs)
  const runs = [];
  let runStart = 0, runColor = rowAt(0);
  for (let y = 1; y < H; y++) {
    const cur = rowAt(y);
    const d = Math.abs(cur[0] - runColor[0]) + Math.abs(cur[1] - runColor[1]) + Math.abs(cur[2] - runColor[2]);
    if (d > 30) {
      runs.push({ from: runStart, to: y - 1, len: y - runStart, rgb: runColor.map(v => Math.round(v)) });
      runStart = y; runColor = cur;
    }
  }
  runs.push({ from: runStart, to: H - 1, len: H - runStart, rgb: runColor.map(v => Math.round(v)) });
  console.log('=====', f);
  console.log(' big changes (>30 per row):', JSON.stringify(changes));
  console.log(' runs:', JSON.stringify(runs.filter(r => r.len > 4)));
}
