import { useState } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Filter } from "lucide-react";

const allDonations = [
  { id: 1, food: "Roti & Sabzi", qty: "50 plates", date: "14 Feb 2026", receiver: "Delhi Food Bank", status: "Delivered", city: "Delhi" },
  { id: 2, food: "Rice & Dal", qty: "30 plates", date: "10 Feb 2026", receiver: "Mumbai Seva", status: "Delivered", city: "Mumbai" },
  { id: 3, food: "Fruits", qty: "20 boxes", date: "5 Feb 2026", receiver: "Jaipur NGO", status: "In Transit", city: "Jaipur" },
  { id: 4, food: "Biryani", qty: "60 plates", date: "1 Feb 2026", receiver: "Hyderabad Care", status: "Delivered", city: "Hyderabad" },
  { id: 5, food: "Packed Meals", qty: "100 packets", date: "28 Jan 2026", receiver: "Chennai Help", status: "Delivered", city: "Chennai" },
  { id: 6, food: "Sweets & Mithai", qty: "15 boxes", date: "26 Jan 2026", receiver: "Lucknow Seva", status: "Picked Up", city: "Lucknow" },
];

const statusColors: Record<string, string> = {
  Delivered: "bg-secondary text-secondary-foreground",
  "In Transit": "bg-primary text-primary-foreground",
  "Picked Up": "bg-muted text-foreground",
};

const History = () => {
  const [filterStatus, setFilterStatus] = useState("all");

  const filtered = filterStatus === "all" ? allDonations : allDonations.filter((d) => d.status === filterStatus);

  return (
    <Layout>
      <section className="py-10 bg-background min-h-screen">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-1">Donation History 📜</h1>
                <p className="text-muted-foreground text-sm">Aapki sabhi past donations yahan hain</p>
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="Delivered">Delivered</SelectItem>
                    <SelectItem value="In Transit">In Transit</SelectItem>
                    <SelectItem value="Picked Up">Picked Up</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {filtered.map((d, i) => (
              <ScrollReveal key={d.id} delay={i * 0.05}>
                <Card className="border-none shadow-md hover:shadow-lg transition-all">
                  <CardContent className="py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🍱</span>
                        <div>
                          <p className="font-semibold">{d.food}</p>
                          <p className="text-xs text-muted-foreground">
                            {d.qty} • {d.city} • {d.receiver}
                          </p>
                          <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                            <Calendar className="w-3 h-3" /> {d.date}
                          </p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[d.status]}`}>
                        {d.status}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-4xl mb-3">🤷</p>
              <p>Is status ki koi donation nahi mili</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default History;
