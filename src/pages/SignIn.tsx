import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [role, setRole] = useState<"donor" | "receiver">("donor");
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: isSignUp ? "Account Created! 🎉" : "Welcome Back! 🙏",
      description: isSignUp ? "Aapka account ban gaya. Ab aap donate ya request kar sakte hain!" : "Aap successfully sign in ho gaye!",
    });
  };

  return (
    <Layout>
      <section className="min-h-[85vh] flex items-center justify-center py-12 bg-gradient-hero">
        <div className="container mx-auto px-4 max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-6">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-saffron flex items-center justify-center">
                <Heart className="w-7 h-7 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold">AnnaSeva mein Swagat Hai! 🙏</h1>
              <p className="text-muted-foreground text-sm mt-1">
                {isSignUp ? "Naya account banayen" : "Apne account mein sign in karein"}
              </p>
            </div>

            {/* Toggle */}
            <div className="flex bg-muted rounded-lg p-1 mb-6">
              <button
                onClick={() => setIsSignUp(false)}
                className={`flex-1 py-2 rounded-md text-sm font-medium transition-all ${!isSignUp ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"}`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsSignUp(true)}
                className={`flex-1 py-2 rounded-md text-sm font-medium transition-all ${isSignUp ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"}`}
              >
                Sign Up
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={isSignUp ? "signup" : "signin"}
                initial={{ opacity: 0, x: isSignUp ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isSignUp ? -20 : 20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-none shadow-xl">
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {isSignUp && (
                        <>
                          {/* Role Selection */}
                          <div>
                            <label className="text-sm font-medium mb-2 block">Aap Kaun Hain?</label>
                            <div className="grid grid-cols-2 gap-3">
                              <button
                                type="button"
                                onClick={() => setRole("donor")}
                                className={`p-3 rounded-lg border-2 text-center transition-all ${role === "donor" ? "border-primary bg-saffron-light" : "border-border hover:border-primary/50"}`}
                              >
                                <span className="text-2xl">🤲</span>
                                <p className="text-sm font-medium mt-1">Donor</p>
                                <p className="text-xs text-muted-foreground">Khana dena chahte hain</p>
                              </button>
                              <button
                                type="button"
                                onClick={() => setRole("receiver")}
                                className={`p-3 rounded-lg border-2 text-center transition-all ${role === "receiver" ? "border-secondary bg-green-light" : "border-border hover:border-secondary/50"}`}
                              >
                                <span className="text-2xl">🙏</span>
                                <p className="text-sm font-medium mt-1">Receiver</p>
                                <p className="text-xs text-muted-foreground">Khana chahiye</p>
                              </button>
                            </div>
                          </div>

                          <Input placeholder="Aapka Naam" required />
                          <Input placeholder="Phone Number" type="tel" required />
                          <Input placeholder="City" required />
                        </>
                      )}

                      <Input placeholder="Email" type="email" required />

                      <div className="relative">
                        <Input
                          placeholder="Password"
                          type={showPassword ? "text" : "password"}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>

                      <Button type="submit" className="w-full bg-gradient-saffron text-primary-foreground hover:opacity-90 py-5">
                        {isSignUp ? "Account Banayen 🚀" : "Sign In →"}
                      </Button>
                    </form>

                    <p className="text-center text-sm text-muted-foreground mt-4">
                      {isSignUp ? "Pehle se account hai?" : "Naya user?"}{" "}
                      <button onClick={() => setIsSignUp(!isSignUp)} className="text-primary font-medium hover:underline">
                        {isSignUp ? "Sign In" : "Sign Up"}
                      </button>
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SignIn;
