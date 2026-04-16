import coffeeHands from "@/assets/coffee-hands.jpg";
import coffeeFarm from "@/assets/coffee-farm.jpg";

const Story = () => {
  return (
    <section id="historia" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gold font-body tracking-[0.3em] uppercase text-sm">
              Nuestra historia
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-cream leading-tight">
              Raíces que dan <span className="italic text-gold-light">fruto</span>
            </h2>
            <blockquote className="text-foreground/80 text-lg leading-relaxed font-light border-l-2 border-gold/40 pl-6">
              "Mis abuelos y mis padres han sido caficultores toda la vida. Recuerdo ver sus manos
              marcadas por el trabajo, la incertidumbre de cada cosecha y también el orgullo de sacar
              adelante algo propio."
            </blockquote>
            <p className="text-muted-foreground leading-relaxed">
              Botero nace de esa herencia. De generaciones que cultivaron con paciencia en las
              montañas de la Sierra Nevada de Santa Marta. Hoy honramos ese legado llevando café
              de especialidad directamente desde el origen hasta tu taza.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={coffeeHands}
              alt="Manos de caficultor recogiendo cerezas de café"
              loading="lazy"
              width={800}
              height={800}
              className="rounded-lg w-full h-64 object-cover mt-8"
            />
            <img
              src={coffeeFarm}
              alt="Finca cafetera en la Sierra Nevada"
              loading="lazy"
              width={1280}
              height={720}
              className="rounded-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
