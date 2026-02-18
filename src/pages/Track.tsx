import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle2, Truck, Package, MapPin, Clock } from "lucide-react";

const trackingSteps = [
  { label: "Donated", desc: "Aapne khana list kiya", icon: Package, done: true },
  { label: "Picked Up", desc: "Volunteer ne khana pick kiya", icon: CheckCircle2, done: true },
  { label: "In Transit", desc: "Khana receiver ki taraf ja raha hai", icon: Truck, done: true },
  { label: "Delivered", desc: "Khana successfully pahunch gaya!", icon: CheckCircle2, done: false },
];

const Track = () => {
  const currentStep = 2; // 0-indexed, "In Transit" active

  return (
    <Layout>
      <section className="py-10 bg-background min-h-screen">
        <div className="container mx-auto px-4 max-w-2xl">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Donation Track Karein 📍</h1>
              <p className="text-muted-foreground">Aapke donated khane ka live status dekhein</p>
            </div>
          </ScrollReveal>

          {/* Donation Info Card */}
          <ScrollReveal>
            <Card className="border-none shadow-lg mb-8">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">🍛</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">Roti & Sabzi - 50 Plates</h3>
                    <div className="grid grid-cols-2 gap-2 mt-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Delhi → South Delhi</div>
                      <div className="flex items-center gap-1"><Clock className="w-3 h-3" /> 14 Feb, 2:30 PM</div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Donation ID: #ANN-2026-4521</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Progress Stepper */}
          <ScrollReveal>
            <Card className="border-none shadow-lg mb-8">
              <CardContent className="pt-6">
                <div className="space-y-0">
                  {trackingSteps.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      {/* Line + Dot */}
                      <div className="flex flex-col items-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.3, duration: 0.3 }}
                          className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                            i <= currentStep
                              ? "bg-gradient-saffron text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          <step.icon className="w-5 h-5" />
                        </motion.div>
                        {i < trackingSteps.length - 1 && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 48 }}
                            transition={{ delay: i * 0.3 + 0.2, duration: 0.4 }}
                            className={`w-0.5 ${i < currentStep ? "bg-primary" : "bg-muted"}`}
                          />
                        )}
                      </div>

                      {/* Content */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.3 }}
                        className={`pb-8 ${i > currentStep ? "opacity-40" : ""}`}
                      >
                        <h4 className="font-semibold">{step.label}</h4>
                        <p className="text-sm text-muted-foreground">{step.desc}</p>
                        {i === currentStep && (
                          <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-xs bg-saffron-light text-primary font-medium animate-pulse">
                            Active
                          </span>
                        )}
                      </motion.div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Mock Map */}
          <ScrollReveal>
            <Card className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="h-64 bg-muted flex items-center justify-center relative">
                  <div className="text-center">
                    <MapPin className="w-10 h-10 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Map View</p>
                    <p className="text-xs text-muted-foreground">Pickup → Delivery location</p>
                  </div>
                  {/* Mock route line */}
                  <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-primary/30">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-primary"
                      initial={{ width: "0%" }}
                      animate={{ width: "70%" }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-secondary" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Track;
