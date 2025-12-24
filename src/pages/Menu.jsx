import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { UtensilsCrossed, Soup, Flame, Cake, ArrowRight } from "lucide-react";

const Menu = () => {
  const menuCategories = [
    {
      title: "Main Dishes",
      icon: UtensilsCrossed,
      items: [
        {
          name: "Jollof Rice",
          desc: "Spicy tomato rice served with chicken, beef or fish",
          price: "₦4,500 – ₦7,500",
          image: "/images/img5.webp",
          badge: { text: "Best Seller", color: "bg-orange-500" },
        },
        {
          name: "Fried Rice",
          desc: "Vegetable-loaded with chicken or beef",
          price: "₦4,000 – ₦6,500",
          image: "/images/img6.webp",
          badge: { text: "Popular", color: "bg-green-500" },
        },
        {
          name: "White Rice & Stew",
          desc: "Steamed rice with rich tomato stew & proteins",
          price: "₦3,500 – ₦6,000",
          image: "/images/img7.webp",
        },
      ],
    },
    {
      title: "Soups",
      icon: Soup,
      items: [
        {
          name: "Egusi Soup",
          desc: "Rich melon seed soup with assorted meats & fish",
          price: "₦5,000 – ₦8,500",
          image: "/images/img7.webp",
          badge: { text: "Signature", color: "bg-purple-500" },
        },
        {
          name: "Efo Riro",
          desc: "Hearty spinach stew with meat & fish",
          price: "₦4,500 – ₦7,000",
          image: "/images/img2.webp",
          badge: { text: "Veggie Option", color: "bg-teal-500" },
        },
        {
          name: "Banga Soup",
          desc: "Spicy palm nut soup with catfish & meats",
          price: "₦5,500 – ₦9,000",
          image: "/images/img8.webp",
        },
      ],
    },
    {
      title: "Snacks & Sides",
      icon: Flame,
      items: [
        {
          name: "Puff Puff (Dozen)",
          desc: "Sweet, fluffy deep-fried dough balls",
          price: "₦2,000",
          image: "/images/img3.webp",
        },
        {
          name: "Plantain Chips",
          desc: "Crispy seasoned fried plantain slices",
          price: "₦1,500",
          image: "/images/img4.webp",
        },
        {
          name: "Moi Moi",
          desc: "Steamed bean pudding with egg & fish",
          price: "₦1,200 – ₦2,000",
          image: "/images/img9.webp",
        },
      ],
    },
    {
      title: "Party Trays",
      icon: Cake,
      items: [
        {
          name: "Small Tray (20–30 pax)",
          desc: "Jollof rice + protein + sides",
          price: "₦65,000 – ₦95,000",
          image: "/images/img4.webp",
          badge: { text: "Event Favorite", color: "bg-amber-500" },
        },
        {
          name: "Large Tray (50+ pax)",
          desc: "Full menu with variety of proteins",
          price: "₦130,000+",
          image: "/images/img5.webp",
        },
        {
          name: "Custom Tray",
          desc: "Tailored to your event needs",
          price: "Price on request",
          image: "/images/img8.webp",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-fit bg-[url(/images/img1.webp)] bg-[rgba(0,0,0,.5)] bg-blend-darken bg-cover bg-center text-white flex items-center justify-center overflow-hidden py-50">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Our Menu</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Authentic Nigerian dishes made fresh daily
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {menuCategories.map((category) => (
          <section key={category.title} className="mb-20">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
                <category.icon className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {category.title}
              </h2>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((dish) => (
                <div
                  key={dish.name}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-orange-200 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {dish.badge && (
                      <span
                        className={`absolute top-4 right-4 px-3 py-1 text-xs font-medium text-white rounded-full shadow ${dish.badge.color}`}
                      >
                        {dish.badge.text}
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                      {dish.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {dish.desc}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-orange-600">
                        {dish.price}
                      </span>
                      <Link
                        to="/order"
                        className="flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors"
                      >
                        Order <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Link */}
            <div className="text-center mt-8">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
              >
                View full menu <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        ))}

        {/* Final CTA */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Order?
          </h2>
          <Link
            to="/order"
            className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-lg px-12 py-5 rounded-full shadow-lg transition-all"
          >
            Order Now <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-4 text-sm text-gray-600">
            Prices may vary based on portion size and market rates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
