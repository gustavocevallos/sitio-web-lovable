import { MessageCircle, Package, Truck } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Escríbenos",
    description: "Contáctanos por WhatsApp o Instagram y elige tu café favorito.",
  },
  {
    icon: Package,
    title: "Preparamos tu pedido",
    description: "Tostamos y empacamos tu café con el mayor cuidado, garantizando frescura.",
  },
  {
    icon: Truck,
    title: "Envío a tu puerta",
    description: "Recibe tu café de especialidad directamente en la puerta de tu casa.",
  },
];

const OrderProcess = () => {
  return (
    <section id="pedido" className="py-24 px-6 bg-muted/50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gold font-body tracking-[0.3em] uppercase text-sm mb-3">
          Fácil y directo
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-cream mb-16">
          ¿Cómo pedir?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-5">
                <step.icon className="w-7 h-7 text-gold" />
              </div>
              <span className="text-gold/60 text-xs tracking-widest mb-2">
                PASO {i + 1}
              </span>
              <h3 className="font-heading text-xl text-cream mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-forest text-secondary-foreground px-8 py-3 font-body uppercase tracking-widest text-sm hover:bg-forest-light transition-colors duration-300 rounded-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Pedir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default OrderProcess;
