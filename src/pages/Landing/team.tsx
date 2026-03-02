import { Linkedin, Twitter } from "lucide-react";
import team1 from "../../assets/team2.jpeg";
import team2 from "../../assets/team1.jpeg";
import team3 from "../../assets/team3.jpeg"; 


const team = [
  {
    name: "Chris Wangalwa",
    role: "Managing Director",
    bio: "Seasoned communications strategist with 15+ years leading campaigns for top African brands and governments. Expert in media relations, crisis response, and executive coaching.",
    img: team1,
    accent: true,
  },
  {
    name: "Ronald Arara",
    role: "Co Director",
    bio: "Operations and strategy lead with a background in journalism and corporate communications. Ronald ensures every client engagement is executed flawlessly and delivers measurable impact.",
    img: team2,
    accent: false,
  },
  {
    name: "Charity Idaya",
    role: "Senior Communications Advisor",
    bio: "Strategic communications expert with deep experience in public affairs, media training, and digital strategy. Charity has advised government agencies and multinational corporations across Africa.",
    img: team3,
    accent: false,
  },
];
function Team() {
  return (
    <section id="team" className="bg-[#fffef0] py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p
              className="inline-block px-3 py-1 rounded-full text-xs mb-4 uppercase tracking-widest bg-[#004945] text-[#caef45]"
              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}
            >
              Our Team
            </p>
            <h2
              className="text-[#004945]"
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Senior advisors.<br />Every account.
            </h2>
          </div>
          <p
            className="text-black/55 max-w-sm text-sm leading-relaxed"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            You'll always work directly with the people at the top. No juniors
            running your account — ever.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-3xl overflow-hidden group"
              style={{ background: member.accent ? "#004945" : "#f0f0e4" }}
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: member.accent
                      ? "linear-gradient(to bottom, transparent 50%, #004945 100%)"
                      : "linear-gradient(to bottom, transparent 50%, #f0f0e4 100%)",
                  }}
                />
              </div>

              {/* Info */}
              <div className="p-6 -mt-2">
                <h3
                  className="mb-1"
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: member.accent ? "#fffef0" : "#121212",
                  }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-xs mb-3 font-semibold uppercase tracking-wider"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    color: "#caef45",
                  }}
                >
                  {member.role}
                </p>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    color: member.accent
                      ? "rgba(255,254,240,0.6)"
                      : "rgba(18,18,18,0.55)",
                  }}
                >
                  {member.bio}
                </p>

                {/* Social */}
                <div className="flex gap-3">
                  {[Linkedin, Twitter].map((Icon, i) => (
                    <button
                      key={i}
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
                      style={{
                        background: member.accent
                          ? "rgba(202,239,69,0.12)"
                          : "rgba(0,73,69,0.08)",
                        color: member.accent ? "#caef45" : "#004945",
                      }}
                      aria-label="Social link"
                    >
                      <Icon size={14} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Team;