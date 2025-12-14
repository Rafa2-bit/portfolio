
export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-400 py-9 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center gap-6">

        {/* Text */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Rafael — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}




