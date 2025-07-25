import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Heart } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { Footer } from "../../components/footer";
import { NavbarDefault } from "../../components/navbar";
import { Link } from "react-router-dom";
import { robeProducts, towelProducts } from "./../../data/product";
import useStore from "../../store/useStore";

const reviews = [
	{
		name: "Анна К.",
		text: "Очень довольна качеством продукции SAIPOV GROUP. Материалы натуральные и приятные. Обязательно закажу снова!",
	},
	{
		name: "Дмитрий Л.",
		text: "Отличный сервис и быстрая доставка. Уже несколько раз заказывал — всегда на высшем уровне.",
	},
	{
		name: "Мария С.",
		text: "Продукция SAIPOV GROUP — это гармония стиля и качества. Всё очень красиво и долговечно.",
	},
	{
		name: "Алексей П.",
		text: "Качество товара превзошло мои ожидания. Видно, что в каждую деталь вложена душа.",
	},
	{
		name: "Ольга Р.",
		text: "Очень понравились халаты! Мягкие, стильные и качественные. Закажу ещё для родственников.",
	},
	{
		name: "Евгений Т.",
		text: "Цены приемлемые, доставка быстрая. Приятно иметь дело с профессионалами.",
	},
];

const clients = [
	{ name: "Hilton", image: "media/hilton.jpeg" },
	{ name: "Hyatt Regency", image: "media/Hyatt regency.jpeg" },
	{
		name: "Intercontinental",
		image: "media/Intercontinental hotel.jpg",
	},
	{
		name: "Grand Mir hotel",
		image: "media/photo_2025-07-17_21-52-57.jpg",
	},
];

