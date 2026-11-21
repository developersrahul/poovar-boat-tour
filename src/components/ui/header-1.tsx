'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';

const phoneNumber = '+917902291301';
const phoneDisplay = '+91 79022 91301';
const whatsappUrl = `https://wa.me/917902291301?text=Hello%20Poovar%20Boat%20Tour,%20I%20would%20like%20to%20enquire%20about%20a%20backwater%20cruise%20package.`;

export interface HeaderProps {
	currentPath?: string;
}

export function Header({ currentPath = '/' }: HeaderProps) {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(15);

	const links = [
		{ label: 'Home', href: '/' },
		{ label: 'About Us', href: '/about/' },
		{ label: 'Services', href: '/services/' },
		{ label: 'Pricing & Packages', href: '/pricing/' },
		{ label: 'Gallery', href: '/gallery/' },
		{ label: 'FAQs', href: '/faqs/' },
		{ label: 'Contact Us', href: '/contact/' },
	];

	const handleBookNow = () => {
		if (typeof window !== 'undefined' && (window as any).openBookingModal) {
			(window as any).openBookingModal('Header Book Now');
		} else {
			window.open(whatsappUrl, '_blank');
		}
	};

	return (
		<header
			className={cn(
				'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 py-3 sm:py-4 pointer-events-none'
			)}
		>
			<div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
				<nav
					className={cn(
						'pointer-events-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 border shadow-2xl',
						open ? 'rounded-t-[7px] border-b-0' : 'rounded-[7px]',
						scrolled || open
							? 'bg-[#06192e] border-[#b19d7f]/40 py-2 sm:py-2.5'
							: 'bg-[#06192e] border-white/20'
					)}
					style={{ backgroundColor: '#06192e' }}
				>
					{/* Brand Logo Mark */}
					<a href="/" className="group flex flex-shrink-0 items-center" aria-label="Poovar Boat Tour Home">
						<img
							src="/images/poovar_logo_trimmed.webp"
							alt="Poovar Boat Tour"
							className="h-10 w-auto object-contain sm:h-12 transition-transform duration-300 group-hover:scale-105 filter drop-shadow"
							width="135"
							height="70"
						/>
					</a>

					{/* Desktop Navigation Links */}
					<div className="hidden items-center gap-1 md:flex lg:gap-2">
						{links.map((link) => {
							const normPath = currentPath.endsWith('/') ? currentPath : `${currentPath}/`;
							const isActive =
								normPath === link.href ||
								(link.href !== '/' && normPath.startsWith(link.href));
							return (
								<a
									key={link.label}
									className={cn(
										buttonVariants({ variant: 'ghost' }),
										'text-xs uppercase tracking-wider font-semibold transition-all px-3 py-1.5 h-auto rounded-[7px]',
										isActive
											? 'text-[#b19d7f] font-bold border-b-2 border-[#b19d7f]'
											: 'text-white/80 hover:text-white hover:bg-white/10'
									)}
									href={link.href}
								>
									{link.label}
								</a>
							);
						})}
					</div>

					{/* Right Call-To-Actions */}
					<div className="flex flex-shrink-0 items-center gap-2.5 sm:gap-3">
						<Button
							onClick={handleBookNow}
							className="rounded-[7px] bg-[#b19d7f] text-white hover:bg-[#9e8a6d] hover:-translate-y-0.5 font-bold text-xs uppercase tracking-[0.16em] px-3.5 sm:px-6 py-2.5 h-auto shadow-lg transition-all cursor-pointer"
						>
							Book Now
						</Button>

						{/* Mobile Menu Toggle Button */}
						<Button
							size="icon"
							variant="outline"
							onClick={() => setOpen(!open)}
							className="md:hidden size-9 rounded-[7px] bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white cursor-pointer"
							aria-expanded={open}
							aria-controls="mobile-menu"
							aria-label="Toggle menu"
						>
							<MenuToggleIcon open={open} className="size-4" duration={300} />
						</Button>
					</div>
				</nav>

				{/* Continuous Attached Mobile Dropdown (Solid Neera Midnight Navy, High Contrast) */}
				{open && (
					<div
						id="mobile-menu"
						style={{ backgroundColor: '#06192e' }}
						className="pointer-events-auto w-full rounded-b-[7px] bg-[#06192e] border border-t-0 border-[#b19d7f]/40 p-4 shadow-[0_25px_60px_rgba(0,0,0,0.85)] md:hidden animate-in slide-in-from-top-1 duration-200 text-white"
					>
						<div className="grid gap-y-1.5">
							{links.map((link) => {
								const isActive =
									normPath === link.href || (link.href !== '/' && normPath.startsWith(link.href));
								return (
									<a
										key={link.label}
										onClick={() => setOpen(false)}
										className={cn(
											'flex items-center justify-between py-3 px-4 rounded-[7px] transition-all',
											isActive
												? 'bg-[#b19d7f] text-white font-extrabold shadow-md'
												: 'text-white/95 hover:bg-white/10 hover:text-[#b19d7f] bg-[#0c223c]/60 border border-white/5'
										)}
										href={link.href}
									>
										<span className="font-marcellus text-sm tracking-wider font-medium text-white">{link.label}</span>
										<span className={isActive ? 'text-white font-bold' : 'text-[#b19d7f]'}>&rarr;</span>
									</a>
								);
							})}
						</div>

						<div className="flex flex-col gap-2.5 pt-4 border-t border-white/15 mt-3">
							<a
								href={`tel:${phoneNumber}`}
								className="flex items-center justify-center gap-2 rounded-[7px] bg-[#0c223c] border border-white/20 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/15 transition-colors shadow-sm"
							>
								<i className="ph-bold ph-phone text-[#b19d7f]"></i>
								<span>Call Direct: {phoneDisplay}</span>
							</a>
							<a
								href={whatsappUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2 rounded-[7px] bg-[#b19d7f] hover:bg-[#9e8a6d] py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors shadow-lg"
							>
								<i className="ph-bold ph-whatsapp-logo text-base"></i>
								<span>WhatsApp Captain</span>
							</a>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}
