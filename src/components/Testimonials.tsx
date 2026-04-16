const testimonials = [
  {
    name: "Camila Restrepo",
    location: "Bogotá",
    text: "Desde que probé el Sierra Nevada no puedo tomar otro café. Se siente la diferencia de un café cultivado con amor y tostado con cuidado.",
  },
  {
    name: "Andrés Mejía",
    location: "Medellín",
    text: "El mejor café de especialidad que he probado en Colombia. Las notas de chocolate y panela son increíbles. Ya es parte de mi ritual diario.",
  },
  {
    name: "Valentina Ochoa",
    location: "Cartagena",
    text: "Me encanta saber que detrás de cada bolsa hay una familia real. El café es espectacular y el proceso de pedido súper fácil.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-24 px-6 bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <p className="text-gold font-body tracking-[0.3em] uppercase text-sm text-center mb-3">
          Lo que dicen
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-center text-cream mb-16">
          Nuestros Clientes
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-lg p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed italic flex-1">
                "{t.text}"
              </p>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-cream font-heading text-base">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
