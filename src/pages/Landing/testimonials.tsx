import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import testimonialsImage from "../../assets/testimonial.jpg";

const testimonials = [
  {
    quote:
      "ASCH turned a potential crisis into one of the most positive press cycles we've ever had. Their speed, composure, and strategic clarity are unmatched. Within 48 hours, the narrative had completely shifted in our favour.",
    name: "Keith Middleton",
    title: "Tech Officer, ASCH",
    img: testimonialsImage,
  },
  {
    quote:
      "The executive media training programme was transformative. Our leadership team now speaks with one voice — confident, clear, and compelling. Our next quarterly earnings call was our most positively covered ever.",
    name: "James Whitfield",
    title: "Communication Director, GreenTech Innovations",
    img: "https://images.unsplash.com/photo-1758599543154-76ec1c4257df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
  },
  {
    quote:
      "From day one, the ASCH team felt like an extension of our own. Their media relationships opened doors that had been closed to us for years, and the coverage quality exceeded every benchmark we set.",
    name: "Priya Menon",
    title: "Head of Brand & PR, Nova Health",
    img: "https://images.unsplash.com/photo-1770058428154-9eee8a6a1fbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section className="bg-[#004945] py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="inline-block px-3 py-1 rounded-full text-xs mb-4 uppercase tracking-widest bg-[#caef45] text-[#004945]"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}
          >
            Client Stories
          </p>
          <h2
            className="text-white"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            What our clients say
          </h2>
        </div>

        {/* Card */}
        <div className="relative rounded-3xl p-8 md:p-12 bg-white/5 border border-white/10">
          <Quote size={40} className="text-[#caef45] opacity-40 mb-6" />

          <p
            className="text-white/85 text-lg md:text-xl leading-relaxed mb-10"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500 }}
          >
            "{t.quote}"
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={t.img}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#caef45]"
              />
              <div>
                <p
                  className="text-white font-semibold text-sm"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {t.name}
                </p>
                <p
                  className="text-white/50 text-xs"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  {t.title}
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#caef45] hover:text-[#caef45] transition-all"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#caef45] hover:text-[#caef45] transition-all"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-6 justify-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="rounded-full transition-all"
                style={{
                  width: i === active ? "24px" : "8px",
                  height: "8px",
                  background: i === active ? "#caef45" : "rgba(255,254,240,0.25)",
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Testimonials;