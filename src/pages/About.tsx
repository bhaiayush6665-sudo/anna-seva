import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users, Handshake, Globe, Award } from "lucide-react";

const team = [
  { name: "Amit Patel", role: "Founder & CEO", emoji: "👨‍💼" },
  { name: "Sneha Gupta", role: "Head of Operations", emoji: "👩‍💻" },
  { name: "Vikram Singh", role: "Volunteer Lead", emoji: "🧑‍🤝‍🧑" },
  { name: "Pooja Reddy", role: "Community Manager", emoji: "👩‍🎤" },
];

const impactStats = [
  { label: "Meals Donated", value: 125000, icon: Heart },
  { label: "Volunteers", value: 12000, icon: Users },
  { label: "Cities", value: 85, icon: Globe },
  { label: "NGO Partners", value: 250, icon: Handshake },
];

const partners = ["Akshaya Patra", "Feeding India", "Robin Hood Army", "No Food Waste", "Goonj", "Annamrita"];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hamari <span className="text-gradient-saffron">Kahaani</span> ❤️
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AnnaSeva ek sapna hai jahan koi bhookha na soye. Hum technology aur community ki taakat se extra khana zarooratmandon tak pahunchate hain.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal>
              <Card className="border-none shadow-lg h-full">
                <CardContent className="pt-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-saffron-light flex items-center justify-center">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Hamara Mission 🎯</h3>
                  <p className="text-muted-foreground text-sm">
                    India mein food waste ko khatam karna aur har zarooratmand insaan tak khana pahunchana. Ek plate khana bhi fark daal sakta hai.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <Card className="border-none shadow-lg h-full">
                <CardContent className="pt-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-green-light flex items-center justify-center">
                    <Award className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Hamari Vision 🌟</h3>
                  <p className="text-muted-foreground text-sm">
                    2030 tak har Indian city mein active hona aur 10 crore meals donate karna. Ek aisa India jahan koi bhookha na soye.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-10">
              Hamara <span className="text-gradient-saffron">Impact</span> 📊
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {impactStats.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Card className="text-center border-none shadow-md">
                  <CardContent className="pt-6">
                    <s.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="text-3xl font-bold">
                      <AnimatedCounter end={s.value} suffix="+" />
                    </p>
                    <p className="text-sm text-muted-foreground">{s.label}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-10">
              Hamari <span className="text-gradient-saffron">Team</span> 👥
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {team.map((m, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-saffron flex items-center justify-center text-3xl">
                    {m.emoji}
                  </div>
                  <p className="font-semibold text-sm">{m.name}</p>
                  <p className="text-xs text-muted-foreground">{m.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partner NGOs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-8">
              Partner <span className="text-gradient-saffron">NGOs</span> 🤝
            </h2>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {partners.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="px-6 py-3 rounded-full bg-card shadow-md border text-sm font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  {p}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
