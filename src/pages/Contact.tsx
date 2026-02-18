import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent! ✅", description: "Hum jald hi aapko reply karenge. Dhanyavaad!" });
  };

  return (
    <Layout>
      <section className="py-16 bg-background min-h-screen">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Hum Se <span className="text-gradient-saffron">Sampark</span> Karein 📞
              </h1>
              <p className="text-muted-foreground">Koi sawaal ya suggestion hai? Hum yahan hain aapke liye!</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Form */}
            <ScrollReveal>
              <Card className="border-none shadow-xl">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input placeholder="Aapka Naam" required />
                    <Input placeholder="Email Address" type="email" required />
                    <Input placeholder="Phone Number (optional)" type="tel" />
                    <Textarea placeholder="Aapka Message likhein..." required rows={5} />
                    <Button type="submit" className="w-full bg-gradient-saffron text-primary-foreground hover:opacity-90 py-5">
                      Send Message 📩
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Info + Map */}
            <div className="space-y-6">
              <ScrollReveal delay={0.1}>
                <Card className="border-none shadow-lg">
                  <CardContent className="pt-6 space-y-4">
                    {[
                      { icon: MapPin, label: "Address", value: "123, MG Road, Connaught Place, New Delhi - 110001" },
                      { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                      { icon: Mail, label: "Email", value: "info@annaseva.in" },
                      { icon: Clock, label: "Working Hours", value: "Mon-Sat: 9 AM - 8 PM" },
                    ].map(({ icon: Icon, label, value }, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-saffron-light flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{label}</p>
                          <p className="text-sm font-medium">{value}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Mock Map */}
              <ScrollReveal delay={0.2}>
                <Card className="border-none shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="h-52 bg-muted flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Map Placeholder</p>
                        <p className="text-xs text-muted-foreground">Connaught Place, New Delhi</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