const MainPage = () => {
	useEffect(() => {
		AOS.init({ duration: 800, once: true });
	}, []);

	const slides = [
		{
			title: "Sochiq kolleksiyasi",
			description:
				"Yumshoq, tabiiy va zamonaviy. Oilangiz uchun ideal.",
			image: "media/photo_2025-07-17_21-38-03.jpg",
			button: "Katalogga o‘tish",
		},
		{
			title: "Premium xalatlar",
			description: "Har kunlik nafis qulaylik.",
			image: "media/photo_2025-07-17_21-38-33.jpg",
			button: "Xalatlarni ko‘rish",
		},
		{
			title: "SAIPOV GROUP",
			description: "10+ yillik ishonch. Sifat biz uchun muhim.",
			image: "media/полотенце.jpg",
			button: "Batafsil maʼlumot",
		},
	];

	return (
		<div className="bg-[#f7f7f7] text-gray-900 font-sans">
			<NavbarDefault />

			{/* Header: Карусель */}
			<section className="relative pt-[74px]">
				<Swiper
					modules={[Pagination, Autoplay]}
					pagination={{ clickable: true }}
					autoplay={{ delay: 4000 }}
					loop={true}
					className="h-[500px] md:h-[600px]"
				>
					{slides.map((slide, i) => (
						<SwiperSlide key={i}>
							<div
								className="relative h-full w-full bg-cover bg-center"
								style={{
									backgroundImage: `url(${slide.image})`,
								}}
							>
								<div className="absolute inset-0 bg-black bg-opacity-50" />
								<div
									className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4"
									data-aos="fade-up"
								>
									<h2 className="text-2xl sm:text-4xl font-bold mb-4">
										{slide.title}
									</h2>
									<p className="max-w-xl text-sm sm:text-base mb-6">
										{slide.description}
									</p>
									<Link to="/cardUi">
										<button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition">
											{slide.button}
										</button>
									</Link>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>

			<Link to="/cardUi">
				<div data-aos="fade-up">
					<ProductSection
						title="SOCHIQ"
						products={towelProducts}
					/>
				</div>
			</Link>

			<Link to="/cardUiRobe">
				<div data-aos="fade-up">
					<ProductSection
						title="Xalatlar"
						products={robeProducts}
					/>
				</div>
			</Link>

			{/* О нас */}
			<section
				className="py-14 px-4 bg-white"
				data-aos="fade-up"
			>
				<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
					<div className="flex-1">
						<h2 className="text-2xl font-bold mb-4">
							BIZ HAQIMIZDA
						</h2>
						<p className="text-gray-700 text-sm leading-relaxed mb-3">
							Kompaniya 2012 yilda tashkil etilgan.
							Asoschisi — Saipov Muzaffar.
						</p>
						<p className="text-gray-700 text-sm leading-relaxed mb-3">
							Sifat va ishonchlilik bizning
							ustuvorligimizdir.
						</p>
						<p className="text-gray-700 text-sm leading-relaxed">
							Yangi texnologiyalar va assortimentni
							kengaytirmoqdamiz.
						</p>
					</div>
					<div className="flex-1 max-w-sm">
						<img
							src="media/image.png"
							alt="О нас"
							className="rounded-xl shadow-md object-cover w-full h-auto"
						/>
					</div>
				</div>
			</section>

			{/* Отзывы */}
			<section
				className="py-14 px-4 bg-white shadow-inner"
				data-aos="fade-up"
			>
				<h3 className="text-2xl font-semibold text-center mb-8">
					Mijozlar fikri
				</h3>
				<Swiper
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={20}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					autoplay={{ delay: 5000 }}
					breakpoints={{
						640: { slidesPerView: 1 },
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
					className="max-w-6xl mx-auto"
				>
					{reviews.map((review, i) => (
						<SwiperSlide key={i}>
							<div className="bg-gray-50 h-full p-6 rounded-lg border shadow-sm hover:shadow-md transition text-sm flex flex-col justify-between">
								<h4 className="font-semibold mb-2 text-lg">
									{review.name}
								</h4>
								<p className="text-gray-700">
									{review.text}
								</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>

			{/* Наши клиенты */}
			<section
				className="py-14 px-4 bg-gray-100"
				data-aos="fade-up"
			>
				<h2 className="text-2xl font-bold text-center mb-10">
					Bizning mijozlarimiz
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
					{clients.map((client, index) => (
						<div
							key={index}
							className="relative group overflow-hidden rounded-xl shadow-md"
						>
							<img
								src={client.image}
								alt={client.name}
								className="w-full h-48 object-cover transition duration-300 ease-in-out group-hover:blur-sm group-hover:scale-105"
							/>
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 flex items-center justify-center transition duration-300">
								<span className="text-white text-lg font-semibold">
									{client.name}
								</span>
							</div>
						</div>
					))}
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default MainPage;

// === ProductSection ===
const ProductSection = ({ title, products }) => {
	const addToLiked = useStore((state) => state.addToLiked);

	return (
		<section className="py-12 px-4">
			<div className="flex justify-between items-center mb-6 max-w-6xl mx-auto">
				<h2 className="text-xl sm:text-2xl font-bold">
					{title}
				</h2>
				<a
					href="/towels"
					className="text-sm text-gray-600 hover:underline"
				>
					Ko‘proq mahsulotlar &gt;
				</a>
			</div>
			<div
				className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
				data-aos="fade-up"
			>
				{products.map((product, index) => (
					<div
						key={index}
						className="bg-white rounded-xl shadow-sm hover:shadow-md transition relative group"
					>
						<img
							src={product.image}
							alt={product.name}
							className="w-full h-[250px] object-cover rounded-t-xl"
						/>
						<div className="p-4">
							<h3 className="text-sm font-medium">
								{product.name}
							</h3>
							<p className="text-xs text-gray-500 mt-1">
								{product.price}
							</p>
						</div>
						<button
							onClick={(e) => {
								e.preventDefault();
								addToLiked(product);
							}}
							className="absolute top-3 right-3 text-gray-500 hover:text-black transition"
						>
							<Heart className="text-[red]" size={18} />
						</button>
					</div>
				))}
			</div>
		</section>
	);
};
