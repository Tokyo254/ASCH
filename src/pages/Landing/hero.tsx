import { ArrowRight, ChevronDown } from "lucide-react";

function Hero() {
  return (
    <section className="relative bg-[#004945] overflow-hidden min-h-screen flex flex-col">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#003a36] opacity-60 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#003a36] opacity-40 -translate-x-1/4 translate-y-1/4 pointer-events-none" />

      {/* Lime accent dot cluster */}
      <div className="absolute top-32 right-24 w-2 h-2 rounded-full bg-[#caef45] opacity-80 pointer-events-none" />
      <div className="absolute top-40 right-32 w-1 h-1 rounded-full bg-[#caef45] opacity-50 pointer-events-none" />
      <div className="absolute bottom-40 left-16 w-3 h-3 rounded-full bg-[#caef45] opacity-30 pointer-events-none" />

      {/* Main hero content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 md:px-12 pt-12 pb-24 relative z-10">
        {/* Eyebrow tag */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white/70 text-sm mb-8"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#caef45]" />
          Strategic Communication Consultancy
        </div>

        {/* Main headline */}
        <h1
          className="text-white max-w-4xl mb-6"
          style={{
            fontFamily: "'Host Grotesk', sans-serif",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Shape the narrative.{" "}
          <span className="text-[#caef45]">Command</span> your story.
        </h1>

        {/* Subtitle */}
        <p
          className="text-white/70 max-w-2xl mb-10 text-lg md:text-xl leading-relaxed"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
        >
          ASCH helps organisations, leaders, and brands cut through the noise
          — with strategic messaging, crisis communication, and media relations
          that move people to action.
        </p>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#caef45] text-[#121212] font-bold text-base hover:bg-[#d8f55a] transition-all shadow-lg shadow-black/20"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Start a Conversation
            <ArrowRight size={18} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-semibold text-base hover:border-white/60 hover:bg-white/5 transition-all"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Explore Services
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-6 md:gap-16 max-w-2xl w-full">
          {[
            { value: "200+", label: "Clients Served" },
            { value: "18+", label: "Years of Expertise" },
            { value: "94%", label: "Media Placement Rate" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <span
                className="text-[#caef45]"
                style={{
                  fontFamily: "'Host Grotesk', sans-serif",
                  fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                {value}
              </span>
              <span
                className="text-white/50 text-xs md:text-sm mt-1 text-center"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <ChevronDown size={20} className="text-white/40" />
      </div>
    </section>
  );
}

export default Hero; 