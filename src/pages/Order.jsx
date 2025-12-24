import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChefHat,
  ArrowRight,
  CheckCircle,
  Phone,
  MessageCircle,
  Calendar,
  MapPin,
  User,
  Package,
  Clock,
} from "lucide-react";
import { Helmet } from "react-helmet";

const Order = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    orderDetails: "",
    date: "",
    location: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app: send to backend / WhatsApp / email
    console.log("Order submitted:", formData);
    setSubmitted(true);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-24">
        <motion.div
          className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-10 text-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Order Received!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Thank you! We've received your order. We'll contact you shortly to
            confirm.
          </p>
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-medium transition"
            >
              Back to Home <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/2341234567890?text=Hello%20I%20just%20placed%20an%20order!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-full font-medium transition"
            >
              Chat on WhatsApp <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <Helmet>
        <title>rnb</title>
        <link rel="canonical" href="https://rrnb.vercel.app/order" />
        <meta
          name="description"
          content="Explore our full menu of authentic Nigerian dishes: jollof rice, egusi soup, efo riro, puff puff, plantain chips, and custom party trays. Freshly made daily."
        />
      </Helmet>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Place Your Order
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tell us what you’d like – we’ll prepare it fresh and deliver with
            care
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={formVariants}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <motion.div variants={itemVariants} custom={1}>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-orange-600" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  placeholder="Your name"
                />
              </motion.div>

              {/* Phone */}
              <motion.div variants={itemVariants} custom={2}>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-600" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  placeholder="08012345678"
                />
              </motion.div>

              {/* Order Details */}
              <motion.div variants={itemVariants} custom={3}>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Package className="w-4 h-4 text-orange-600" />
                  What would you like to order?
                </label>
                <textarea
                  name="orderDetails"
                  value={formData.orderDetails}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  placeholder="e.g., 2 plates of Jollof Rice with chicken, 1 Egusi soup..."
                />
              </motion.div>

              {/* Date */}
              <motion.div variants={itemVariants} custom={4}>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-orange-600" />
                  Delivery / Pickup Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                />
              </motion.div>

              {/* Location */}
              <motion.div variants={itemVariants} custom={5}>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-600" />
                  Delivery Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  placeholder="e.g., 123 Lekki Phase 1, Lagos"
                />
              </motion.div>

              {/* Notes */}
              <motion.div variants={itemVariants} custom={6}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  placeholder="e.g., No onions, extra spicy..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 rounded-xl shadow-lg transition transform hover:scale-[1.02] flex items-center justify-center gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Order <ArrowRight className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block"
          >
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 shadow-lg border border-orange-100 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                How to Order
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Fast Processing
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Orders placed before 2 PM are usually prepared the same
                      day
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Quick Confirmation
                    </h4>
                    <p className="text-gray-600 text-sm">
                      We'll confirm your order via WhatsApp or call within 30
                      minutes
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <ChefHat className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Freshly Prepared
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Every dish is made fresh – no reheating or preservatives
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4">
                  Prefer to order quickly?
                </h4>
                <a
                  href="https://wa.me/2349164880693?text=Hello!%20I'd%20like%20to%20place%20an%20order..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-medium transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Order;
