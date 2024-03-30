'use client';
import React, { useState } from 'react';
import Logo from '@/app/components/ui/Header/Logo';
import Navigation from '@/app/components/ui/Header/navigation';
import navButton from '../../../../public/navButton.svg';
import Image from 'next/image';

function Header() {
	const [navIsOpen, setNavIsOpen] = useState(false);
	return (
		<header
			className={
				'absolute z-50 flex w-full flex-row items-center justify-center px-2 pt-1 lg:px-12 lg:pt-5 2xl:px-20'
			}
		>
			<div
				className={
					'flex w-full max-w-[1568px] flex-col items-center justify-between rounded-[12px] bg-dark px-3 py-2 sm:rounded-[20px] sm:p-5'
				}
			>
				<div className={'flex w-full flex-row justify-between '}>
					<Logo />
					<Image
						className={'lg:hidden'}
						onClick={() => setNavIsOpen(!navIsOpen)}
						src={navButton}
						alt={'navButton'}
					/>
					<nav className={'hidden w-full lg:block'}>
						<Navigation />
					</nav>
				</div>
				<div
					className={`${
						navIsOpen ? `max-h-[400px]` : 'max-h-0'
					} relative w-full overflow-hidden transition-all duration-700 ease-in-out lg:hidden `}
				>
					<div
						className={
							'flex items-center justify-center rounded-b-2xl bg-dark p-2 py-16'
						}
						onMouseLeave={() => setNavIsOpen(!navIsOpen)}
					>
						<Navigation />
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
