// Import logos locally from your assets folder
import cprLogo from "../../assets/cpr.png";
import knhLogo from "../../assets/knh.png";
import assistLogo from "../../assets/cropped-mfa.jpg";
import gniasLogo from "../../assets/gnias.png";
import mfaLogo from "../../assets/mfa.png";
import prpLogo from "../../assets/prp.png";

function ClientLogos() {
  const logos = [
    { name: "Centre For Public Relations", src: cprLogo },
    { name: "Kenyatta National Hospital", src: knhLogo },
    { name: "Assist", src: assistLogo },
    { name: "GNIAS", src: gniasLogo },
    { name: "MFA", src: mfaLogo },
    { name: "Press Release Portal", src: prpLogo },
  ];

  return (
    <section className="bg-[#F2F7FF] py-12 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <p
          className="text-center text-xs uppercase tracking-widest text-black/40 mb-8"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
        >
          Featured in & trusted by leading organisations
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {logos.map((logo) => (
            <div 
              key={logo.name} 
              className="flex items-center justify-center h-12 max-w-[140px] md:max-w-[160px]"
            >
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              ) : (
                /* Fallback text if an image import fails */
                <span
                  className="text-[#0E1E3D] text-base md:text-lg opacity-50"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, letterSpacing: "-0.02em" }}
                >
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientLogos;