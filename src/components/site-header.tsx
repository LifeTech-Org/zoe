'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, ArrowUpRight } from 'lucide-react';
export function SiteHeader() {
  const pathname = usePathname();
  return <header className="site-header"><Link className="wordmark" href="/" aria-label="Zoe, home">zoe<span className="wordmark-avatar"><Image src="/images/zoe-avatar.jpg" alt="" width={46} height={46} preload/></span></Link><nav aria-label="Main navigation"><Link href="/" aria-current={pathname === '/' ? 'page' : undefined}>Her little world</Link><Link href="/ceremony" aria-current={pathname === '/ceremony' ? 'page' : undefined}>The ceremony<ArrowUpRight size={14}/></Link></nav><span className="header-note"><Heart size={13}/> So little. So loved.</span></header>;
}
