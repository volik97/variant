import React from 'react';
import Title from '@/app/components/ui/Text/Title';
import Image from 'next/image';
import bgImgBlock from '@/app/img/hero/bg-hero-block.svg';
import heroStudent from '@/app/img/hero/bg-hero-student.svg';
import WrapperBlocksM from '@/app/components/wrappers/wrapperBlocksM';

function Hero() {
	return (
		<WrapperBlocksM
			params={
				'relative font-poppins bg-dark h-[520px] overflow-clip 2xl:min-h-[586px] md:h-[420px] lg:min-h-[586px]'
			}
		>
			<div
				className={
					'flex min-h-full max-w-[720px] flex-col gap-4 md:gap-6 lg:justify-start 2xl:gap-8 '
				}
			>
				<Title
					color={'text-light z-20'}
					size2XL
					text={'Тестирование навыков'}
				/>
				<p
					className={
						' text-xs font-[400] tracking-[0.02em] text-white sm:text-sm md:max-w-[500px] lg:block lg:text-xl 2xl:max-w-full 2xl:text-2xl 2xl:leading-8 2xl:tracking-[0.03em]'
					}
				>
					{
						'Данный тест не является методом оценки специалиста и его знаний. Он сделан для того, чтобы любой начинающий специалист мог самостоятельно попробовать ответить на вопросы, подобные вопросам, с которыми любой инженер столкнется в работе. По результатам прохождения теста можно самостоятельно сделать вывод о готовности к такой работе на настоящий момент.'
					}
				</p>
				<button
					className={
						'z-10 flex items-center justify-center rounded-[14px] bg-orange px-6 py-3.5 font-poppins text-lg font-semibold tracking-[0.1em] text-white hover:bg-[#de4b2a] sm:text-xl md:max-w-fit'
					}
				>
					Пройти тестирование
				</button>
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
					'absolute -bottom-24 -right-4 w-[360px] transform sm:w-[340px] md:bottom-0  xl:right-14 xl:w-[500px] 2xl:w-[600px]'
				}
				src={heroStudent}
				alt={'bg-hero'}
			/>
		</WrapperBlocksM>
	);
}

export default Hero;
