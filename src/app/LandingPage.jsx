import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <section className="relative w-full h-100">
        {/* Background Image */}
        <Image
          src="/section1bg.png"
          alt="House Background"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="brightness-50"
        />
        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          {/* Logo */}
          <div className="mb-4">
            <Image
              src="/logo.png"
              alt="House of Tran Logo"
              width={80}
              height={80}
            />
          </div>
          {/* Logo name */}
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-widest mb-4">
            HOUSE OF TRAN
          </h1>
          {/* Description */}
          <p className="text-white max-w font-semibold bg-opacity-90 px-4 py-2 rounded">
            Building our vision through new business developments, capital
            investments, and acquisitions.
          </p>
        </div>
      </section>

      {/* Black Separator */}
      <section className="w-full bg-black py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-white text-center text-3xl font-bold">
            E-Commerce
          </h2>
        </div>
      </section>

      <section className="relative w-full h-100">
        {/* Background Image */}
        <Image
          src="/sec2new.png"
          alt="House Background"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="brightness-50"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          {/* Logo and Title side by side on md+ screens */}
          <div className="flex flex-col md:flex-row items-center justify-center mb-4 space-x-0 md:space-x-4">
            <Image
              src="/sec2newlogo.png"
              alt="House of Tran Logo"
              width={80}
              height={80}
            />
            <h1 className="text-white text-4xl md:text-5xl font-bold tracking-widest mt-2 md:mt-0">
              Channel Link
            </h1>
          </div>

          {/* Description forced into two lines on md+ */}
          <p className="text-white max-w-md font-semibold bg-opacity-90 px-4 py-2 rounded">
            Your Online Marketplace Partner for
            <br />
            Amazon, Walmart, Target, eBay & many more.
          </p>
        </div>
      </section>

      {/* Black Separator */}
      <section className="w-full bg-black py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-white text-center text-3xl font-bold">
            Real Estate
          </h2>
        </div>
      </section>

      {/* Real Estate Section */}
      <section className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 w-full">
          {/* First Image */}
          <div className="relative overflow-hidden">
            <Image
              src="/sec2-1.png"
              alt="Real Estate 1"
              layout="responsive"
              width={700}
              height={700}
              objectFit="cover"
              quality={80}
              className="brightness-50"
            />
            <div className="absolute bottom-12 text-2xl left-0 right-0 bg-opacity-60 text-white text-center py-2 font-semibold">
              Orange County
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-60 text-white text-center py-2 font-semibold">
              1 Property
            </div>
          </div>

          {/* Second Image */}
          <div className="relative overflow-hidden">
            <Image
              src="/sec2-2.png"
              alt="Real Estate 2"
              layout="responsive"
              width={700}
              height={700}
              objectFit="cover"
              quality={80}
              className="brightness-50"
            />
            <div className="absolute bottom-12 text-2xl left-0 right-0 bg-opacity-60 text-white text-center py-2 font-semibold">
              Houston
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-60 text-white text-center py-2 font-semibold">
              1 Property
            </div>
          </div>
        </div>
      </section>

      {/* Wall Street Section */}
      <section className="w-full bg-black py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-white text-center text-3xl font-bold">
            Wall Street
          </h2>
        </div>
      </section>

      <section className="w-full flex justify-center my-0 px-0">
        <div className="relative">
          <Image
            src="/wallStreet.png"
            alt="Centered Showcase"
            width={1116}
            height={2880}
            objectFit="contain"
            quality={80}
          />
        </div>
      </section>

      <section className="w-full bg-black py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-white text-center text-3xl font-bold">
            Collectibles{" "}
          </h2>
        </div>
      </section>

      {/* Collectibles Section */}
      <section
        className="w-full bg-white py-12 relative"
        style={{ minHeight: 750 }}
      >
        <div
          className="max-w-6xl mx-auto relative px-6 pb-[200px] sm:flex sm:justify-center sm:items-end sm:space-x-6"
          style={{ height: 700 }}
        >
          {/* Mobile container for images, flex-col with spacing */}
          <div className="flex flex-col space-y-8 sm:hidden w-full items-center">
            <Image
              src="/PokeLogo.png"
              alt="Pokémon Logo"
              width={200} // smaller for mobile
              height={200}
              quality={80}
            />
            <Image
              src="/Pika.png"
              alt="Pikachu"
              width={180}
              height={288}
              quality={80}
            />
            <Image
              src="/PokeFrameLeft.png"
              alt="Collectibles Left"
              width={200}
              height={289}
              quality={80}
            />
            <Image
              src="/PokeFrameRight.png"
              alt="Collectibles Right"
              width={300}
              height={185}
              quality={80}
            />
          </div>

          {/* Desktop / sm+ layout */}
          <div className="hidden sm:block">
            <div className="sm:absolute sm:left-6 sm:-bottom-30 sm:z-10 mb-8 sm:mb-0">
              <Image
                src="/PokeFrameLeft.png"
                alt="Collectibles Left"
                width={450}
                height={650}
                quality={80}
              />
            </div>

            <div className="sm:absolute sm:right-16 sm:-bottom-50 sm:z-20 mb-8 sm:mb-0">
              <Image
                src="/PokeFrameRight.png"
                alt="Collectibles Right"
                width={650}
                height={400}
                quality={80}
              />
            </div>

            <div className="sm:absolute sm:right-40 sm:bottom-[160px] sm:z-30 mb-8 sm:mb-0">
              <Image
                src="/Pika.png"
                alt="Pikachu"
                width={250}
                height={400}
                quality={80}
              />
            </div>

            <div className="sm:absolute sm:top-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:z-40">
              <Image
                src="/PokeLogo.png"
                alt="Pokémon Logo"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Last Grid */}
      <section className="max-w-6xl mx-auto mt-60 px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-56 rounded-lg overflow-hidden">
                <Image
                  src={`/grid${i}.png`}
                  alt={`Item ${i}`}
                  width={224}
                  height={i === 1 ? 176 : 108} // scale first differently as example
                  objectFit="contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-blue-900 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-white text-center text-xl font-bold">
            © 2025 HOUSE OF TRAN LLC ALL RIGHTS RESERVED
          </h2>
        </div>
      </section>
    </div>
  );
}
