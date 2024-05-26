import WrapperBlocksM from '@/app/components/wrappers/wrapperBlocksM';
import Title from '@/app/components/ui/Text/Title';
import Link from 'next/link';
import Image from 'next/image';
import heroBook from '@/app/img/hero/book.svg';
import heroCase from '@/app/img/hero/case.svg';
import bgImgBlock from '@/app/img/hero/bg-hero-block.svg';
import heroChelik from '@/app/internship/img/heroChelik.svg';
import React from 'react';

function Hero() {
	return (
		<WrapperBlocksM
			params={
				'relative font-poppins bg-dark h-[520px] overflow-clip 2xl:min-h-[794px] lg:min-h-[650px]'
			}
		>
			<div
				className={
					'flex min-h-full max-w-[853px] flex-col justify-between lg:justify-start 2xl:pt-[60px]'
				}
			>
				<Title
					color={'text-light z-20'}
					size2XL
					text={'Программа стажировки проектировщиков'}
					variant
				/>
				<p
					className={
						'mt-6 hidden text-2xl leading-9 tracking-[0.02em] text-white md:max-w-[500px] lg:block 2xl:max-w-full'
					}
				>
					Организуем прохождение образовательного курса стажировки и
					трудоустройство в компанию Вариант
				</p>
				<button
					className={
						'z-10 flex items-center justify-center rounded-[14px] bg-orange px-6 py-3.5 font-poppins text-xl font-semibold tracking-[0.1em] text-white hover:bg-[#de4b2a] lg:mt-8 lg:max-w-fit'
					}
				>
					Начать обучение
				</button>
			</div>
			<Image
				className={
					'absolute -bottom-12 -right-6 scale-[1.20] transform sm:w-[370px] xl:bottom-24 xl:right-6 xl:w-[447px] 2xl:-right-20 2xl:w-[547px] min-[1650px]:right-6'
				}
				src={bgImgBlock}
				alt={'bg-hero'}
			/>
			<Image
				className={
					'absolute bottom-20 right-0 transform sm:w-[340px] xl:bottom-40 xl:right-14 xl:w-[500px] xl:-scale-x-100 2xl:-right-20 2xl:w-[600px] min-[1650px]:right-6'
				}
				src={heroChelik}
				alt={'bg-hero'}
			/>
		</WrapperBlocksM>
	);
}

export default Hero;
