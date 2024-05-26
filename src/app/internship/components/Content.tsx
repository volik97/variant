'use client';
import Title from '@/app/components/ui/Text/Title';
import Image from 'next/image';
import studentImg from '@/app/internship/img/student.svg';
import Text from '@/app/components/ui/Text/Text';
import WrapperBlocks from '@/app/components/wrappers/wrapperBlocks';
import React, { useState } from 'react';
import stars from '../img/stars.png';
import varianImage from '../img/variantimg.png';
import testing from '../../img/content/testing.svg';
import testing_big from '../img/testing_big.png';
import airplan from '../img/airplan.png';
import notebook from '../img/notebook.png';
import arrow from '../img/arrow.png';
import table from '../img/table.png';
import calendar from '../img/calendar.png';
import portfel from '../img/portfel.png';
import Accordion from '@/app/internship/components/ui/Accordion';
import Form from '@/app/components/widgets/Form';
export default function Content() {
	const [accordion, setAccordion] = useState<string | null>(null);
	const dataFAQ = [
		{
			id: '1',
			head: 'Имеет ли смысл начинать стажировку, если я еще учусь в ВУЗе?',
			body: 'Данная программа рассчитана именно на студентов, и предполагает сотрудничество с соискателем в период его обучения (в т.ч. работа после стажировки по согласованному графику, предусматривающему посещения занятий). Такое совмещение потребует определенных усилий от соискателя, но повысит его ценность как специалиста после окончания учебы.',
		},
		{
			id: '2',
			head: 'Можно ли подать заявку, если я уже окончил обучение несколько месяцев назад?',
			body: 'Да, никаких препятствий в этом случае нет.',
		},
		{
			id: '3',
			head: 'Если я имею опыт работы по профессии, можно ли мне предложить свою кандидатуру без стажировки?',
			body: 'Данный сайт и программа стажировки предназначены для молодых  специалистов, начинающих карьеру.  Информация о вакансиях для специалистов с опытом работы размещается на ресурсе hh в соответствии с потребностью. ',
		},
		{
			id: '4',
			head: 'Что нужно написать в сопроводительном письме?',
			body: 'В сопроводительном письме можно любую информацию, которую соискатель считает нужным сообщить о себе. Следует указывать свои сильные стороны и навыки (в т.ч. навыки работы в специализированном ПО). Также можно указывать опыт работы (не обязательно по специальности). ',
		},
		{
			id: '5',
			head: 'Могу ли подать заявления на неограниченное количество вакансий на стажировку?',
			body: 'Подавать более одной заявки нет смысла, т.к. выбор направления как правило происходит после завершения стажировки, а сама программа не имеет направленности, являясь универсальной вводной программой.',
		},
		{
			id: '6',
			head: 'Сколько времени займет получение ответа?',
			body: 'Ответ направляется соискателю в течении 3 рабочих дней. Вместе с тем начало стажировки может быть определено на более поздний срок (в зависимости от комплектации групп).',
		},
		{
			id: '7',
			head: 'Сколько времени займет стажировка?',
			body: 'Программа стажировки рассчитана на средний уровень навыков стажера и предусматривает выполнение стажировочных заданий в течении 1 месяца. Данный срок может быть незначительно уменьшен либо увеличен в зависимости от эффективности выполнения заданий.',
		},
		{
			id: '8',
			head: 'Что будет входить в программу стажировки?',
			body: 'В программу стажировки будет входить выполнение ряда заданий в программе Autocad. Задания предусматривают обязательное получения навыков, необходимых для начала работы в команде. Задания максимально приближены по своему наполнению к реальной будущей работе соискателя, что также дает возможность дать оценку о перспективах сотрудничества сторонам.',
		},
	];
	return (
		<section className={'flex flex-col gap-4 font-poppins xl:gap-10'}>
			<div
				className={
					'grid h-full grid-cols-1 gap-4 min-[484px]:grid-cols-2 min-[484px]:grid-rows-2 sm:h-[600px] md:h-[800px] lg:h-[900px] xl:h-[1024px] xl:gap-10'
				}
			>
				<WrapperBlocks
					params={
						'bg-orange row-span-2 min-h-[420px] min-[484px]:h-full relative h-full justify-between overflow-clip'
					}
				>
					<div className={'z-10 flex flex-row items-center gap-2 xl:gap-6'}>
						<Title text={'Кому подойдет?'} color={'text-white'}></Title>
					</div>
					<Image
						src={studentImg}
						alt={'studentImg'}
						className={
							'absolute -bottom-10 right-4 w-[251px] max-w-[582px] object-center min-[484px]:right-0 min-[484px]:w-full 2xl:right-16'
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
									'Мы проводим отбор кандидатов через внутреннее тестирование на сайте. Эта отличная возможность для проверки и подтверждеия своих навыков.'
								}
							/>
						</div>
					</div>
				</WrapperBlocks>
				{/*Блок Цели*/}
				<WrapperBlocks
					params={
						'relative bg-white row-span-1 min-h-[216px] justify-between gap-10'
					}
				>
					<div className={'flex flex-row items-start gap-2 sm:gap-6'}>
						<Title text={'Цели'} color={'text-dark self-center'}></Title>
					</div>
					<div className={'flex w-full flex-col gap-y-2 sm:gap-y-5'}>
						<div className={'h-px w-full bg-grey'} />
						<Text
							params={'text-grey'}
							text={
								'Получение практического опыта и развитие профессиональных навыков для студентов.'
							}
						/>
					</div>
					<Image
						src={stars}
						alt={'stars'}
						className={
							'absolute right-10 top-5 w-1/4 max-w-[229px] md:right-[60px] md:w-1/3'
						}
					/>
				</WrapperBlocks>
				<div
					className={
						'relative h-[216px] overflow-clip sm:h-full md:rounded-[40px]'
					}
				>
					<Image
						src={varianImage}
						alt={''}
						className={'h-full w-full rounded-[18px] object-cover'}
					/>
					<div
						className={
							'absolute top-2 !z-50 h-fit w-full px-4 py-3 md:left-2 md:top-6 lg:left-6 lg:top-14'
						}
					>
						<a
							className={
								'rounded-[40px] border border-white bg-white/20 px-4 py-2 text-xs text-white md:text-2xl lg:px-5 lg:text-[36px]'
							}
						>
							Вариант
						</a>
					</div>
				</div>
			</div>
			<div>
				<WrapperBlocks
					params={'bg-dark row-span-1 min-h-[216px] justify-between gap-10'}
				>
					<Title color={'text-white'} text={'Как проходит отбор'} />
					<div
						className={
							'flex w-full flex-col gap-2 sm:flex-row md:gap-6 xl:gap-10'
						}
					>
						<div
							className={
								'flex min-h-[124px] w-full flex-col justify-between rounded-[16px] bg-white p-3 md:h-[250px] md:p-5 xl:h-[348px] xl:rounded-[32px] xl:p-7'
							}
						>
							<div className={'flex justify-between'}>
								<a
									className={
										'flex h-fit w-fit items-center justify-center rounded-[10px] bg-light px-2 py-1.5 text-xl font-semibold leading-7 tracking-tight text-orange'
									}
								>
									<Title color={'text-orange'} text={'01'} />
								</a>
								<Image
									src={testing}
									alt={'test'}
									className={'w-1/4 max-w-[100px] md:w-1/2 xl:max-w-[141px]'}
								/>
							</div>
							<a
								className={
									'flex flex-col text-[18px] font-semibold leading-6 tracking-[0.02em] text-dark  lg:text-[24px] lg:leading-7 lg:tracking-[0.02em] 2xl:text-[38px] 2xl:leading-[3.125rem]'
								}
							>
								{'Оцени свой'}
								<br />
								{'уровень навыков'}
							</a>
						</div>
						<div
							className={
								'flex min-h-[124px] w-full flex-col justify-between rounded-[16px] bg-white p-3 md:h-[250px] md:p-5 xl:h-[348px] xl:rounded-[32px] xl:p-7'
							}
						>
							<div className={'flex justify-between'}>
								<a
									className={
										'flex h-fit w-fit items-center justify-center rounded-[10px] bg-light px-2 py-1.5 text-xl font-semibold leading-7 tracking-tight text-orange'
									}
								>
									<Title color={'text-orange'} text={'02'} />
								</a>
								<Image
									src={airplan}
									alt={'test'}
									className={'w-1/4 max-w-[100px] md:w-1/2 xl:max-w-[141px]'}
								/>
							</div>
							<a
								className={
									'flex flex-col text-[18px] font-semibold leading-6 tracking-[0.02em] text-dark lg:max-w-[100px]  lg:text-[24px] lg:leading-7 lg:tracking-[0.02em] 2xl:text-[38px] 2xl:leading-[3.125rem]'
								}
							>
								{'Отправь заявку'}
							</a>
						</div>
						<div
							className={
								'flex min-h-[124px] w-full flex-col justify-between rounded-[16px] bg-white p-3 md:h-[250px] md:p-5 xl:h-[348px] xl:rounded-[32px] xl:p-7'
							}
						>
							<div className={'flex justify-between'}>
								<a
									className={
										'flex h-fit w-fit items-center justify-center rounded-[10px] bg-light px-2 py-1.5 text-xl font-semibold leading-7 tracking-tight text-orange'
									}
								>
									<Title color={'text-orange'} text={'03'} />
								</a>
								<Image
									src={notebook}
									alt={'test'}
									className={'w-1/4 max-w-[100px] md:w-1/2 xl:max-w-[141px]'}
								/>
							</div>
							<a
								className={
									'flex flex-col text-[18px] font-semibold leading-6 tracking-[0.02em] text-dark lg:max-w-[100px] lg:text-[24px] lg:leading-7 lg:tracking-[0.02em] 2xl:text-[38px] 2xl:leading-[3.125rem]'
								}
							>
								{'Начни обучение'}
							</a>
						</div>
					</div>
				</WrapperBlocks>
			</div>
			<div className={'grid grid-cols-1 gap-4 sm:grid-cols-2'}>
				<WrapperBlocks
					params={
						'bg-orange relative row-span-1 justify-between overflow-clip gap-10 !flex !flex-row sm:h-[216px] md:h-[224px] lg:min-h-[428px] xl:h-[507px] 2xl:h-[528px] sm:sticky sm:top-4'
					}
				>
					<Title
						color={'text-white w-[180px] lg:w-full'}
						text={'Условия стажировки'}
					/>
					<Image
						src={arrow}
						alt={'arrow'}
						className={
							'w-[62px] rotate-90 sm:absolute sm:bottom-0 sm:left-10 sm:w-[140px] sm:rotate-0 lg:w-[55%] lg:max-w-[495px]'
						}
					/>
				</WrapperBlocks>
				<div className={'flex flex-col gap-4'}>
					<div
						className={
							'flex min-h-[216px] flex-col justify-between rounded-[18px] bg-white p-4 sm:p-5 md:min-h-[200px] lg:min-h-[300px] lg:gap-10 lg:p-9 xl:rounded-[32px] xl:px-[60px] xl:py-10 2xl:min-h-[528px]'
						}
					>
						<a
							className={
								'flex flex-col text-[18px] font-semibold leading-7 tracking-wide sm:text-[24px] sm:leading-[28px] md:text-[26px] md:leading-[32px] lg:text-[32px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[40px] 2xl:leading-[50px]'
							}
						>
							{'Обучение в офисе организации'}
						</a>
						<Image
							src={table}
							alt={'table'}
							className={
								'max-w-[120px] self-center lg:h-fit lg:max-w-[300px] xl:w-full'
							}
						/>
					</div>
					<div
						className={
							'flex min-h-[216px] flex-col justify-between rounded-[18px] bg-white p-4 sm:p-5 md:min-h-[200px] lg:min-h-[300px] lg:gap-10 lg:p-9 xl:rounded-[32px] xl:px-[60px] xl:py-10 2xl:min-h-[528px]'
						}
					>
						<a
							className={
								'flex flex-col text-[18px] font-semibold leading-7 tracking-wide sm:text-[24px] sm:leading-[28px] md:text-[26px] md:leading-[32px] lg:text-[32px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[40px] 2xl:leading-[50px]'
							}
						>
							{'Гибкий график обучения'}
						</a>
						<Image
							src={calendar}
							alt={'calendar'}
							className={
								'max-w-[120px] self-center lg:h-fit lg:max-w-[300px] xl:w-full'
							}
						/>
					</div>
					<div
						className={
							'flex min-h-[216px] flex-col justify-between rounded-[18px] bg-white p-4 sm:p-5 md:min-h-[200px] lg:min-h-[300px] lg:gap-10 lg:p-9 xl:rounded-[32px] xl:px-[60px] xl:py-10 2xl:min-h-[528px]'
						}
					>
						<a
							className={
								'flex flex-col text-[18px] font-semibold leading-7 tracking-wide sm:text-[24px] sm:leading-[28px] md:text-[26px] md:leading-[32px] lg:text-[32px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[40px] 2xl:leading-[50px]'
							}
						>
							{
								'Трудоустройство в организацию после успешного прохождения стажировки'
							}
						</a>
						<Image
							src={portfel}
							alt={'portfel'}
							className={
								'max-w-[120px] self-center lg:h-fit lg:max-w-[300px] xl:w-full'
							}
						/>
					</div>
				</div>
			</div>
			{/*TODO: Block for slider/ coming soon*/}
			{/*FAQ BLOCK*/}
			<div className={'grid grid-cols-1 gap-4 sm:grid-cols-12'}>
				<Title
					color={'text-dark sm:col-span-5'}
					text={'Часто задаваемые вопросы'}
				/>
				<div className={'flex flex-col gap-4 sm:col-span-7 sm:col-start-6'}>
					{dataFAQ.map(({ id, head, body }, i) => (
						<Accordion
							key={id}
							head={head}
							body={body}
							id={id}
							accordion={accordion}
							setAccordion={setAccordion}
						/>
					))}
				</div>
			</div>
			{/*Form*/}
			<WrapperBlocks params={'bg-orange'}>
				<div className={'md:hidden'}>
					<Form />
				</div>
				<div className={'relative hidden grid-cols-12 md:grid'}>
					<div
						className={'col-span-5 flex flex-col items-start justify-between'}
					>
						<Title color={'text-white'} text={'Стань частью команды'} />
						<Image
							src={testing_big}
							alt={'test'}
							className={'pr-20 xl:pr-40'}
						/>
					</div>
					<div className={'col-span-7 col-start-6'}>
						<Form />
					</div>
				</div>
			</WrapperBlocks>
		</section>
	);
}
