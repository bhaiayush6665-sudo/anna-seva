import { useState } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Utensils, Users, TrendingUp, Clock, Package, MapPin } from "lucide-react";

const donorStats = [
  { label: "Total Donations", value: 47, icon: Package },
  { label: "Meals Served", value: 1250, icon: Utensils },
  { label: "Families Helped", value: 320, icon: Users },
  { label: "Impact Score", value: 95, suffix: "%", icon: TrendingUp },
];

const recentDonations = [
  { food: "Roti & Sabzi", qty: "50 plates", date: "14 Feb 2026", status: "Delivered", city: "Delhi" },
  { food: "Rice & Dal", qty: "30 plates", date: "10 Feb 2026", status: "In Transit", city: "Mumbai" },
  { food: "Fruits & Sweets", qty: "20 boxes", date: "5 Feb 2026", status: "Picked Up", city: "Jaipur" },
];

const availableDonations = [
  { food: "Roti & Paneer", qty: "40 plates", donor: "Sharma Ji's Kitchen", distance: "2.5 km", time: "30 min" },
  { food: "Biryani", qty: "25 plates", donor: "Royal Restaurant", distance: "4 km", time: "45 min" },
  { food: "Packed Meals", qty: "100 packets", donor: "NGO FoodBank", distance: "1 km", time: "15 min" },
];

const statusColors: Record<string, string> = {
  Delivered: "bg-secondary text-secondary-foreground",
  "In Transit": "bg-primary text-primary-foreground",
  "Picked Up": "bg-muted text-muted-foreground",
};

const Dashboard = () => {
  const [view, setView] = useState<"donor" | "receiver">("donor");

  return (
    <Layout>
      <section className="py-10 bg-background min-h-screen">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-bold">Namaste, Rahul! 🙏</h1>
                <p className="text-muted-foreground">Aaj bhi kisi ki madad karein</p>
              </div>
              <div className="flex bg-muted rounded-lg p-1">
                <button
                  onClick={() => setView("donor")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${view === "donor" ? "bg-card shadow text-foreground" : "text-muted-foreground"}`}
                >
                  🤲 Donor
                </button>
                <button
                  onClick={() => setView("receiver")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${view === "receiver" ? "bg-card shadow text-foreground" : "text-muted-foreground"}`}
                >
                  🙏 Receiver
                </button>
              </div>
            </div>
          </ScrollReveal>

          {view === "donor" ? (
            <>
              {/* Donor Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {donorStats.map((stat, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="pt-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-saffron-light flex items-center justify-center">
                            <stat.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-2xl font-bold">
                              <AnimatedCounter end={stat.value} suffix={stat.suffix || ""} />
                            </p>
                            <p className="text-xs text-muted-foreground">{stat.label}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>

              {/* Quick Donate */}
              <ScrollReveal>
                <Card className="mb-8 bg-gradient-saffron text-primary-foreground border-none">
                  <CardContent className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold">Abhi Donate Karein! 🍱</h3>
                      <p className="opacity-90 text-sm">Aapke paas extra khana hai? Bas ek click mein donate karein</p>
                    </div>
                    <Link to="/donate">
                      <Button variant="secondary" size="lg">Donate Now →</Button>
                    </Link>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Recent Donations */}
              <ScrollReveal>
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Donations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentDonations.map((d, i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">🍱</span>
                            <div>
                              <p className="font-medium text-sm">{d.food}</p>
                              <p className="text-xs text-muted-foreground">{d.qty} • {d.city} • {d.date}</p>
                            </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[d.status]}`}>
                            {d.status}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Link to="/history" className="block mt-4">
                      <Button variant="ghost" className="w-full text-primary">View All History →</Button>
                    </Link>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </>
          ) : (
            <>
              {/* Receiver: Available Donations */}
              <ScrollReveal>
                <div className="mb-6">
                  <h2 className="text-xl font-bold mb-1">Available Donations Nearby 📍</h2>
                  <p className="text-muted-foreground text-sm">Aapke aas paas available khana</p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {availableDonations.map((d, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <Card className="border-none shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                      <CardContent className="pt-5">
                        <div className="flex justify-between items-start mb-3">
                          <span className="text-3xl">🍱</span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="w-3 h-3" /> {d.distance}
                          </span>
                        </div>
                        <h3 className="font-bold">{d.food}</h3>
                        <p className="text-sm text-muted-foreground">{d.qty} • {d.donor}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                          <Clock className="w-3 h-3" /> Pickup in {d.time}
                        </div>
                        <Button className="w-full mt-4 bg-gradient-green text-secondary-foreground hover:opacity-90" size="sm">
                          Request Food 🙏
                        </Button>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>

              {/* Receiver Request Status */}
              <ScrollReveal>
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Aapki Requests</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 rounded-lg bg-green-light text-center">
                      <p className="text-sm text-muted-foreground">Aapki last request:</p>
                      <p className="font-bold text-secondary mt-1">Rice & Dal - 30 plates</p>
                      <p className="text-xs text-muted-foreground mt-1">Status: <span className="text-secondary font-medium">Approved ✅</span></p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
