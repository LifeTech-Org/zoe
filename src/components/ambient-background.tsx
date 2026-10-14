const sparkles = ['✧', '♡', '✧', '·', '✧', '♡', '·', '✧'];
export function AmbientBackground() { return <div className="ambient" aria-hidden="true"><span className="ambient-glow glow-one"/><span className="ambient-glow glow-two"/><span className="ambient-glow glow-three"/>{sparkles.map((sparkle, index) => <span className="ambient-sparkle" key={index}>{sparkle}</span>)}</div>; }
