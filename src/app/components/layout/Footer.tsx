import React from 'react';
import Logo from '@/app/components/ui/Header/Logo';
import Navigation from '@/app/components/ui/Header/navigation';
import Image from 'next/image';
import footerHand from '../../img/footerHand.svg';
function Footer() {
	return (
		<footer
			className={
				'flex w-full flex-row items-center justify-center px-2 pb-1 pt-4 lg:px-12 lg:pb-5 xl:pt-10 2xl:px-20'
			}
		>
			<div
				className={
					'relative flex w-full max-w-[1568px] flex-col items-center justify-between rounded-[12px] bg-dark px-3 py-2 sm:rounded-[20px] sm:p-10 sm:px-[60px]'
				}
			>
				<div className={'flex w-full flex-col items-start justify-start gap-4'}>
					<div className={'flex w-full justify-start md:justify-end xl:pb-5'}>
						<Image
							src={footerHand}
							alt={'footerHand'}
							className={
								'absolute left-0 hidden max-h-[278px] w-1/2 md:block xl:w-2/5'
							}
						/>
						<div
							className={
								'space-y-3 sm:min-h-[200px] sm:w-[250px] sm:space-y-6 md:min-h-[278px] min-[864px]:w-[363px]'
							}
						>
							<Logo />
							<Navigation className={'flex flex-col gap-3 md:gap-6'} />
						</div>
					</div>
					<div
						className={
							'flex w-full justify-between gap-7 border-t-[1px] border-t-light pt-[13px]'
						}
					>
						<a className={'text-xs text-light sm:text-2xl'}>
							© 2024 ООО Фирма “Вариант”
						</a>
						<a
							href={''}
							className={
								'text-right text-xs leading-none tracking-[0.02em] text-light duration-100 hover:cursor-pointer hover:text-orange active:text-orange sm:text-2xl'
							}
						>
							Политика конфиденциальности
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
