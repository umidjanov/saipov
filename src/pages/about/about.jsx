import { Footer } from "../../components/footer";
import { NavbarDefault } from "../../components/navbar";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function About() {
  const { t } = useTranslation();

  const testimonials = [
    {
      hotel: "Hyatt Regency",
      comment: "Ajoyib sochiqlar va xalatlar – yumshoq va hashamatli!",
      stars: 5,
    },
    {
      hotel: "Hilton Tashkent",
      comment: "Mehmonlarga sifat juda yoqdi!",
      stars: 5,
    },
    {
      hotel: "Wyndham Hotel",
      comment: "Zarif, mustahkam va mehmonxona darajasidagi qulaylik.",
      stars: 5,
    },
    {
      hotel: "International Hotel",
      comment: "Chinakam hashamat hissi. Tavsiya qilamiz!",
      stars: 5,
    },
    {
      hotel: "Lotte City Hotel",
      comment: "Yuqori darajadagi xizmat uchun eng yaxshi mahsulotlar.",
      stars: 5,
    },
    {
      hotel: "Radisson Blu",
      comment: "Qulaylik va uslubning mukammal uyg‘unligi.",
      stars: 5,
    },
    {
      hotel: "Marriott",
      comment: "Mehmonlar roziligi uchun eng yaxshi tanlov.",
      stars: 5,
    },
  ];

  return (
    <div>
      <NavbarDefault />
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto pt-[100px]">
        {/* About Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 sm:gap-14 lg:gap-20 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5">
              Saipov Group haqida
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Kompaniya 2012-yilda tashkil etilgan. Asoschisi — Saipov Muzaffar.
              Shu yillar davomida kompaniya quyidagi yirik firmalar bilan
              muvaffaqiyatli hamkorlik qilgan va hozir ham hamkorlikni davom
              ettirmoqda: Yoyo Store, Yaskanamu, Modern Fashion, Parisa Home.
              Tajriba, sifat va ishonchlilik tufayli Saipov Group kompaniyasi
              bozorda ishonchli hamkor sifatida o‘zini namoyon qilgan. Biz faqat
              mahsulot sifati bilan cheklanib qolmay, mijozlarimiz bilan uzoq
              muddatli va ishonchli aloqalarni yo‘lga qo‘yishga intilamiz.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <img
              src="media/image.png"
              alt="Towels and Robes"
              className="rounded-2xl shadow-lg w-full object-cover max-h-[400px] sm:max-h-[500px] lg:max-h-none"
            />
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12 px-2">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            Biz bilan ishlagan mehmonxonalar
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            5 yulduzli mehmonxonalarning fikrlari
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-5 sm:p-6 rounded-xl shadow-md text-sm sm:text-base"
            >
              <h4 className="text-lg font-semibold mb-2">{item.hotel}</h4>
              <p className="text-gray-700 italic">“{item.comment}”</p>
              <div className="mt-3 text-yellow-500 text-sm">
                {"★".repeat(item.stars)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
