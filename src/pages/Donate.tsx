import { useState } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Clock, MapPin, CheckCircle2 } from "lucide-react";

const foodCategories = [
  { id: "roti", label: "Roti/Chapati", emoji: "🫓" },
  { id: "sabzi", label: "Sabzi/Curry", emoji: "🍛" },
  { id: "rice", label: "Rice/Biryani", emoji: "🍚" },
  { id: "fruits", label: "Fruits", emoji: "🍎" },
  { id: "packed", label: "Packed Food", emoji: "📦" },
  { id: "sweets", label: "Mithai/Sweets", emoji: "🍬" },
];

const timeSlots = ["Morning (8-11 AM)", "Afternoon (12-3 PM)", "Evening (4-7 PM)", "Night (8-10 PM)"];

const Donate = () => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const toggleCategory = (id: string) => {
    setSelectedCategory((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Donation Listed! 🎉", description: "Aapka khana jald hi pick up hoga. Dhanyavaad!" });
  };

  return (
    <Layout>
      <section className="py-10 bg-background min-h-screen">
        <div className="container mx-auto px-4 max-w-2xl">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-light flex items-center justify-center">
                  <CheckCircle2 className="w-12 h-12 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold mb-3">Dhanyavaad! 🙏</h2>
                <p className="text-muted-foreground mb-6">Aapka donation successfully list ho gaya hai. Hamari team jald hi aapse contact karegi.</p>
                <div className="flex gap-3 justify-center">
                  <Button onClick={() => setSubmitted(false)} className="bg-gradient-saffron text-primary-foreground">Aur Donate Karein</Button>
                  <Button variant="outline" onClick={() => window.location.href = "/track"}>Track Karein →</Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <ScrollReveal>
                  <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-2">Khana Donate Karein 🍱</h1>
                    <p className="text-muted-foreground">Apna extra khana un logon tak pahunchayein jinhe zaroorat hai</p>
                  </div>
                </ScrollReveal>

                <Card className="border-none shadow-xl">
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Food Category */}
                      <div>
                        <label className="text-sm font-medium mb-3 block">Khana Ka Type (select karein)</label>
                        <div className="grid grid-cols-3 gap-3">
                          {foodCategories.map((cat) => (
                            <button
                              key={cat.id}
                              type="button"
                              onClick={() => toggleCategory(cat.id)}
                              className={`p-3 rounded-xl border-2 text-center transition-all hover:scale-105 ${
                                selectedCategory.includes(cat.id)
                                  ? "border-primary bg-saffron-light shadow-md"
                                  : "border-border hover:border-primary/40"
                              }`}
                            >
                              <span className="text-2xl block">{cat.emoji}</span>
                              <span className="text-xs font-medium mt-1 block">{cat.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Quantity */}
                      <div>
                        <label className="text-sm font-medium mb-2 block">Kitna Khana? (Quantity)</label>
                        <Input placeholder="e.g., 50 plates, 10 kg, 20 packets" required />
                      </div>

                      {/* Pickup Address */}
                      <div>
                        <label className="text-sm font-medium mb-2 block flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-primary" /> Pickup Address
                        </label>
                        <Textarea placeholder="Pura address likhein jahan se khana pick hoga..." required rows={3} />
                      </div>

                      {/* City */}
                      <div>
                        <label className="text-sm font-medium mb-2 block">City</label>
                        <Input placeholder="e.g., Delhi, Mumbai, Jaipur" required />
                      </div>

                      {/* Time Slot */}
                      <div>
                        <label className="text-sm font-medium mb-3 block flex items-center gap-1">
                          <Clock className="w-4 h-4 text-primary" /> Pickup Time Slot
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setSelectedTime(slot)}
                              className={`p-2 rounded-lg border text-sm transition-all ${
                                selectedTime === slot
                                  ? "border-primary bg-saffron-light font-medium"
                                  : "border-border hover:border-primary/40"
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Photo Upload Placeholder */}
                      <div>
                        <label className="text-sm font-medium mb-2 block">Photo (optional)</label>
                        <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/40 transition-colors cursor-pointer">
                          <Camera className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                          <p className="text-sm text-muted-foreground">Khane ki photo upload karein</p>
                          <p className="text-xs text-muted-foreground mt-1">JPG, PNG (max 5MB)</p>
                        </div>
                      </div>

                      {/* Additional Info */}
                      <div>
                        <label className="text-sm font-medium mb-2 block">Kuch Aur Batana Hai? (Optional)</label>
                        <Textarea placeholder="Jaise: Veg/Non-Veg, special instructions..." rows={2} />
                      </div>

                      <Button type="submit" className="w-full bg-gradient-saffron text-primary-foreground py-6 text-lg hover:opacity-90">
                        Donate Karein 🙏
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
