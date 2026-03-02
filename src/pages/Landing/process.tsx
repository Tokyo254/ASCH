const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    description:
      "We start with a deep-dive into your organisation, audiences, and current communication landscape. Stakeholder interviews, media audits, and sentiment analysis.",
  },
  {
    number: "02",
    title: "Strategy Design",
    description:
      "We build a bespoke communication strategy — narrative architecture, channel mix, spokesperson guidance, and a clear messaging hierarchy.",
  },
  {
    number: "03",
    title: "Execution & Activation",
    description:
      "Our team implements across media outreach, content creation, executive preparation, and campaign management — fully integrated.",
  },
  {
    number: "04",
    title: "Measure & Evolve",
    description:
      "Ongoing monitoring, coverage analysis, and quarterly strategy reviews ensure your communication stays sharp and ahead of the curve.",
  },
];

function Process() {
  return (
    <section id="process" className="bg-[#fffef0] py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="inline-block px-3 py-1 rounded-full text-xs mb-4 uppercase tracking-widest bg-[#004945] text-[#caef45]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
          >
            How We Work
          </p>
          <h2
            className="text-[#004945] mx-auto max-w-xl"
            style={{
              fontFamily: "'Host Grotesk', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            A process designed for clarity and impact
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative p-7 rounded-3xl flex flex-col"
              style={{
                background: i === 1 ? "#004945" : "#f0f0e4",
              }}
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 right-0 translate-x-1/2 z-10 w-6 h-px"
                  style={{ background: i === 0 || i === 2 ? "#004945" : "#caef45", opacity: 0.3 }}
                />
              )}

              <span
                className="mb-4"
                style={{
                  fontFamily: "'Host Grotesk', sans-serif",
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  color: i === 1 ? "#caef45" : "#004945",
                  opacity: i === 1 ? 1 : 0.2,
                  lineHeight: 1,
                }}
              >
                {step.number}
              </span>

              <h3
                className="mb-3"
                style={{
                  fontFamily: "'Host Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: i === 1 ? "#fffef0" : "#121212",
                }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: i === 1 ? "rgba(255,254,240,0.6)" : "rgba(18,18,18,0.55)",
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Process;