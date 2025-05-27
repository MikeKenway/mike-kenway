import Layout from './layout';
import '../app/globals.css';
import Hero from '../components/Hero/Hero';
import ServiceCard from '@/components/ServiceCard/ServiceCard';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className='container flex-row'>
        <ServiceCard
          title='UX/UI Design'
          description='Designing beautiful, user-centered digital experiences that drive results.'
          link=''
          src='/images/ux.jpg'
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
    </main>
  );
}
