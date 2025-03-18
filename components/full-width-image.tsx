import Image from 'next/image';

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

export default function FullWidthImage() {
  return (
    <section className='relative overflow-hidden bg-white'>
      <FullWidthContainer>
        <div className='w-full relative'>
          <Image
            src='/Bottomimage.png'
            alt='Kunaya ingredients with tiger nuts, coconut, and branded apron'
            width={1920}
            height={1080}
            className='w-full h-auto'
            priority
          />
        </div>
      </FullWidthContainer>
    </section>
  );
}
