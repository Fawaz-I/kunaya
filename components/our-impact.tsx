import Image from 'next/image';
import Link from 'next/link';

const FullWidthContainer = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`w-full overflow-hidden ${className}`}
    style={{
      marginLeft: 'calc(-50vw + 50%)',
      marginRight: 'calc(-50vw + 50%)',
      width: '100vw',
    }}
  >
    {children}
  </div>
);

type ImpactCardProps = {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
};

const ImpactCard = ({ icon, iconAlt, title, description }: ImpactCardProps) => {
  return (
    <div className='bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300'>
      <div className='flex items-start gap-3 mb-2'>
        <Image src={icon} alt={iconAlt} width={40} height={40} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
        <h3 className='text-kunaya-green text-xl font-semibold font-mochiy'>
          {title}
        </h3>
      </div>
      <p className='text-kunaya-gray pl-12'>{description}</p>
    </div>
  );
};

const PatternRow = ({ count = 25 }: { count?: number }) => {
  return (
    <div
      className='flex'
      style={{ width: '100%', maxWidth: '100vw', overflow: 'hidden' }}
    >
      {[...Array(count)].map((_, i) => (
        <Image
          key={i}
          src='/pattern.png'
          alt='Decorative pattern'
          width={100}
          height={100}
          className='flex-shrink-0 inline-block'
          style={{ marginLeft: i > 0 ? '-15px' : '0' }}
        />
      ))}
    </div>
  );
};

export default function OurImpact() {
  return (
    <section className='py-16 relative overflow-hidden bg-white'>
      {/* Green gradient background overlay for bottom of section */}
      <div className='absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-kunaya-green/15 to-transparent z-0'></div>
      {/* Heading */}
      <div className='container mx-auto px-4 mb-12'>
        <h2 className='text-kunaya-green text-4xl md:text-5xl font-bold text-center font-mochiy'>
          Our Impact
        </h2>
      </div>

      {/* Main content */}
      <div className='container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center mb-16 relative z-10'>
        {/* Left Column - Cards */}
        <div className='space-y-12 flex flex-col justify-center'>
          <ImpactCard
            icon='/community.png'
            iconAlt='Community Support Icon'
            title='Community Support'
            description='Supporting dozens of small-scale farmers across West Africa'
          />

          <ImpactCard
            icon='/leaf2.png'
            iconAlt='Sustainability Icon'
            title='Sustainability'
            description='100% sustainable farming practices and eco-friendly packaging'
          />

          {/* Learn More Button */}
          <div className='flex justify-center mt-12'>
            <Link
              href='/impact'
              className='bg-kunaya-orange hover:bg-opacity-90 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md hover:shadow-lg'
              aria-label='Learn more about our impact initiatives'
              role='button'
              tabIndex={0}
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Column - Farmers Illustration */}
        <div className='flex justify-center md:justify-end'>
          <div className='relative w-full max-w-xl'>
            <Image
              src='/our_impact.png'
              alt='Our impact in the community'
              width={700}
              height={700}
              className='rounded-lg shadow-lg'
            />
          </div>
        </div>
      </div>

      {/* Bottom Pattern Border */}
      <FullWidthContainer className='mt-16 relative'>
        <div className='w-full flex justify-center relative z-10'>
          <PatternRow />
        </div>
      </FullWidthContainer>
    </section>
  );
}
