// src/components/Footer.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Instagram,
  Twitter,
  ChefHat,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/delicioushomecooking",
    },
    {
      icon: Twitter,
      name: "X",
      url: "https://facebook.com/delicioushomecooking",
    },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Order", path: "/order" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const contactInfo = [
    { icon: Phone, text: "+234 802 883 8446", link: "tel:+2348028838446" },
    {
      icon: MessageCircle,
      text: "WhatsApp",
      link: "https://wa.me/23408028838446",
    },
    {
      icon: Mail,
      text: "rumlahashim@gmail.com",
      link: "mailto:rumlahashim@gmail.com",
    },
    { icon: MapPin, text: "Serving Lagos & Surrounding Areas" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="flex items-center gap-3 mb-6">
              <ChefHat className="w-10 h-10 text-orange-500" />
              <h3 className="text-2xl font-bold">RNB</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Authentic homemade Nigerian meals made with love, fresh
              ingredients, and care. From everyday comfort food to special event
              catering.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-all"
                  whileHover={{ scale: 1.15 }}
                  variants={fadeInUp}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li key={link.name} variants={fadeInUp}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, idx) => (
                <motion.li
                  key={item.text}
                  className="flex items-center gap-3 text-gray-400"
                  variants={fadeInUp}
                  custom={idx}
                >
                  <item.icon className="w-5 h-5 text-orange-500" />
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-orange-500 transition"
                    >
                      {item.text}
                    </a>
                  ) : (
                    item.text
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter / CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <h4 className="text-xl font-semibold mb-6">Stay Updated</h4>
            <p className="text-gray-400 mb-6">
              Subscribe for weekly specials and new menu items
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-orange-500 flex-grow"
              />
              <motion.button
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p>© {new Date().getFullYear()} RNB. All rights reserved.</p>
          <p className="mt-2">Made with love in Lagos, Nigeria</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
