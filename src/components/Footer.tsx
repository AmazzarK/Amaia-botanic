import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";
import botanicalLeaf from "@/assets/botanical-leaf.png";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, luxuryPresets } from "@/lib/animations";

export const Footer = () => {
  return (
    <motion.footer 
      className="bg-botanical-cream border-t border-border mt-20"
      {...luxuryPresets.section}
    >
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div className="space-y-4" variants={staggerItem}>
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src={botanicalLeaf} 
                alt="AMAÏA Botanic" 
                className="w-10 h-10"
                whileHover={{ rotate: 10 }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold">AMAÏA Botanic</span>
                <span className="text-xs text-botanical-gold italic">The Amaïa Rituals</span>
              </div>
            </motion.div>
            <motion.p 
              className="text-sm text-muted-foreground"
              variants={fadeInUp}
            >
              Pure botanical beauty from Paris. Embrace nature's wisdom in every drop.
            </motion.p>
            <motion.div 
              className="flex gap-4"
              variants={staggerContainer}
            >
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Mail, href: "#", label: "Email" }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a 
                    key={index}
                    href={social.href} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    variants={staggerItem}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Shop */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Learn</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/rituals" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Hair Rituals
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Ingredients
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Get in Touch
                </Link>
              </li>
              <li>
                <p className="text-sm text-muted-foreground">Based in Paris, France</p>
              </li>
              <li>
                <a href="mailto:hello@amaiabotanic.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  hello@amaiabotanic.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 AMAÏA Botanic. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};
