import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = ["Services", "About", "Process", "Team", "Insights"];

  return (
    <nav className="w-full px-6 md:px-12 lg:px-20 py-5 flex items-center justify-between relative z-50 bg-[#0E1E3D]">
      {/* Responsive Brand Logo */}
      <div
        className="flex items-center gap-3 select-none text-white"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {/* Scaled-down Logo Square Frame */}
        <div className="flex items-center justify-center w-12 h-12 border border-[#E31E24] p-[1px] flex-shrink-0">
          <div className="flex items-center justify-center w-full h-full border border-white">
            <span className="text-[11px] font-bold tracking-wide uppercase">
              Asch
            </span>
          </div>
        </div>

        {/* Brand Typography (Hidden text details on tiny screens, clean alignment on small/desktop screens) */}
        <div className="hidden sm:flex flex-col text-left uppercase">
          <h1 className="text-sm font-black tracking-wider leading-none">
            Africa Strategic
          </h1>
          <p className="text-[9px] font-normal tracking-[0.14em] text-blue-100 opacity-90 mt-0.5 leading-none">
            Communication Hub
          </p>
        </div>

        {/* Minimal Mobile Fallback Title for extra small screens under 640px */}
        {/* <span className="sm:hidden font-extrabold text-lg tracking-tight">
          ASCH
        </span> */}
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
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
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Contact
        </a>
        <a
          href="#contact"
          className="px-6 py-2.5 rounded-full border border-white text-white text-sm font-semibold hover:bg-white hover:text-[#0052CB] transition-all"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
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
        <div className="absolute top-full left-0 right-0 bg-[#4EAEFF] border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white/80 hover:text-white text-base font-medium"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 px-6 py-3 rounded-full bg-[#121212] text-[#4EAEFF] text-sm font-bold text-center"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
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