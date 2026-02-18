import { Link } from "react-router-dom";
import { Heart, Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-saffron flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">AnnaSeva</span>
            </div>
            <p className="text-sm opacity-70">
              Khaana waste mat karo, kisi ka pet bharo! India ki sabse badi food donation community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm opacity-70">
              <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
              <Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link>
              <Link to="/donate" className="hover:opacity-100 transition-opacity">Donate Food</Link>
              <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <div className="flex flex-col gap-2 text-sm opacity-70">
              <Link to="/track" className="hover:opacity-100 transition-opacity">Track Donation</Link>
              <Link to="/history" className="hover:opacity-100 transition-opacity">Donation History</Link>
              <Link to="/profile" className="hover:opacity-100 transition-opacity">My Profile</Link>
              <Link to="/signin" className="hover:opacity-100 transition-opacity">Sign In</Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-3">Connect With Us</h4>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-sm opacity-70 mt-3">info@annaseva.in</p>
            <p className="text-sm opacity-70">+91 98765 43210</p>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-6 text-center text-sm opacity-50">
          © 2026 AnnaSeva. Made with ❤️ in India. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
