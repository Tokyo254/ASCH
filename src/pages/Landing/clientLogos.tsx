function ClientLogos() {
  const logos = [
    "Centre For Public Relations",
    "Kenyatta National Hospital",
    "Assist",
    "GNIAS",
    "MFA",
    "Press Release Portal",
  ];

  return (
    <section className="bg-[#fffef0] py-10 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <p
          className="text-center text-xs uppercase tracking-widest text-black/40 mb-7"
          style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
        >
          Featured in & trusted by leading organisations
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-50">
          {logos.map((name) => (
            <span
              key={name}
              className="text-[#004945] text-base md:text-lg"
              style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientLogos;
