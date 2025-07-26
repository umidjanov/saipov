import { Typography } from "@material-tailwind/react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-[#111111] text-white px-4 sm:px-6 py-10 sm:py-12 text-sm font-sans">
			<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 mb-10">
				{/* KATALOG */}
				<div>
					<h3 className="text-white font-semibold mb-4">
						KATALOG
					</h3>
					<ul className="flex flex-col gap-[10px] text-[#d2d2d2]">
						<Link to="/">
							<li className="cursor-pointer">
								Xalatlar
							</li>
						</Link>
						<Link to="/robes">
							<li className="cursor-pointer">
								Sochiqlar
							</li>
						</Link>
						<Link to="/towels">
							<li className="cursor-pointer">
								Aksessuarlar
							</li>
						</Link>
						<Link to="/about">
							<li className="cursor-pointer">
								Narxni hisoblash
							</li>
						</Link>
					</ul>
					<div className="mt-6">
						<img
							src="media/image 2 (3).png"
							alt="SAIPOV GROUP"
							className="h-14 sm:h-16 w-auto"
						/>
					</div>
				</div>

				{/* ИНФОРМАЦИЯ */}
				<div>
					<h3 className="text-white font-semibold mb-4">
						MA'LUMOT
					</h3>
					<ul className="space-y-2 text-[#d2d2d2]">
						<Link to="/contact">
							<li className="cursor-pointer">
								Kontaktlar
							</li>
						</Link>
						<li className="cursor-pointer">FAQ</li>
					</ul>
					<div className="mt-6 text-gray-400 text-xs">
						SAYT ISHLAB CHIQILDI
						<br />
						<span className="text-white">JaTech</span>
					</div>
				</div>

				{/* КОНТАКТЫ */}
				<div>
					<h3 className="text-white font-semibold mb-4">
						Kontaktlar
					</h3>
					<p className="text-[#d2d2d2] mb-2">
						saipovgroup@gmail.com
					</p>
					<p className="text-[#d2d2d2] mb-4">
						+7 993 608 38 85
					</p>
					<p className="text-white font-semibold mb-2">
						MESSENJERLAR
					</p>
					<div className="flex items-center space-x-3 text-lg mb-4">
						<a
							href="https://t.me/elteksterrytowel"
							target="_blank"
							rel="noreferrer"
						>
							<FaTelegramPlane className="text-[#27A6E5] text-[28px]" />
						</a>
						<FaWhatsapp className="text-[#25D366] text-[28px] cursor-pointer" />
						<BsInstagram className="text-[#ff4866] text-[24px] cursor-pointer" />
					</div>
					<p className="text-white font-semibold mb-2">
						IJTIMOIY TARMOQLAR
					</p>
				</div>

				{/* ПОДПИСКА */}
				<div>
					<h3 className="text-white font-semibold mb-4">
						YANGILIKLARGA OBUNA BO‘LING
					</h3>
					<p className="text-[#d2d2d2] mb-4">
						Chegirmalar va yangiliklardan xabardor bo‘ling
					</p>
					<div className="flex items-center border-b border-white py-1 mb-3">
						<input
							type="email"
							placeholder="Email manzilingiz"
							className="bg-transparent outline-none text-white placeholder:text-[#ccc] flex-1 text-sm"
						/>
						<button>
							<IoMdArrowDropright className="text-white text-2xl" />
						</button>
					</div>
					<p className="text-[#999] text-xs">
						Obuna bo‘lish orqali siz shaxsiy ma'lumotlarni
						qayta ishlashga rozilik bildirasiz
					</p>
					<div className="mt-3 text-xs text-[#ccc] underline space-y-1">
						<div>MAXFIYLIK SIYOSATI</div>
						<div>FOYDALANUVCHI KELISHUVI</div>
					</div>
				</div>
			</div>

			<Typography
				variant="small"
				className="text-center font-normal text-[#ffffff] text-xs sm:text-sm"
			>
				&copy; {currentYear} Saipov Group — Barcha huquqlar
				himoyalangan.
			</Typography>
		</footer>
	);
};
