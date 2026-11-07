// Pie de página compartido. El año cambia automáticamente.
export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Natalie Pariona Cosi. Portafolio profesional.</p>
    </footer>
  );
}
