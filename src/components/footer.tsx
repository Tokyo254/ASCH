import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const services = [
  "Strategic Messaging",
  "Crisis Communication",
  "Media Relations",
  "Executive Coaching",
  "Digital Strategy",
  "Reputation Management",
];

const company = ["About Us", "Our Team", "Insights & Blog", "Case Studies", "Careers"];

 function Footer() {
  return (
    <footer className="bg-[#0E1E3D] pt-16 pb-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              {/* <div className="w-8 h-8 rounded-full bg-[#4EAEFF] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#0E1E3D]" />
              </div> */}
              <span
                className="text-white font-extrabold text-xl tracking-tight"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Africa Strategic Communication Hub
              </span>
            </div>
            <p
              className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Strategic communication consultancy helping organisations shape
              narratives, protect reputations, and move audiences.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-white/15 text-white/50 hover:border-[#4EAEFF] hover:text-[#4EAEFF] transition-all"
                  aria-label="Social"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white font-semibold text-sm mb-5 uppercase tracking-wider"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-white/50 text-sm hover:text-white transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-white font-semibold text-sm mb-5 uppercase tracking-wider"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Company
            </h4>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/50 text-sm hover:text-white transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-semibold text-sm mb-5 uppercase tracking-wider"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Get in Touch
            </h4>
            <ul className="space-y-4">
              {[
                { icon: Mail, text: "info@asch.africa" },
                { icon: Phone, text: "+254 111 978418" },
                { icon: MapPin, text: "ABC Place, Nairobi, Kenya" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon size={15} className="text-[#4EAEFF] shrink-0 mt-0.5" />
                  <span
                    className="text-white/50 text-sm leading-snug"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-white/30 text-xs"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            © 2026 Africa Strategic Communication Hub. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/30 text-xs hover:text-white/60 transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;