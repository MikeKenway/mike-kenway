import '../app/globals.css';
import Hero from '../components/Hero/Hero';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import AdditionalServices from '@/components/AdditionalServices/AdditionalServices';

export default function Home() {
  return (
    <main>
      <Hero />
      <h2 className='heading-home'>What Can I Do for You?</h2>
      <p className='container-small text-home'>
        I love helping people bring their ideas to life. Whether you need
        thoughtful design, clear strategy, or both, I’m here to help shape
        projects that connect and make an impact.
      </p>
      <div className='container flex-row'>
        <ServiceCard
          title='UX/UI Design'
          description='Designing beautiful, user-centered digital experiences that drive results.'
          link=''
          src='/images/ux.webp'
          alt=''
        />
        <ServiceCard
          title='Creative Direction'
          description='Helping brands tell their story through powerful visuals and strategy.'
          link=''
          src='/images/design.jpg'
          alt=''
        />
      </div>
      <AdditionalServices />
    </main>
  );
}
