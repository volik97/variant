import React from 'react';
import WrapperBlocks from '@/app/components/wrappers/wrapperBlocks';
import Title from '@/app/components/ui/Text/Title';
import Image from 'next/image';
import testingImg from '../../../img/content/testing.svg';
import Text from '@/app/components/ui/Text/Text';
import humansCheck from '../../../img/content/humanCheck.svg';
import handImg from '../../../img/content/handRock.svg';
import aboutImg from '../../../img/content/aboutImg.svg';
import mapImg from '../../../img/content/map.svg';
function Content() {
	return (
		<section className={'flex flex-col gap-4 font-poppins xl:gap-10'}>
			<div
				className={
					'grid grid-cols-1 gap-4 min-[484px]:grid-cols-2 min-[484px]:grid-rows-2 sm:max-h-[1096px] xl:gap-10'
				}
			>
				{/*Блок тестирование*/}
				<WrapperBlocks params={'bg-white row-span-2 justify-between'}>
					<div className={'flex flex-row items-center gap-2 xl:gap-6'}>
						<a
							className={
								'flex items-center justify-center rounded-[10px] bg-light px-2 py-1 text-xl font-semibold leading-7 tracking-tight text-orange'
							}
						>
							<Title color={'text-orange'} text={'01'} />
						</a>
						<Title text={'Тестирование'} color={'text-dark'}></Title>
					</div>
					<Image
						src={testingImg}
						alt="testingImg"
						className="self-center py-[31px] min-[400px]:py-20 min-[484px]:py-[31px]"
					/>
					<div className={'flex flex-col gap-y-2 sm:gap-y-5'}>
						<div className={'h-px w-full bg-grey'} />
						<Text
							params={'text-grey'}
							text={
								'Онлайн тест, для тех кто хочет проверить уровень своих базовых знаний, необходимых для преобретения инженерной профессии '
							}
						/>
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
				{/*Блок с картинкой*/}
				<Image
					src={humansCheck}
					alt={'imgHumanCheck'}
					className={'h-full w-full rounded-[18px] object-cover'}
				/>
			</div>
			{/*Блок стажировка*/}
			<WrapperBlocks
				params={
					'bg-orange relative min-h-[420px] sm:min-h-[548px] justify-between overflow-clip'
				}
			>
				<div className={'flex flex-row items-center gap-2 xl:gap-6'}>
					<a
						className={
							'flex items-center justify-center rounded-[10px] bg-light px-2 py-1 font-semibold leading-7 tracking-tight'
						}
					>
						<Title color={'text-orange'} text={'03'} />
					</a>
					<Title text={'Стажировка'} color={'text-white'}></Title>
				</div>
				<Image
					src={handImg}
					alt={'handImg'}
					className={
						'absolute bottom-0 right-0 object-center sm:w-[350px] lg:w-[400px] xl:-bottom-60 xl:w-[630px]'
					}
				/>
				<div className={'z-10 flex flex-row items-end justify-between gap-10'}>
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
			{/*Блок С информацией*/}
			<div className={'grid gap-4 sm:grid-cols-2 xl:gap-10'}>
				{/*Блок адрес*/}
				<WrapperBlocks
					params={'bg-white row-span-1 min-h-[216px] justify-between gap-10'}
				>
					<div className={'flex flex-col items-start justify-between'}>
						<div className={'flex flex-row items-center gap-2 xl:gap-6'}>
							<a
								className={
									'flex items-center justify-center rounded-[10px] bg-light px-2 py-1 font-semibold leading-7 tracking-tight'
								}
							>
								<Title color={'text-orange'} text={'04'} />
							</a>
							<Title text={'Адрес'} color={'text-dark'}></Title>
						</div>
						<Image
							src={mapImg}
							alt={'map'}
							className={'py-[31px] min-[400px]:py-20 min-[484px]:py-[31px]'}
						/>
					</div>
					<div className={'flex w-full flex-col gap-y-2 sm:gap-y-5'}>
						<div className={'h-px w-full bg-grey'} />
						<Text
							params={'text-grey'}
							text={
								'Ростов-на-Дону, микрорайон Сельмаш, Металлургическая улица, 102/2'
							}
						/>
					</div>
				</WrapperBlocks>
				{/*Блок О компании*/}
				<WrapperBlocks params={'bg-white justify-between'}>
					<div className={'flex flex-row items-center gap-2 xl:gap-6'}>
						<a
							className={
								'flex items-center justify-center rounded-[10px] bg-light px-2 py-1 text-xl font-semibold leading-7 tracking-tight text-orange'
							}
						>
							<Title color={'text-orange'} text={'05'} />
						</a>
						<Title text={'Приоритеты Компании'} color={'text-dark'}></Title>
					</div>
					<Image
						src={aboutImg}
						alt="aboutImg"
						className="min-[480px]: self-center py-[31px] min-[400px]:py-20 min-[484px]:py-[31px]"
					/>
					<div className={'flex flex-col gap-y-2 sm:gap-y-5'}>
						<div className={'h-px w-full bg-grey'} />
						<Text
							params={'text-grey'}
							text={'Ознакомление с основными подходами компании к работе.'}
						/>
					</div>
				</WrapperBlocks>
			</div>
		</section>
	);
}

export default Content;
