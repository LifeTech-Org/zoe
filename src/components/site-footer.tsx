import Link from 'next/link';
import { Heart } from 'lucide-react';
export function SiteFooter() { return <footer className="site-footer"><Link className="wordmark" href="/">zoe<span>✳︎</span></Link><p>A little life. An endless kind of love.</p><span>Made with <Heart size={12}/> by her family</span></footer>; }
