import Image from 'next/image';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
}

function ProductCard({ title, description, price, imageSrc }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col relative hover:shadow-lg transition-shadow duration-300 animate-scale-in">
      <div className="pt-8 pb-8 px-8 flex items-center justify-center">
        <div className="relative w-48 h-64 group">
          <Image 
            src={imageSrc} 
            alt={`${title} Tiger Nut Milk`}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-110"
            priority
          />
        </div>
      </div>
      
      <div className="px-8 pb-8 flex flex-col">
        <h3 className="font-bold text-[#4EAE32] text-xl mb-2">{title}</h3>
        <p className="text-gray-600 text-base mb-3">{description}</p>
        <p className="font-bold text-[#F0833C] text-lg hover:animate-pulse-subtle">{price}</p>
      </div>
    </div>
  );
}

export default function OurProducts() {
  const products = [
    {
      id: 1,
      title: 'Original',
      description: 'Pure and simple Tiger Nut milk',
      price: '$6.99',
      imageSrc: '/carton.png',
    },
    {
      id: 2,
      title: 'Vanilla',
      description: 'With Madagascar Vanilla',
      price: '$7.49',
      imageSrc: '/carton.png',
    },
    {
      id: 3,
      title: 'Barista Blend',
      description: 'Best for Coffee Lovers',
      price: '$7.49',
      imageSrc: '/carton.png',
    },
  ];

  return (
    <section className="w-full bg-[#FFF7ED] py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-['Mochiy_Pop_One'] text-3xl md:text-4xl text-[#4EAE32] text-center mb-12 animate-fade-in-down">
          Our Products
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto">
          {products.map((product, index) => (
            <div key={product.id} className={`animate-fade-in-up`} style={{animationDelay: `${index * 200}ms`}}>
              <ProductCard
                title={product.title}
                description={product.description}
                price={product.price}
                imageSrc={product.imageSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
