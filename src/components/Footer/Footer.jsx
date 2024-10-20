const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content h-10 p-2 shadow-inner shadow-blue-300">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
