import { Footer } from "../../components/footer";
import { NavbarDefault } from "../../components/navbar";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const contacts = [
  {
    name: "Aziza Karimova",
    role: "Customer Support",
    email: "aziza@saipovgroup.uz",
    phone: "+998 90 123 45 67",
  },
  {
    name: "Javohir Saipov",
    role: "Sales Manager",
    email: "javohir@saipovgroup.uz",
    phone: "+998 91 765 43 21",
  },
  {
    name: "Madina Tursunova",
    role: "Marketing Lead",
    email: "madina@saipovgroup.uz",
    phone: "+998 33 456 78 90",
  },
  {
    name: "Bekzod Rakhimov",
    role: "Logistics Coordinator",
    email: "bekzod@saipovgroup.uz",
    phone: "+998 99 876 54 32",
  },
];

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", form);
  };

  return (
    <div>
      <NavbarDefault />
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          {t("contact_title") || "Get in Touch"}
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 bg-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-6"
          >
            <div>
              <label className="block mb-2 text-gray-700 font-medium text-sm sm:text-base">
                {t("name") || "Name"}
              </label>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:py-3 outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-medium text-sm sm:text-base">
                {t("email") || "Email"}
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:py-3 outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-medium text-sm sm:text-base">
                {t("phone") || "Phone Number"}
              </label>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:py-3 outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-medium text-sm sm:text-base">
                {t("message") || "Message"}
              </label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:py-3 outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
            >
              {t("send_message") || "Send Message"}
            </button>
          </motion.form>

          {/* Contact Persons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {contacts.map((person, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-5 sm:p-6 rounded-xl shadow text-sm sm:text-base"
              >
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {person.name}
                </h4>
                <p className="text-gray-600">{person.role}</p>
                <p className="text-gray-700 mt-2 break-all">
                  📧{" "}
                  <a href={`mailto:${person.email}`} className="text-blue-600">
                    {person.email}
                  </a>
                </p>
                <p className="text-gray-700 break-all">
                  📞{" "}
                  <a href={`tel:${person.phone}`} className="text-blue-600">
                    {person.phone}
                  </a>
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
