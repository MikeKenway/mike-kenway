import ServiceListCard from '@/components/ServiceListCard/ServiceListCard'

export default function AdditionalServices() {
  return (
    <section className='home-services'>
      <h3>Additional Services</h3>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
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
