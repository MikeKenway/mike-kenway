import ServiceListCard from '@/components/ServiceListCard/ServiceListCard'
import styles from '@/components/AdditionalServices/AdditionalServices.module.css'

export default function AdditionalServices() {
  return (
    <section className='home-services'>
      <h3 className={styles.andMore}>...and more!</h3>
      <div className={styles.servicesLayout}>
        <ServiceListCard
          title='Design'
          services={[
            'Brand Strategy & Positioning',
            'Creative Campaign Development',
            'Visual Identity & Logo Design',
            'Wireframing & Prototyping',
            'Design Systems & Style Guides',
          ]}
        />

        <ServiceListCard
          title='Development'
          services={[
            'Front-End Development',
            'Component Libraries',
            'Interactive Prototyping',
            'Website Performance Optimization',
          ]}
        />

        <ServiceListCard
          title='Technology'
          services={[
            'Content Direction & Storytelling',
            'Art Direction & Asset Production',
            'Collaborative Workshops & Consulting',
            'Technical Stack Consulting',
          ]}
        />
      </div>
    </section>
  );
}
