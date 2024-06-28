"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import "./hamburger.css";
import { FaFacebook, FaInstagram, FaShoppingCart } from "react-icons/fa";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import BtnLink from "../reusable/BtnLink";
import { noto } from "../Fonts";
const Navbar = () => {

	const hamburger = useRef<HTMLInputElement>(null);
	const { scrollY } = useScroll();

	const [visible, setVisible] = useState(false);
	const [hidden, setHidden] = useState(false);
	const [onTop, setOnTop] = useState(true);

	useMotionValueEvent(scrollY, "change", (latest: any) => {
		const previous: any = scrollY.getPrevious();
		if (latest > previous && latest > 150) {
			setHidden(true);
		} else {
			setHidden(false);
		}
    if (latest > 50) {
      setOnTop(false)
    } else {
      setOnTop(true)
      
    }
	});


  const handleLinkClick = () => {
    setVisible(false);
    if (hamburger.current) {
      hamburger.current.checked = false;
    }
  };

	return (
		<motion.nav
			variants={{
				visible: { y: 0 },
				hidden: { y: "-100%" },
			}}
			animate={hidden ? "hidden" : "visible"}
			transition={{ duration: 0.35, ease: "easeInOut" }}
			className={` ${onTop ? 'bg-transparent' : 'bg-white'} fixed top-0 left-0  w-full px-4 z-4 flex justify-between items-center xl:px-20 z-40 transition-all duration-700`}
		>
			<Link
				href="/"
				className="flex justify-center items-center p-4 gap-4 z-30"
			>
				<div className="flex flex-col items-start justify-center">
					<h2
						className={`${noto.className} whitespace-nowrap text-3xl md:text-5xl mt-[5px] transition-color duration-150`}
					>
						Perfect Skin
					</h2>
					<p className={`uppercase `}>
						centrum kosmetologii
					</p>
				</div>
			</Link>
			<label className="flex lg:hidden z-50">
				<input ref={hamburger}
					type="checkbox"
					id="check"
					onClick={(e: any) => {
						e.target.checked ? setVisible(true) : setVisible(false);
					}}
					className="hidden"
				/>
				<span></span>
				<span></span>
				<span></span>
			</label>

			<div
				className={`fixed top-0 right-0 h-screen w-fit bg-white flex flex-col items-center justify-center border-l-2 border-black transition-all duration-1000 origin-right ease-in-out z-40
        ${visible ? "scale-x-1" : "scale-x-0"}
      `}
			>
				<ul className="flex flex-col justify-center items-end gap-8 text-xl font-bold text-black p-8">
					<li>
						<Link className="z-20" onClick={handleLinkClick} href="/">Strona Główna</Link>
					</li>
					<li>
						<Link className="z-20" onClick={handleLinkClick} href="/uslugi">Usługi</Link>
					</li>
					<li>
						<Link className="z-20" onClick={handleLinkClick} href="/onas">O Nas</Link>
					</li>
					<li>
						<Link className="z-20" onClick={handleLinkClick} href="/kontakt">Kontakt</Link>
					</li>
					<li>
						<BtnLink link="https://booksy.com/pl-pl/101806_perfect-skin-centrum-kosmetologii_inni_12311_chorzow#ba_s=seo"><FaShoppingCart /> Zarezerwuj wizytę</BtnLink>
					</li>

					<li className="w-48 border-b-2 border-black my-6"></li>
					<li className="flex gap-8">
						<Link
							href="https://www.facebook.com/LunarisWeb?locale=pl_PL"
							className="text-5xl active:text-primary"
						>
							<FaInstagram />
						</Link>
						<Link
							href="https://www.instagram.com/lunarisweb.pl/"
							className="text-5xl active:text-primary"
						>
							<FaFacebook />
						</Link>
					</li>
				</ul>
			</div>

			<ul className="hidden lg:flex gap-8 items-center font-[600] text-lg justify-center text-black">
				<li>
					<Link
						href="/"
						className="hover:underline active:text-primary transition-colors duration-100"
					>
						Strona Główna
					</Link>
				</li>

				
				<li>
					<Link
						href="/uslugi"
						className="hover:underline active:text-primary transition-colors duration-100"
					>
						Usługi
					</Link>
				</li>
				<li>
					<Link
						href="/onas"
						className="hover:underline active:text-primary transition-colors duration-100"
					>
						O Nas
					</Link>
				</li>
				<li>
					<Link
						href="/kontakt"
						className="hover:underline active:text-primary transition-colors duration-100"
					>
						Kontakt
					</Link>
				</li>
			</ul>
			<div className="hidden lg:block">
				<BtnLink link="/kontakt"><FaShoppingCart /> Zarezerwuj wizytę</BtnLink>
			</div>

			<div className={` ${onTop ? 'hidden' : 'absolute'} bottom-0 left-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent w-full h-[1px]`}></div>
		</motion.nav>
	);
};

export default Navbar;