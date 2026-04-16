import heroProduct from "@/assets/hero-product.png";
import coffeeBeans from "@/assets/coffee-beans.jpg";
import coffeeFarm from "@/assets/coffee-farm.jpg";
import coffeeHands from "@/assets/coffee-hands.jpg";
import coffeeBrewing from "@/assets/coffee-brewing.jpg";
import coffeeLatte from "@/assets/coffee-latte.jpg";

const images = [
  { src: heroProduct, alt: "Producto Botero Sierra Nevada", span: "md:col-span-2 md:row-span-2" },
  { src: coffeeBeans, alt: "Granos de café de especialidad", span: "" },
  { src: coffeeBrewing, alt: "Preparación de café", span: "" },
  { src: coffeeFarm, alt: "Finca cafetera", span: "md:col-span-2" },
  { src: coffeeHands, alt: "Manos de caficultor", span: "" },
  { src: coffeeLatte, alt: "Latte art", span: "" },
];

const Gallery = () => {
  return (
    <section id="galeria" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-gold font-body tracking-[0.3em] uppercase text-sm text-center mb-3">
          Desde el origen
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-center text-cream mb-16">
          Galería
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
          {images.map((img) => (
            <div
              key={img.alt}
              className={`overflow-hidden rounded-lg ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
