import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Heart,
  ChefHat,
  ShieldCheck,
  Clock,
  Leaf,
  Star,
  ArrowRight,
  Coffee,
  UtensilsCrossed,
  Soup,
  Cake,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Made with Love",
      desc: "Every dish prepared with care and passion",
    },
    {
      icon: ShieldCheck,
      title: "Hygiene First",
      desc: "Clean kitchen, strict food safety",
    },
    {
      icon: Leaf,
      title: "Fresh Ingredients",
      desc: "Locally sourced, no preservatives",
    },
    { icon: Clock, title: "Always Fresh", desc: "Cooked daily to order" },
  ];

  const specialties = [
    {
      icon: UtensilsCrossed,
      title: "Jollof Rice",
      desc: "The perfect balance of spice and smokiness",
    },
    {
      icon: Soup,
      title: "Egusi Soup",
      desc: "Rich, hearty, and full of flavor",
    },
    { icon: Cake, title: "Party Trays", desc: "Perfect for any celebration" },
  ];

  const testimonials = [
    {
      name: "Aisha O.",
      text: "Her food reminds me of my mother's cooking. Always delicious!",
      rating: 5,
    },
    {
      name: "Tunde A.",
      text: "Best catering for our office event. Everyone loved it!",
      rating: 5,
    },
    {
      name: "Funmi K.",
      text: "I order weekly – it's like having a personal chef!",
      rating: 5,
    },
  ];

  // Enhanced animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const scaleOnHover = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800 text-white flex items-center justify-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-black/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={fadeInUp}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Bringing the taste of home to your table, one meal at a time
          </motion.p>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Our Story */}
        <motion.div
          className="grid md:grid-cols-2 gap-16 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} whileHover={scaleOnHover}>
            <img
              src="https://images.unsplash.com/photo-1556911220-b0b27e1f7a2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Chef in kitchen"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col justify-center"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              variants={fadeInUp}
            >
              From My Kitchen to Yours
            </motion.h2>
            <motion.div className="space-y-6 text-gray-700 text-lg">
              <p>
                {" "}
                My love for cooking started in my mother's kitchen, where every
                meal was a celebration of family and flavor.{" "}
              </p>
              <p>
                {" "}
                Today, I bring that same warmth to every dish – using
                traditional recipes, fresh ingredients, and a lot of love.{" "}
              </p>
              <p>
                {" "}
                Whether it's a small family meal or a big celebration, I treat
                every order like it's for my own loved ones.{" "}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            variants={fadeInUp}
          >
            Our Core Values
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            What drives us every day
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 mb-24">
          {values.map((value, idx) => (
            <motion.div
              key={value.title}
              className="text-center p-8 rounded-2xl bg-gradient-to-b from-orange-50 to-white border border-orange-100 hover:border-orange-300 transition-all"
              variants={fadeInUp}
              whileHover={scaleOnHover}
              custom={idx}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-orange-100 flex items-center justify-center">
                <value.icon className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Specialties */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            variants={fadeInUp}
          >
            Our Specialties
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Dishes that make people come back for more
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {specialties.map((specialty, idx) => (
            <motion.div
              key={specialty.title}
              className="text-center p-8 rounded-2xl bg-white border border-gray-100 hover:border-orange-300 transition-all"
              variants={fadeInUp}
              whileHover={scaleOnHover}
              custom={idx}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-orange-100 flex items-center justify-center">
                <specialty.icon className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {specialty.title}
              </h3>
              <p className="text-gray-600">{specialty.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            variants={fadeInUp}
          >
            What Our Customers Say
          </motion.h2>
          <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
            Real words from real people who love our food
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative"
              variants={fadeInUp}
              whileHover={scaleOnHover}
              custom={idx}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
              <p className="font-bold text-gray-800">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Commitment */}
        <motion.div
          className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-12 text-center mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            variants={fadeInUp}
          >
            Our Commitment to You
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 max-w-3xl mx-auto mb-10"
            variants={fadeInUp}
          >
            We promise fresh, authentic, and delicious meals every time. Your
            satisfaction is our priority.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            variants={staggerContainer}
          >
            <Link
              to="/order"
              className="inline-flex items-center gap-2 bg-orange-600 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-orange-700 transition"
            >
              Order Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-orange-600 text-orange-600 font-semibold px-10 py-4 rounded-full hover:bg-orange-600 hover:text-white transition"
            >
              Contact Us <Coffee className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
