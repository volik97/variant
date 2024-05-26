import React from 'react';
import WrapperBlocksM from '@/app/components/wrappers/wrapperBlocksM';
import Title from '@/app/components/ui/Text/Title';
import Image from 'next/image';
import bgImgBlock from '@/app/img/hero/bg-hero-block.svg';
import heroChelik from '@/app/img/hero/bg-hero-varintPath-chel.svg';

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
				<Title
					color={'text-light z-20'}
					size2XL
					text={'Варианты направлений'}
				/>
			</div>
			<Image
				className={
					'absolute -bottom-40 -right-6 rotate-[60deg] scale-[1.3] transform sm:-bottom-60 sm:w-[370px] xl:-bottom-60  xl:-right-6 xl:w-[447px] 2xl:w-[547px]'
				}
				src={bgImgBlock}
				alt={'bg-hero'}
			/>
			<Image
				className={
					'absolute -bottom-12 right-0 w-[360px] transform sm:w-[340px] md:bottom-0  xl:right-14 xl:w-[500px] 2xl:w-[600px]'
				}
				src={heroChelik}
				alt={'bg-hero'}
			/>
		</WrapperBlocksM>
	);
}

export default Hero;
