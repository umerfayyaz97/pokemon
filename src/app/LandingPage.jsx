import Image from "next/image";

// export default function LandingPage() {
//   return (
//     <div>
//       <section className="relative w-full h-100">
//         {/* Background Image */}
//         <Image
//           src="/section1bg.png"
//           alt="House Background"
//           layout="fill"
//           objectFit="cover"
//           quality={80}
//           className="brightness-50"
//         />

//         {/* Overlay content */}
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
//           {/* Logo */}
//           <div className="mb-4">
//             <Image
//               src="/logo.png"
//               alt="House of Tran Logo"
//               width={80}
//               height={80}
//             />
//           </div>

//           {/* Logo name */}
//           <h1 className="text-white text-4xl md:text-5xl font-bold tracking-widest mb-4">
//             HOUSE OF TRAN
//           </h1>

//           {/* Description */}
//           <p className="text-white max-w font-semibold bg-opacity-90 px-4 py-2 rounded">
//             Building our vision through new business developments, capital
//             investments, and acquisitions.
//           </p>
//         </div>
//       </section>
//       {/* Black Separater */}
//       <section className="w-full bg-black py-6">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-white text-center text-3xl font-bold">
//             Real Estate
//           </h2>
//         </div>
//       </section>

//       {/* Real Estate Section */}
//       <section className="w-full ">
//         <div className="grid grid-cols-2 gap-0 ">
//           {/* First Image */}
//           <div className="relative ">
//             <Image
//               src="/sec2-1.png"
//               alt="Real Estate 1"
//               //   layout="fill"
//               height={700}
//               width={700}
//               objectFit="contain"
//               quality={80}
//               className="brightness-50"
//             />
//             <div className="absolute bottom-12 text-2xl left-0 right-0  bg-opacity-60 text-white text-center py-2 font-semibold">
//               Orange County
//             </div>
//             <div className="absolute bottom-0 left-0 right-0  bg-opacity-60 text-white text-center py-2 font-semibold">
//               1 Property
//             </div>
//           </div>

//           {/* Second Image */}
//           <div className="relative ">
//             <Image
//               src="/sec2-2.png"
//               alt="Real Estate 2"
//               // layout="fill"
//               height={700}
//               width={700}
//               objectFit="contain"
//               quality={80}
//               className="brightness-50"
//             />
//             <div className="absolute bottom-12 text-2xl left-0 right-0  bg-opacity-60 text-white text-center py-2 font-semibold">
//               Houston
//             </div>
//             <div className="absolute bottom-0 left-0 right-0  bg-opacity-60 text-white text-center py-2 font-semibold">
//               1 Property
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="w-full bg-black py-6">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-white text-center text-3xl font-bold">
//             Wall Street
//           </h2>
//         </div>
//       </section>

//       <section className="w-full flex justify-center my-0 px-0 ">
//         <div className="relative">
//           <Image
//             src="/wallStreet.png"
//             alt="Centered Showcase"
//             width={1116}
//             height={2880}
//             objectFit="contain"
//             quality={80}
//           />
//         </div>
//       </section>

//       <section className="w-full bg-black py-6">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-white text-center text-3xl font-bold">
//             Collectibles{" "}
//           </h2>
//         </div>
//       </section>

//       {/* Section 4: Collectibles */}
//       <section
//         className="w-full bg-white py-12 relative"
//         style={{ minHeight: 750 }}
//       >
//         <div
//           className="max-w-6xl mx-auto relative px-6 pb-[200px]" // added bottom padding here
//           style={{ height: 700 }}
//         >
//           {/* Left Frame */}
//           <div className="absolute left-6 -bottom-30 z-10">
//             <Image
//               src="/PokeFrameLeft.png"
//               alt="Collectibles Left"
//               width={450}
//               height={650}
//               quality={80}
//             />
//           </div>

//           {/* Right Frame */}
//           <div className="absolute right-16 -bottom-50 z-20">
//             <Image
//               src="/PokeFrameRight.png"
//               alt="Collectibles Right"
//               width={650}
//               height={400} // fixed height here
//               quality={80}
//             />
//           </div>

//           {/* Pikachu */}
//           <div className="absolute right-40 bottom-[160px] z-30">
//             <Image
//               src="/Pika.png"
//               alt="Pikachu"
//               width={250}
//               height={400}
//               quality={80}
//             />
//           </div>

//           {/* Pokémon Logo centered above all */}
//           <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-40">
//             <Image
//               src="/PokeLogo.png"
//               alt="Pokémon Logo"
//               width={300}
//               height={300}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Last grid */}

//       <section className="max-w-6xl mx-auto mt-60 px-6 py-12 p-6">
//         <div className="grid grid-cols-3 grid-rows-3 gap-8">
//           {/* First Row: 3 items */}
//           <div className="flex flex-col items-center">
//             <div className="w-56 rounded-lg overflow-hidden">
//               <Image
//                 src="/grid1.png"
//                 alt="Item 1"
//                 width={224} // scaled up width
//                 height={176} // scaled proportionally
//                 objectFit="contain"
//               />
//             </div>
//           </div>
//           <div className="flex flex-col items-center">
//             <div className="w-56 rounded-lg overflow-hidden">
//               <Image
//                 src="/grid2.png"
//                 alt="Item 2"
//                 width={224}
//                 height={108}
//                 objectFit="contain"
//               />
//             </div>
//           </div>
//           <div className="flex flex-col items-center">
//             <div className="w-56 rounded-lg overflow-hidden">
//               <Image
//                 src="/grid3.png"
//                 alt="Item 3"
//                 width={224}
//                 height={108}
//                 objectFit="contain"
//               />
//             </div>
//           </div>

//           {/* Second Row: 3 items */}
//           <div className="flex flex-col items-center">
//             <div className="w-56 rounded-lg overflow-hidden">
//               <Image
//                 src="/grid4.png"
//                 alt="Item 4"
//                 width={224}
//                 height={108}
//                 objectFit="contain"
//               />
//             </div>
//           </div>
//           <div className="flex flex-col items-center">
//             <div className="w-56 rounded-lg overflow-hidden">
//               <Image
//                 src="/grid5.png"
//                 alt="Item 5"
//                 width={224}
//                 height={108}
//                 objectFit="contain"
//               />
//             </div>
//           </div>
//           <div className="flex flex-col items-center">
//             <div className="w-56 rounded-lg overflow-hidden">
//               <Image
//                 src="/grid6.png"
//                 alt="Item 6"
//                 width={224}
//                 height={108}
//                 objectFit="contain"
//               />
//             </div>
//           </div>

//           {/* Last Row: 1 item spanning all columns */}
//           <div className="col-span-3 flex justify-start ml-15">
//             <div className="max-w-xs w-full rounded-lg overflow-hidden">
//               <Image
//                 src="/grid7.png"
//                 alt="Item 7"
//                 width={224}
//                 height={108}
//                 objectFit="contain"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="mt-30  w-full bg-blue-900 py-6">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-white text-center text-xl font-bold">
//             © 2025 HOUSE OF TRAN LLC ALL RIGHTS RESERVED
//           </h2>
//         </div>
//       </section>
//     </div>
//   );
// }

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
