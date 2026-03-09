export default function Footer() {
  return (
    <footer className="bg-slate-950 py-10 text-slate-500 text-xs">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-semibold tracking-widest text-slate-400 uppercase">Kishino Masashi</p>
        <p className="text-center">
          フリーランスエンジニア / 業務自動化・AI活用支援
        </p>
        <p>&copy; {new Date().getFullYear()} Kishino Masashi. All rights reserved.</p>
      </div>
    </footer>
  );
}
