import React from 'react';
import WrapperBlocks from '@/app/components/wrappers/wrapperBlocks';
import Title from '@/app/components/ui/Text/Title';
import Link from 'next/link';

function Content() {
	const variantPath = [
		{
			title: 'Архитектурно-строительное направление',
			labels: ['Офис', 'Ростов-на-Дону'],
		},
		{
			title: 'Направление тепло-водоснабжения, вентиляции и кондиционирования',
			labels: ['Офис', 'Ростов-на-Дону'],
		},
		{
			title: 'Направление электрических сетей',
			labels: ['Офис', 'Ростов-на-Дону'],
		},
		{
			title: 'Сметное направление',
			labels: ['Офис', 'Ростов-на-Дону'],
		},
	];

	return (
		<div className={'flex flex-col gap-4 font-poppins xl:gap-10'}>
			{variantPath.map((variant, index) => (
				<WrapperBlocks
					key={index}
					params={'bg-white flex flex-col gap-6 md:flex-row justify-between'}
				>
					<div
						className={'space-y-4 sm:space-y-10 lg:space-y-16 xl:space-y-20'}
					>
						<Title color={'text-dark sm:pt-2'} text={variant.title} />
						<div className={'flex gap-1 sm:gap-2'}>
							{variant.labels.map((label, index) => (
								<span
									className={
										'flex w-fit items-center justify-center rounded-[16px] bg-[#435362]/10 px-2 py-1 text-xs text-grey sm:px-3 sm:text-lg lg:text-xl xl:rounded-[40px] xl:px-5 xl:py-2 xl:text-2xl 2xl:text-3xl'
									}
								>
									{label}
								</span>
							))}
						</div>
					</div>
					<Link
						className={
							'h-fit w-full rounded-[14px] bg-orange px-6 py-3.5 text-[20px] font-semibold tracking-wider text-white hover:bg-orange/90 md:w-fit'
						}
						href={{
							pathname: `career/${index}`,
						}}
					>
						{'Подробнее'}
					</Link>
				</WrapperBlocks>
			))}
		</div>
	);
}

export default Content;
