import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer__container">
      <div className="footer__author">Developed by English Mast</div>
      <div className="footer__year">new Date().getFullYear()</div>
    </footer>
  );
}
