import React from "react";
import {
	Navbar,
	Collapse,
	Typography,
	IconButton,
} from "@material-tailwind/react";
import { FcLike } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";
import useStore from "../store/useStore";
import { useTranslation } from "react-i18next";

export function NavbarDefault() {
	const [openNav, setOpenNav] = React.useState(false);
	const { t, i18n } = useTranslation();
	const [showNavbar, setShowNavbar] = React.useState(true);
	const [lastScrollY, setLastScrollY] = React.useState(0);

	React.useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 960) setOpenNav(false);
		};
		const handleScroll = () => {
			if (window.scrollY > lastScrollY) {
				setShowNavbar(false);
			} else {
				setShowNavbar(true);
			}
			setLastScrollY(window.scrollY);
		};
		window.addEventListener("resize", handleResize);
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollY]);

	const cart = useStore((state) => state.cart);
	const totalCount = cart.reduce(
		(sum, item) => sum + (item.count || 1),
		0
	);
	const navList = (
		<ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-[60px]">
			{/* nav links */}
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="flex items-center gap-x-2 p-1 font-bold"
			>
				<a href="/" className="flex items-center">
					{t("home")}
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="flex items-center gap-x-2 p-1 font-bold"
			>
				<a href="/robes" className="flex items-center">
					{t("robes")}
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="flex items-center gap-x-2 p-1 font-bold"
			>
				<a href="/towels" className="flex items-center">
					{t("towels")}
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="flex items-center gap-x-2 p-1 font-bold"
			>
				<a href="/about" className="flex items-center">
					{t("about")}
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="flex items-center gap-x-2 p-1 font-bold"
			>
				<a href="/contact" className="flex items-center">
					{t("contact")}
				</a>
			</Typography>

			{/* icons */}
			<div className="flex items-center gap-[20px]">
				<Typography
					as="li"
					variant="small"
					color="blue-gray"
					className="flex items-center gap-x-2 p-1 font-bold"
				>
					<a href="/liked" className="flex items-center">
						<FcLike className="text-[23px]" />
					</a>
				</Typography>
				<Typography
					as="li"
					variant="small"
					color="blue-gray"
					className="flex items-center gap-x-2 p-1 font-bold"
				>
					<a
						href="/korzina"
						className="relative flex items-center"
					>
						<span className="relative">
							<FaShoppingCart className="text-[23px]" />
							{totalCount > 0 && (
								<span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5 min-w-[20px] flex items-center justify-center">
									{totalCount}
								</span>
							)}
						</span>
					</a>
				</Typography>
			</div>

			{/* lang switch */}
			<div className="flex gap-2 items-center ml-2">
				<button
					onClick={() => i18n.changeLanguage("uz")}
					className="text-sm font-bold"
				>
					UZ
				</button>
				<span>|</span>
				<button
					onClick={() => i18n.changeLanguage("ru")}
					className="text-sm font-bold"
				>
					RU
				</button>
			</div>
		</ul>
	);

	return (
		<Navbar
			className={`mx-auto max-w-screen-4xl px-4 py-2 lg:px-8 lg:py-4 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
				showNavbar ? "translate-y-0" : "-translate-y-full"
			}`}
		>
			<div className="container mx-auto flex items-center justify-between text-blue-gray-900">
				<Typography
					as="a"
					href="/"
					className="mr-4 cursor-pointer lg:text-[25px] font-bold"
				>
					Saipov group
				</Typography>

				<div className="hidden lg:block">{navList}</div>

				<IconButton
					variant="text"
					className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
					ripple={false}
					onClick={() => setOpenNav(!openNav)}
				>
					{openNav ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							className="h-6 w-6"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					)}
				</IconButton>
			</div>

			<Collapse open={openNav}>
				<div className="container mx-auto">{navList}</div>
			</Collapse>
		</Navbar>
	);
}
