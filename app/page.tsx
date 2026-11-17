import Image from 'next/image';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import CrewForm from '@/components/CrewForm';

function Icon({type}:{type:string}){
  const common={width:56,height:56,viewBox:'0 0 64 64',fill:'none',stroke:'currentColor',strokeWidth:2.6,strokeLinecap:'round' as const,strokeLinejoin:'round' as const};
  if(type==='camera') return <svg {...common}><rect x="9" y="18" width="32" height="28" rx="3"/><path d="M41 26l13-7v26l-13-7z"/><path d="M18 14h14"/><path d="M16 50h20M21 46v8M31 46v8"/></svg>;
  if(type==='globe') return <svg {...common}><circle cx="28" cy="28" r="19"/><path d="M9 28h38M28 9c7 7 10 14 10 19s-3 12-10 19M28 9c-7 7-10 14-10 19s3 12 10 19"/><rect x="39" y="37" width="17" height="13" rx="2"/></svg>;
  if(type==='broadcast') return <svg {...common}><circle cx="32" cy="32" r="4"/><path d="M24 24a11 11 0 0 0 0 16M40 24a11 11 0 0 1 0 16M17 17a21 21 0 0 0 0 30M47 17a21 21 0 0 1 0 30"/><path d="M32 36v17"/></svg>;
  if(type==='studio') return <svg {...common}><rect x="10" y="12" width="44" height="40" rx="2"/><rect x="18" y="22" width="28" height="20" rx="2"/><path d="M24 32h16M16 17h32"/></svg>;
  if(type==='news') return <svg {...common}><path d="M10 28h38l6 8v14H10z"/><path d="M16 28V16h24l8 12"/><circle cx="20" cy="50" r="4"/><circle cx="44" cy="50" r="4"/><path d="M20 22h12M20 26h9"/></svg>;
  return <svg {...common}><circle cx="24" cy="24" r="12"/><circle cx="42" cy="39" r="12"/><path d="M24 6v7M24 35v7M6 24h7M35 24h7M12 12l5 5M31 31l5 5M42 21v6M42 51v6M24 39h6M54 39h6"/></svg>;
}
function WhyIcon({type}:{type:string}){
 const common={width:54,height:54,viewBox:'0 0 64 64',fill:'none',stroke:'currentColor',strokeWidth:2.5,strokeLinecap:'round' as const,strokeLinejoin:'round' as const};
 if(type==='clock') return <svg {...common}><circle cx="32" cy="32" r="23"/><path d="M32 18v15l10 6"/></svg>;
 if(type==='local') return <svg {...common}><circle cx="32" cy="22" r="9"/><path d="M16 52c2-12 9-18 16-18s14 6 16 18"/><path d="M32 4v6"/></svg>;
 if(type==='fast') return <svg {...common}><path d="M10 32l44-18-18 44-5-20z"/><path d="M31 38L54 14"/></svg>;
 return <svg {...common}><circle cx="22" cy="22" r="8"/><circle cx="42" cy="22" r="8"/><path d="M8 52c1-11 7-17 14-17s13 6 14 17M28 52c1-11 7-17 14-17s13 6 14 17"/></svg>;
}

const hs=[
 ['camera','Camera Crews','Experienced, bilingual camera crews for news, documentaries, and feature production.'],
 ['globe','Fixers & Logistics','Local fixers and full logistics support to simplify complex productions.'],
 ['broadcast','Live Broadcasts','Reliable live transmission solutions anywhere in the world.'],
 ['studio','Studios & Live Positions','Professional studios and live positions for interviews and broadcasts.'],
 ['news','News Production','End-to-end news production with speed, precision, and editorial support.'],
 ['gears','Production Services','Permits, equipment, transport, and everything you need to get the job done.']
];

export default function Home(){return <PageShell><div className="page homePage">
  <section className="homeHero">
    <div className="homeHeroText"><h1>Wherever the Story<br/>Happens, <span className="gold">We’re There.</span></h1><p className="lead">Global media production, live broadcast,<br/>camera crews, fixers, and logistics support.</p><div className="actions"><Link className="btn btnGold" href="/request-a-crew">Request a Crew ›</Link><Link className="btn btnOutline" href="/services">Our Services ›</Link></div></div>
    <div className="homeHeroImage"><div className="goldSweep"/></div>
  </section>
  <section className="trust"><h3>Trusted by Global Media Clients</h3><div className="logoRow">{['◆','◉','△','◎','✣','▣','≋','◈'].map((x,i)=><div className="clientLogo" key={i}>{x}</div>)}</div></section>
  <section className="homeServices"><h2>Our Services</h2><div className="homeServiceGrid">{hs.map(([ic,t,d])=><div className="homeService" key={t}><div className="serviceIcon"><Icon type={ic}/></div><div><h3>{t}</h3><p>{d}</p><span className="learn">Learn More ›</span></div></div>)}</div></section>
  <section className="homeMap"><div className="homeMapLabel">Middle East & North Africa Coverage</div></section>
  <h2 className="featuredTitle">Featured Work</h2>
  <section className="featuredGrid">
    <Link href="/our-work" className="featuredCard"><Image src="/assets/home-work-breaking.jpg" alt="Breaking News Coverage" width={640} height={360}/><div className="caption"><h3>Breaking News Coverage</h3><p>Crisis • Conflict • On the Ground</p></div><span className="cardArrow">→</span></Link>
    <Link href="/our-work" className="featuredCard"><Image src="/assets/home-work-live.jpg" alt="Live News Production" width={640} height={360}/><div className="caption"><h3>Live News Production</h3><p>Live • Fast • Reliable</p></div><span className="cardArrow">→</span></Link>
    <Link href="/our-work" className="featuredCard"><Image src="/assets/home-work-international.jpg" alt="International Production" width={640} height={360}/><div className="caption"><h3>International Production</h3><p>Documentary • Feature • Corporate</p></div><span className="cardArrow">→</span></Link>
  </section>
  <section className="homeBottom">
    <div className="showreel"><h3>See GMLinks in Action</h3><div className="showreelImg"><span className="play">▶</span></div></div>
    <div className="whyMini"><div className="whyCard"><div className="bigIcon"><WhyIcon type="clock"/></div><div><h4>24/7 Availability</h4><p>Round-the-clock support for breaking news and live events.</p></div></div><div className="whyCard"><div className="bigIcon"><WhyIcon type="local"/></div><div><h4>Local Expertise</h4><p>Deep local knowledge and trusted relationships on the ground.</p></div></div></div>
    <div className="quickCrew"><h3>Request a Crew</h3><CrewForm compact/></div>
  </section>
</div></PageShell>}
