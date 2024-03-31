import React from 'react';
import Title from '@/app/components/ui/Text/Title';
import Image from 'next/image';
import heroBook from '@/app/img/hero/book.svg';
import heroCase from '@/app/img/hero/case.svg';
import bgImgBlock from '@/app/img/hero/bg-hero-block.svg';
import bgImgHuman from '@/app/img/hero/bg-hero-human.svg';
import Link from 'next/link';
import WrapperBlocksM from '@/app/components/wrappers/wrapperBlocksM';

function Hero() {
	return (
		<WrapperBlocksM
			params={
				'relative font-poppins bg-dark justify-between min-h-[520px] overflow-clip 2xl:min-h-[803px] lg:min-h-[650px]'
			}
		>
			<Title
				color={'text-light'}
				size2XL
				text={'Стажировка и трудоустройство'}
				variant
				v
			/>
			<div
				className={'z-10 flex w-full flex-row gap-2 sm:max-w-[705px] lg:gap-4'}
			>
				<Link
					href={'/internship'}
					className={
						'flex min-h-[72px] w-full flex-col justify-between rounded-[12px] bg-light p-2 duration-200 hover:bg-orange hover:text-white hover:shadow-2xl sm:rounded-[32px] sm:p-4 2xl:px-6 2xl:py-7'
					}
				>
					<p
						className={
							'text-xs font-semibold leading-none tracking-[.02em] sm:text-2xl sm:font-semibold sm:leading-normal'
						}
					>
						Стажировка
					</p>
					<Image
						className={'w-[38px] self-end sm:w-[80px] 2xl:w-[139px]'}
						src={heroBook}
						alt={'hero-book'}
					/>
				</Link>
				<Link
					href={'/career'}
					className={
						'flex min-h-[72px] w-full flex-col justify-between rounded-[12px] bg-light p-2 duration-200 hover:bg-orange hover:text-white hover:shadow-2xl sm:rounded-[32px] sm:p-4 2xl:px-6 2xl:py-7'
					}
				>
					<p
						className={
							'text-xs font-semibold leading-none tracking-[.02em] sm:text-2xl sm:font-semibold sm:leading-normal'
						}
					>
						Вакансии
					</p>
					<Image
						className={'w-[38px] self-end sm:w-[80px] 2xl:w-[139px]'}
						src={heroCase}
						alt={'hero-book'}
					/>
				</Link>
			</div>
			<Image
				className={
					'absolute -bottom-12 -right-6 scale-[1.20] transform sm:w-[370px] xl:bottom-24 xl:right-6 xl:w-[447px] 2xl:w-[547px]'
				}
				src={bgImgBlock}
				alt={'bg-hero'}
			/>
			<Image
				className={
					'absolute bottom-0 right-0 -scale-x-100 transform sm:w-[340px] xl:bottom-14 xl:right-12 xl:w-[429px] 2xl:w-[529px]'
				}
				src={bgImgHuman}
				alt={'bg-hero'}
			/>
		</WrapperBlocksM>
	);
}

export default Hero;
