import { CheckCircle2 } from "lucide-react";

const stats: Array<{ value: string; label: string }> = [
  { value: "200+", label: "Client Engagements" },
  { value: "18", label: "Years in Practice" },
  { value: "94%", label: "Media Placement Rate" },
  { value: "40+", label: "Industries Served" },
];

const pillars: string[] = [
  "Honest, evidence-based counsel",
  "Rapid response capability (24/7)",
  "Integrated cross-channel approach",
  "Senior-led on every account",
];

 function AboutStats() {
  return (
    <section id="about" className="bg-[#004945] py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p
              className="inline-block px-3 py-1 rounded-full text-xs mb-5 uppercase tracking-widest bg-[#caef45] text-[#004945]"
              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}
            >
              About Clarion
            </p>
            <h2
              className="text-white mb-6"
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Built for the moments that matter most
            </h2>
            <p
              className="text-white/65 mb-8 text-base leading-relaxed"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Clarion was founded on a simple belief: the right words, delivered
              at the right moment, can change everything. We partner with CEOs,
              governments, NGOs, and fast-growth brands to develop communication
              strategies that build trust, protect reputation, and move audiences
              to action.
            </p>

            <ul className="space-y-3 mb-10">
              {pillars.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#caef45] shrink-0" />
                  <span
                    className="text-white/75 text-sm"
                    style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500 }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#caef45] text-[#121212] font-bold text-sm hover:bg-[#d8f55a] transition-all"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Meet the team
            </a>
          </div>

          {/* Right: Stats grid + image */}
          <div className="flex flex-col gap-6">
            {/* Image */}
            <div className="rounded-3xl overflow-hidden h-64">
              <img
                src="https://images.unsplash.com/photo-1758599543121-90a7b360bc2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
                alt="Communication strategy meeting"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl p-6"
                  style={{ background: "rgba(255,254,240,0.07)" }}
                >
                  <span
                    className="block text-[#caef45] mb-1"
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontSize: "2rem",
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    {value}
                  </span>
                  <span
                    className="text-white/50 text-sm"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStats;