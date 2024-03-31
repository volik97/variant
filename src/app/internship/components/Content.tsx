import Title from '@/app/components/ui/Text/Title';
import Image from 'next/image';
import studentImg from '@/app/internship/img/student.svg';
import Text from '@/app/components/ui/Text/Text';
import WrapperBlocks from '@/app/components/wrappers/wrapperBlocks';
import React from 'react';
import variantimg from '@/app/internship/img/varianimg.svg';

export default function Content() {
	return (
		<section className={'flex flex-col gap-4 font-poppins xl:gap-10'}>
			<div
				className={
					'grid grid-cols-1 gap-4 min-[484px]:grid-cols-2 min-[484px]:grid-rows-2 sm:max-h-[1096px] xl:gap-10'
				}
			>
				<WrapperBlocks
					params={
						'bg-orange row-span-2 h-[420px] min-[484px]:h-full relative h-full justify-between overflow-clip'
					}
				>
					<div className={'z-10 flex flex-row items-center gap-2 xl:gap-6'}>
						<Title text={'Кому подойдет?'} color={'text-white'}></Title>
					</div>
					<Image
						src={studentImg}
						alt={'studentImg'}
						className={
							'absolute -bottom-10 right-4 w-[251px] max-w-[582px] object-center min-[484px]:right-0 min-[484px]:w-full'
						}
					/>
					<div
						className={'z-10 flex flex-row items-end justify-between gap-10'}
					>
						<div className={'flex max-w-[744px] flex-col gap-y-2 sm:gap-y-5'}>
							<div className={'h-px w-full bg-white'} />
							<Text
								params={'text-white'}
								text={
									'Это уникальное предложение для молодых специалистов и студентов вузов получить или улучшить свои  профессиональные навыки в сфере проектирования и начать карьеру '
								}
							/>
						</div>
					</div>
				</WrapperBlocks>
				{/*Блок Варианты направлений*/}
				<WrapperBlocks
					params={'bg-white row-span-1 min-h-[216px] justify-between gap-10'}
				>
					<div className={'flex flex-row items-start gap-2 sm:gap-6'}>
						<a
							className={
								'flex items-center justify-center rounded-[10px] bg-light px-2 py-1 font-semibold leading-7 tracking-tight'
							}
						>
							<Title color={'text-orange'} text={'02'} />
						</a>
						<Title
							text={'Варианты направлений'}
							color={'text-dark self-center'}
						></Title>
					</div>
					<div className={'flex w-full flex-col gap-y-2 sm:gap-y-5'}>
						<div className={'h-px w-full bg-grey'} />
						<Text
							params={'text-grey'}
							text={
								'Информация о существующих направлениях работы инженеров в компании'
							}
						/>
					</div>
				</WrapperBlocks>
				<div className={'relative overflow-clip rounded-[40px]'}>
					<div className={'absolute h-full w-full bg-transparent px-4 py-3'}>
						<a
							className={
								'rounded-[40px] border border-white bg-white/20 px-4 py-2 text-xs text-white sm:px-5 sm:text-[36px]'
							}
						>
							Вариант
						</a>
					</div>
					<Image
						src={variantimg}
						alt={'variantimg'}
						className={'h-full w-full rounded-[18px] object-cover'}
					/>
				</div>
			</div>
		</section>
	);
}
