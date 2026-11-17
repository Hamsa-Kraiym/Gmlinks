import Link from 'next/link';
import Image from 'next/image';

const nav=[['/','Home'],['/services','Services'],['/coverage','Coverage'],['/our-work','Our Work'],['/about-us','About Us'],['/contact','Contact']];

export default function Header(){
  return <header className="siteHeader">
    <Link href="/" className="brand"><Image src="/gmlinks-symbol.png" alt="" width={70} height={38} priority/><span>GMLinks</span></Link>
    <nav className="mainNav">{nav.map(([h,l])=><Link key={h} href={h}>{l}</Link>)}</nav>
    <div className="headerActions"><Link className="btn btnHeaderGold" href="/request-a-crew">Request a Crew</Link></div>
  </header>
}
