const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-base-content p-4">
      <div className="container mx-auto text-center text-white">
        <p>Copyrigh© {year} - Tous droits réservés</p>
      </div>
    </footer>
  );
};

export default Footer;
