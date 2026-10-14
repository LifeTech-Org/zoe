import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import './globals.css';
export const metadata: Metadata = { title: { default: 'Zoe Ayomikun · Our little world', template: '%s · Zoe Ayomikun' }, description: 'A little life. An endless kind of love. Welcome to the world of Zoe Ayomikun AYETIGBO.', robots: { index: false, follow: false } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><SiteHeader/>{children}<SiteFooter/></body></html>; }
