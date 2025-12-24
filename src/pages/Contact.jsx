import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  ArrowRight,
  Twitter,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      detail: "+234 802 883 8446",
      action: "tel:+2348028838446",
      color: "text-blue-600",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      detail: "Chat with us instantly",
      action:
        "https://wa.me/2348028838446?text=Hello%21%20I'd%20like%20to%20place%20an%20order%20or%20ask%20a%20question.",
      color: "text-green-600",
    },
    {
      icon: Mail,
      title: "Email",
      detail: "rumlahashim@gmail.com",
      action: "mailto:rumlahashim@gmail.com",
      color: "text-red-600",
    },
    {
      icon: MapPin,
      title: "Service Area",
      detail: "Lagos & Surrounding Areas",
      action: null,
      color: "text-orange-600",
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/delicioushomecooking",
    },
    {
      icon: Twitter,
      name: "Facebook",
      url: "https://facebook.com/delicioushomecooking",
    },
  ];

  const hours = [
    { day: "Monday - Friday", time: "8:00 AM - 8:00 PM" },
    { day: "Saturday", time: "9:00 AM - 6:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative h-fit bg-[url(/images/img1.webp)] bg-[rgba(0,0,0,.5)] bg-blend-darken bg-cover bg-center text-white flex items-center justify-center overflow-hidden py-50"
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={fadeInUp}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            We're here to help with your orders, questions, or catering needs
          </motion.p>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Methods */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Reach Out
            </h2>

            <div className="space-y-6">
              {contactMethods.map((method, idx) => (
                <motion.div
                  key={method.title}
                  variants={fadeInUp}
                  className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100"
                  whileHover={{ y: -4 }}
                >
                  <div
                    className={`w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center ${method.color}`}
                  >
                    <method.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {method.title}
                    </h3>
                    <p className="text-gray-600">
                      {method.action ? (
                        <a
                          href={method.action}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-orange-600 transition"
                        >
                          {method.detail}
                        </a>
                      ) : (
                        method.detail
                      )}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Follow Us
              </h3>
              <div className="flex gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-orange-100 hover:text-orange-600 transition-all transform hover:scale-110"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hours & Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Opening Hours
              </h2>

              <div className="space-y-6">
                {hours.map((hour) => (
                  <motion.div
                    key={hour.day}
                    className="flex justify-between items-center py-3 border-b border-gray-100 last:border-none"
                    variants={fadeInUp}
                  >
                    <div className="flex items-center gap-4">
                      <Clock className="w-6 h-6 text-orange-600" />
                      <span className="font-medium text-gray-900">
                        {hour.day}
                      </span>
                    </div>
                    <span className="text-gray-600">{hour.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Map / Location */}
            <motion.div
              className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-orange-600" />
                  Our Location
                </h3>
                <p className="text-gray-600 mb-6">
                  We serve Lagos and surrounding areas. Delivery available
                  within Lagos.
                </p>
                <a
                  href="https://maps.google.com/?q=Lagos,Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
                >
                  View on Google Maps <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Order or Have a Question?
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/order"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-10 py-4 rounded-full shadow-lg transition"
            >
              Place Order <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/23408028838446?text=Hello!%20I%20have%20a%20question..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-4 rounded-full shadow-lg transition"
            >
              Chat on WhatsApp <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
