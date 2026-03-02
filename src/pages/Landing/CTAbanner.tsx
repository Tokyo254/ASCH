import { ArrowRight } from "lucide-react";

function CTABanner() {
  return (
    <section id="contact" className="bg-[#F2F7FF] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#0E1E3D] rounded-3xl px-8 md:px-16 py-14 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
          {/* Decorative circle */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute bottom-0 right-40 w-40 h-40 rounded-full bg-[#4EAEFF]/10 pointer-events-none" />

          {/* Text */}
          <div className="max-w-xl relative z-10">
            <p
              className="inline-block px-3 py-1 rounded-full text-xs mb-4 uppercase tracking-widest bg-[#4EAEFF] text-[#0E1E3D]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
            >
              Ready to Start?
            </p>
            <h2
              className="text-white mb-4"
              style={{
                fontFamily: "'Host Grotesk', sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              Let's shape your story together
            </h2>
            <p
              className="text-white/65 text-base leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Whether you're navigating a crisis, launching a campaign, or
              building long-term reputation equity — Clarion is ready to help.
              Request a confidential proposal today.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 relative z-10">
            <a
              href="mailto:hello@clarioncomms.co"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#4EAEFF] text-[#121212] font-bold text-base hover:bg-[#d8f55a] transition-all shadow-lg"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Request a Proposal
              <ArrowRight size={18} />
            </a>
            <a
              href="tel:+442071234567"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-semibold text-base hover:bg-white/5 transition-all"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CTABanner;