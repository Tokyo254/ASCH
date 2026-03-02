import { Megaphone, Shield, Globe, BarChart3, Mic2, Newspaper } from "lucide-react";
import service1 from "../../assets/service1.jpg";
import service3 from "../../assets/service2.jpg";
import service6 from "../../assets/service3.jpg";               

const services = [
  {
    icon: Megaphone,
    title: "Strategic Messaging",
    description:
      "We craft precise narratives that resonate with your audiences — from internal communications to investor statements and public positioning.",
    tag: "Core Service",
    img: service1,
  },
  {
    icon: Shield,
    title: "Crisis Communication",
    description:
      "When reputations are at risk, we're the first call. Rapid-response strategies, holding statements, and media management — delivered under pressure.",
    tag: "High Priority",
    img: "https://images.unsplash.com/photo-1705234384669-c6d31c61b789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    icon: Newspaper,
    title: "Media Relations",
    description:
      "Deep editorial relationships across print, broadcast, and digital outlets. We secure the coverage your brand needs and deserves.",
    tag: "Core Service",
    img: "https://images.unsplash.com/photo-1764874299006-bf4266427ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    icon: Mic2,
    title: "Executive Coaching",
    description:
      "Media training, speech coaching, and presence work for C-suite leaders. Be confident, compelling, and camera-ready.",
    tag: "Leadership",
    img: service3,
  },
  {
    icon: Globe,
    title: "Digital & Social Strategy",
    description:
      "Owned channel strategy, content frameworks, and social listening to amplify your message and grow your audience authentically.",
    tag: "Digital",
    img: "https://images.unsplash.com/photo-1676282827533-d6058df56a69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    icon: BarChart3,
    title: "Reputation Management",
    description:
      "Proactive monitoring, sentiment analysis, and long-term brand equity building that keeps your reputation ahead of the news cycle.",
    tag: "Core Service",
    img: service6,
  },
];

function Services() {
  return (
    <section id="services" className="bg-[#fffef0] py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <p
              className="text-[#caef45] bg-[#004945] inline-block px-3 py-1 rounded-full text-xs mb-4 uppercase tracking-widest"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
            >
              What We Do
            </p>
            <h2
              className="text-[#004945]"
              style={{
                fontFamily: "'Host Grotesk', sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Communication that<br />drives real results
            </h2>
          </div>
          <p
            className="text-black/60 max-w-sm text-sm leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Six integrated disciplines. One consultancy. Built for organisations
            that understand the power of getting communication right.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-transform hover:-translate-y-1 ${
                  i === 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                style={{ background: i % 3 === 1 ? "#004945" : "#f0f0e4" }}
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: i % 3 === 1 ? "#caef45" : "#004945",
                      }}
                    >
                      <Icon
                        size={18}
                        color={i % 3 === 1 ? "#004945" : "#caef45"}
                      />
                    </div>
                    <span
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        background:
                          i % 3 === 1 ? "rgba(202,239,69,0.15)" : "rgba(0,73,69,0.1)",
                        color: i % 3 === 1 ? "#caef45" : "#004945",
                      }}
                    >
                      {service.tag}
                    </span>
                  </div>

                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "'Host Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: i % 3 === 1 ? "#fffef0" : "#121212",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: i % 3 === 1 ? "rgba(255,254,240,0.65)" : "rgba(18,18,18,0.6)",
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
