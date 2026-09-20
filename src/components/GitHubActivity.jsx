import { ArrowUpRight } from 'lucide-react';

const snake = 'https://raw.githubusercontent.com/Abdullah-JUTT-cloud/Abdullah-JUTT-cloud/output/github-contribution-grid-snake.svg';

export default function GitHubActivity() {
  return <section className="section github-section" id="github"><div className="shell"><div className="section-heading reveal"><div><div className="section-kicker"><span>08</span> Open source</div><h2 className="section-title">Build. <em>Commit.</em><br />Repeat.</h2></div><p>Every square is a day of building, breaking, learning, and shipping—regenerated directly from my GitHub profile.</p></div><div className="github-panel reveal"><div className="github-top"><span><i /> github.com/Abdullah-JUTT-cloud</span><a className="button" href="https://github.com/Abdullah-JUTT-cloud" target="_blank" rel="noreferrer">View profile <ArrowUpRight size={17} /></a></div><div className="github-art"><img src={snake} alt="Animated GitHub contribution activity for Muhammad Abdullah" /></div></div></div></section>;
}
