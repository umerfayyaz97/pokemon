<section className="w-full bg-white py-12 relative" style={{ minHeight: 750 }}>
  <div className="max-w-6xl mx-auto relative px-6" style={{ height: 700 }}>
    {/* Left Frame */}
    <div className="absolute left-6 -bottom-30 z-20">
      {/* left-6 = 1.5rem */}
      <Image
        src="/PokeFrameLeft.png"
        alt="Collectibles Left"
        width={450}
        height={650}
        quality={80}
      />
    </div>

    {/* Right Frame  */}
    <div className="absolute right-6 -bottom-50 z-10">
      {" "}
      {/* right-6 = 1.5rem, bottom-60 = 15rem */}
      <Image
        src="/PokeFrameRight.png"
        alt="Collectibles Right"
        width={650}
        height={0}
        quality={80}
      />
    </div>

    {/* Pikachu */}
    <div className="absolute right-40 bottom-[160px] z-30">
      <Image
        src="/Pika.png"
        alt="Pikachu"
        width={250}
        height={400}
        quality={80}
      />
    </div>

    {/* Pokémon Logo centered above all */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-40">
      <Image src="/PokeLogo.png" alt="Pokémon Logo" width={300} height={300} />
    </div>
  </div>
</section>;
