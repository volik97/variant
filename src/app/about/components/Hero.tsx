import React from 'react';
import Title from '@/app/components/ui/Text/Title';
import Image from 'next/image';
import bgImgBlock from '@/app/img/hero/bg-hero-block.svg';
import heroBuilders from '@/app/img/hero/bg-hero-builders.svg';
import WrapperBlocksM from '@/app/components/wrappers/wrapperBlocksM';

function Hero() {
	return (
		<WrapperBlocksM
			params={
				'relative font-poppins bg-dark h-[312px] overflow-clip 2xl:min-h-[500px] lg:min-h-[447px]'
			}
		>
			<div
				className={
					'flex min-h-full max-w-[853px] flex-col justify-between lg:justify-start 2xl:pt-[60px]'
				}
			>
				<Title color={'text-light z-20'} size2XL text={'Приоритеты компании'} />
			</div>
			<Image
				className={
					'absolute -bottom-40 -right-6 rotate-[75deg] scale-[1.3] transform sm:-bottom-60 sm:w-[370px] xl:-bottom-[310px] xl:-right-0 xl:w-[447px] 2xl:w-[547px]'
				}
				src={bgImgBlock}
				alt={'bg-hero'}
			/>
			<Image
				className={
					'absolute -bottom-2 -right-4 w-[360px] transform sm:w-[340px] md:bottom-0  xl:right-14 xl:w-[500px] 2xl:w-[600px]'
				}
				src={heroBuilders}
				alt={'bg-hero'}
			/>
		</WrapperBlocksM>
	);
}

export default Hero;
