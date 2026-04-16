import heroProduct from "@/assets/hero-product.png";
import blendCasa from "@/assets/blend-casa.png";
import coffeeBeans from "@/assets/coffee-beans.jpg";

const products = [
  {
    name: "Sierra Nevada",
    origin: "Single Origin — Colombia",
    notes: "Chocolate oscuro, panela, frutos rojos",
    weight: "1 kg",
    altitude: "1.600 msnm",
    image: heroProduct,
  },
  {
    name: "Blend Casa",
    origin: "Mezcla de finca",
    notes: "Caramelo, nuez, cítricos suaves",
    weight: "500 g",
    altitude: "1.400 msnm",
    image: blendCasa,
  },
  {
    name: "Micro Lote Especial",
    origin: "Lote limitado — Sierra Nevada",
    notes: "Floral, miel, mandarina",
    weight: "250 g",
    altitude: "1.800 msnm",
    image: coffeeBeans,
  },
];

const Products = () => {
  return (
    <section id="productos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-gold font-body tracking-[0.3em] uppercase text-sm text-center mb-3">
          Nuestros cafés
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-center text-cream mb-16">
          Productos Destacados
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.name}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-gold/30 transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-1">
                  {p.origin}
                </p>
                <h3 className="font-heading text-2xl text-cream mb-3">{p.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  Notas: {p.notes}
                </p>
                <div className="flex justify-between text-xs text-muted-foreground border-t border-border pt-3">
                  <span>{p.weight}</span>
                  <span>{p.altitude}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
