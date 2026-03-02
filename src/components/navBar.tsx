import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = ["Services", "About", "Process", "Team", "Insights"];

  return (
    <nav className="w-full px-6 md:px-12 lg:px-20 py-5 flex items-center justify-between relative z-50">
      {/* Logo */}
      <div
        className="flex items-center gap-2"
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        <div className="w-8 h-8 rounded-full bg-[#caef45] flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-[#004945]" />
        </div>
        <span className="text-white font-extrabold text-xl tracking-tight">
          ASCH
        </span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            {link}
          </a>
        ))}
      </div>

      {/* Desktop CTA */}
      <div className="hidden md:flex items-center gap-6">
        <a
          href="#contact"
          className="text-white/80 hover:text-white text-sm font-semibold transition-colors"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          Contact
        </a>
        <a
          href="#contact"
          className="px-6 py-2.5 rounded-full border border-white text-white text-sm font-semibold hover:bg-white hover:text-[#004945] transition-all"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          Get a Proposal
        </a>
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-white p-1"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#004945] border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white/80 hover:text-white text-base font-medium"
              style={{ fontFamily: "'Manrope', sans-serif" }}
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 px-6 py-3 rounded-full bg-[#caef45] text-[#121212] text-sm font-bold text-center"
            style={{ fontFamily: "'Manrope', sans-serif" }}
            onClick={() => setMobileOpen(false)}
          >
            Get a Proposal
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;