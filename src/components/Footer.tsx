const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-heading text-xl font-bold text-cream">BOTERO</p>
          <p className="text-muted-foreground text-sm mt-1">Café de Especialidad</p>
        </div>
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} Botero. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
