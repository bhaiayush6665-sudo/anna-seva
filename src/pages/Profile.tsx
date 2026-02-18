import { useState } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Phone, MapPin, Award, Edit2, Save } from "lucide-react";

const badges = [
  { label: "First Donation 🌱", earned: true },
  { label: "50 Meals Donated 🥈", earned: true },
  { label: "100 Meals Donated 🏅", earned: true },
  { label: "500 Meals Donated 🏆", earned: false },
  { label: "City Champion 🌟", earned: false },
];

const Profile = () => {
  const [editing, setEditing] = useState(false);
  const { toast } = useToast();
  const [profile, setProfile] = useState({
    name: "Rahul Sharma",
    email: "rahul@example.com",
    phone: "+91 98765 43210",
    city: "New Delhi",
  });

  const handleSave = () => {
    setEditing(false);
    toast({ title: "Profile Updated! ✅", description: "Aapki information save ho gayi." });
  };

  return (
    <Layout>
      <section className="py-10 bg-background min-h-screen">
        <div className="container mx-auto px-4 max-w-2xl">
          <ScrollReveal>
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-saffron flex items-center justify-center text-3xl text-primary-foreground font-bold">
                RS
              </div>
              <h1 className="text-2xl font-bold">{profile.name}</h1>
              <p className="text-muted-foreground text-sm">Donor • Member since Jan 2025</p>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: "Donations", value: 47 },
              { label: "Meals Served", value: 1250 },
              { label: "Impact Score", value: 95, suffix: "%" },
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Card className="text-center border-none shadow-md">
                  <CardContent className="pt-4 pb-3">
                    <p className="text-2xl font-bold text-primary">
                      <AnimatedCounter end={s.value} suffix={s.suffix || ""} />
                    </p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Profile Info */}
          <ScrollReveal>
            <Card className="border-none shadow-lg mb-8">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">Profile Information</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => (editing ? handleSave() : setEditing(true))}
                >
                  {editing ? <><Save className="w-4 h-4 mr-1" /> Save</> : <><Edit2 className="w-4 h-4 mr-1" /> Edit</>}
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { icon: User, key: "name" as const, label: "Name" },
                  { icon: Mail, key: "email" as const, label: "Email" },
                  { icon: Phone, key: "phone" as const, label: "Phone" },
                  { icon: MapPin, key: "city" as const, label: "City" },
                ].map(({ icon: Icon, key, label }) => (
                  <div key={key} className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-muted-foreground shrink-0" />
                    {editing ? (
                      <Input
                        value={profile[key]}
                        onChange={(e) => setProfile((p) => ({ ...p, [key]: e.target.value }))}
                      />
                    ) : (
                      <div>
                        <p className="text-xs text-muted-foreground">{label}</p>
                        <p className="font-medium text-sm">{profile[key]}</p>
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Badges */}
          <ScrollReveal>
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" /> Achievements & Badges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {badges.map((b, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-lg border text-center text-sm font-medium transition-all ${
                        b.earned
                          ? "bg-saffron-light border-primary/30 text-foreground"
                          : "bg-muted/50 border-border text-muted-foreground opacity-50"
                      }`}
                    >
                      {b.label}
                      {!b.earned && <p className="text-xs mt-0.5">🔒 Locked</p>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
