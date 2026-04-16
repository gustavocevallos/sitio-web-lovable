import heroImg from "@/assets/hero-product.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Botero Café de Especialidad"
          className="w-full h-full object-cover"
          width={1500}
          height={750}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-gold font-body tracking-[0.3em] uppercase text-sm mb-4 animate-fade-up">
          Café de Especialidad
        </p>
        <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-cream mb-6 animate-fade-up-delay">
          BOTERO
        </h1>
        <p className="font-heading text-2xl md:text-4xl italic text-gold-light animate-fade-up-delay-2">
          Café de altura
        </p>
        <div className="mt-10 animate-fade-up-delay-2">
          <a
            href="#productos"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 font-body uppercase tracking-widest text-sm hover:bg-gold-light transition-colors duration-300 rounded-sm"
          >
            Descubrir
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
