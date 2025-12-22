import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ChefHat,
  Truck,
  Heart,
  UtensilsCrossed,
  Cake,
  Clock,
  Phone,
  ArrowRight,
  Star,
  Users,
  Quote,
  MapPin,
  Calendar,
  ShieldCheck,
} from "lucide-react";

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.7 },
    }),
  };

  // Sample testimonials (replace with real ones)
  const testimonials = [
    {
      name: "Aisha O.",
      text: "The jollof rice was absolutely perfect for my wedding! Everyone loved it.",
      rating: 5,
    },
    {
      name: "Tunde A.",
      text: "Fast delivery and the food tasted like it was just cooked. Highly recommended!",
      rating: 5,
    },
    {
      name: "Funmi K.",
      text: "Best egusi soup I've had outside my mom's kitchen. Thank you!",
      rating: 5,
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative h-fit py-[35%] sm:py-[15%] flex items-center justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
            y: yBackground,
            scale: 1.15,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-2xl"
            variants={item}
          >
            Authentic Homemade{" "}
            <span className="text-orange-400">Nigerian Cuisine</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
            variants={item}
          >
            From jollof rice to rich soups and party trays – cooked with love,
            delivered with care
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            variants={item}
          >
            <Link
              to="/order"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-lg px-10 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Order Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-semibold text-lg px-10 py-4 rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300 shadow-xl"
            >
              Explore Menu <UtensilsCrossed className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* What We Offer */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 -mt-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ChefHat className="w-12 h-12 text-orange-600" />
            Our Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: Cake,
                title: "Event Catering",
                desc: "Weddings, birthdays, corporate events & parties",
                img: "https://images.unsplash.com/photo-1555244164-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
              {
                icon: Truck,
                title: "Home Delivery",
                desc: "Fresh meals delivered hot to your door in Lagos",
                img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
              {
                icon: Heart,
                title: "Custom & Special Orders",
                desc: "Tailored menus for dietary needs & special requests",
                img: "https://images.unsplash.com/photo-1540189545-6a6b2a7c0a6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                whileHover={{ y: -12, scale: 1.04 }}
              >
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6">
                    <feature.icon className="w-12 h-12 text-white drop-shadow-lg" />
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Customers Love Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: Heart,
                title: "Made with Love",
                desc: "Every dish prepared with care & passion",
              },
              {
                icon: ShieldCheck,
                title: "Hygiene First",
                desc: "Clean kitchen, fresh ingredients",
              },
              {
                icon: Clock,
                title: "Always Fresh",
                desc: "Cooked daily – no reheating",
              },
              {
                icon: Truck,
                title: "Fast Delivery",
                desc: "Reliable & timely in Lagos",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="text-center p-8 rounded-2xl bg-gradient-to-b from-orange-50 to-white border border-orange-100 hover:border-orange-300 transition-all shadow-md"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-orange-100 flex items-center justify-center">
                  <item.icon className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Quote className="w-12 h-12 text-orange-600" />
            What Our Customers Say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <Quote className="absolute -top-4 -left-2 w-12 h-12 text-orange-200" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-orange-500 text-orange-500"
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">
                  "{testimonial.text}"
                </p>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Experience the Magic?
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Order your favorite Nigerian dishes today – fresh, homemade, and
            delivered with love
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link
              to="/order"
              className="inline-flex items-center gap-2 bg-white text-orange-700 font-bold text-lg px-12 py-5 rounded-full shadow-2xl hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Order Now <ArrowRight className="w-6 h-6" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-bold text-lg px-12 py-5 rounded-full hover:bg-white hover:text-orange-700 transition-all"
            >
              Contact Us <Phone className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer Teaser / Location Info */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <MapPin className="w-10 h-10 text-orange-500" />
            <div>
              <h3 className="text-2xl font-bold">
                Serving Lagos & Surrounding Areas
              </h3>
              <p className="text-gray-300">
                Fast delivery within Lagos | Event catering across Nigeria
              </p>
            </div>
          </motion.div>
          <p className="text-gray-400">
            © 2025 Delicious Home Cooking – Made with Love
          </p>
        </div>
      </section>

      {/* Floating CTA */}
      <motion.div
        className="w-[90%] md:w-fit fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-lg px-3 justify-between sm:px-8 py-2 sm:py-4 rounded-full shadow-2xl z-50 flex items-center gap-0 sm:gap-6 border border-gray-200"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-[10px] whitespace-nowrap md:text-lg font-medium text-gray-800">
          Hungry? Let's cook something special!
        </span>
        <Link
          to="/order"
          className="inline-flex items-center whitespace-nowrap gap-2 bg-orange-600 text-white px-5 sm:px-8 py-2 rounded-full font-semibold hover:bg-orange-700 transition text-[10px] md:text-[16px]"
        >
          Order Now <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
