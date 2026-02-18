import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Truck, HandHeart, Users, Utensils, Package, Star, ArrowRight } from "lucide-react";

const stats = [
  { label: "Meals Donated", value: 125000, suffix: "+", icon: Utensils },
  { label: "Families Helped", value: 45000, suffix: "+", icon: Users },
  { label: "Cities Active", value: 85, suffix: "+", icon: Package },
  { label: "Volunteers", value: 12000, suffix: "+", icon: Heart },
];

const steps = [
  { icon: HandHeart, title: "Donate", desc: "Apna extra khana list karein — roti, sabzi, rice, kuch bhi!" },
  { icon: Truck, title: "Pickup", desc: "Hamari team aapke location se khana pick karti hai" },
  { icon: Heart, title: "Deliver", desc: "Zarooratmandon tak khana safely pahuncha diya jaata hai" },
];

const testimonials = [
  { name: "Priya Sharma", city: "Delhi", text: "AnnaSeva ne humari shaadi ke bacha hua khana 200 logo tak pahunchaya. Bahut achha anubhav tha!", rating: 5 },
  { name: "Rajesh Kumar", city: "Mumbai", text: "Har hafte hum apne restaurant ka extra khana donate karte hain. Process bahut aasan hai.", rating: 5 },
  { name: "Sunita Devi", city: "Jaipur", text: "Mere bachche ko roz khana milta hai AnnaSeva ki wajah se. Dhanyavaad! 🙏", rating: 5 },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero min-h-[90vh] flex items-center">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-saffron-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Heart className="w-4 h-4" /> India's Largest Food Donation Platform
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            >
              Khaana Waste Mat Karo,{" "}
              <span className="text-gradient-saffron">Kisi Ka Pet Bharo!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Ek plate khana kisi ki duniya badal sakta hai. AnnaSeva se apna extra khana un logon tak pahunchayein jinhe iske zaroorat hai. 🙏
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/donate">
                <Button size="lg" className="bg-gradient-saffron text-primary-foreground text-lg px-8 py-6 hover:opacity-90 hover:scale-105 transition-all">
                  🍱 Donate Food
                </Button>
              </Link>
              <Link to="/signin">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all">
                  🙋 Request Food
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow hover:-translate-y-1 duration-300">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-saffron-light flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-foreground">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Kaise Kaam Karta Hai? <span className="text-gradient-saffron">3 Simple Steps</span>
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">Sirf 3 steps mein aap kisi bhookhe insaan ki madad kar sakte hain</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="relative text-center group">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-saffron flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <step.icon className="w-9 h-9 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                  {i < 2 && (
                    <ArrowRight className="hidden md:block absolute top-10 -right-6 w-5 h-5 text-muted-foreground" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Logo Ki <span className="text-gradient-saffron">Kahaniyaan</span> ❤️
              </h2>
              <p className="text-muted-foreground">Hamare donors aur receivers kya kehte hain</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Card className="hover:shadow-xl transition-all hover:-translate-y-1 duration-300 border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-saffron flex items-center justify-center text-primary-foreground text-sm font-bold">
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.city}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-saffron text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Aaj Hi Shuru Karein! 🙏
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-lg mx-auto">
              Ek chhoti si madad badi khushi de sakti hai. Donate karein ya request karein — AnnaSeva aapke saath hai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  🍱 Donate Food Now
                </Button>
              </Link>
              <Link to="/signin">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Sign Up Free →
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
