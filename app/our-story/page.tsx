import React from 'react'

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 px-4 pb-16 pt-32 md:px-8 md:pt-40 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-kunaya-green md:text-5xl">Our Story</h1>
          <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
            Discover the journey behind Kunaya and our commitment to bringing premium plant-based
            nutrition to your table.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-green-50 p-8 text-center md:p-12">
            <h2 className="mb-8 text-3xl font-bold text-kunaya-green md:text-4xl">Our Mission</h2>
            <p className="text-xl font-medium leading-relaxed text-gray-800 md:text-2xl">
              Our mission is to make plant-based superfoods accessible, offering healthier choices
              that support both personal well-being and a sustainable future.
            </p>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="bg-gray-50 px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h3 className="mb-6 text-2xl font-bold text-kunaya-green md:text-3xl">The Beginning</h3>
            <p className="mb-6 text-gray-700">
              Kunaya was born from a simple yet powerful vision: to make nutritious, plant-based
              superfoods accessible to everyone. Our journey began with the discovery of tiger nuts,
              an ancient superfood that has nourished communities for thousands of years.
            </p>

            <h3 className="mb-6 text-2xl font-bold text-kunaya-green md:text-3xl">
              Our Commitment
            </h3>
            <p className="mb-6 text-gray-700">
              We believe that healthy living shouldn&apos;t compromise taste or convenience.
              That&apos;s why we&apos;ve dedicated ourselves to crafting premium tiger nut milk that
              delivers exceptional nutrition while supporting sustainable farming practices and
              local communities.
            </p>

            <h3 className="mb-6 text-2xl font-bold text-kunaya-green md:text-3xl">
              Looking Forward
            </h3>
            <p className="text-gray-700">
              As we continue to grow, our commitment remains unchanged: to provide you with the
              highest quality plant-based nutrition while building a more sustainable and healthier
              future for all. Every bottle of Kunaya tiger nut milk represents our dedication to
              your well-being and our planet.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
