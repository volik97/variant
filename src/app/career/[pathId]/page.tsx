'use client';
import React, { useEffect, useState } from 'react';
import WrapperBlocks from '@/app/components/wrappers/wrapperBlocks';
import Title from '@/app/components/ui/Text/Title';
import { data } from '@/app/career/[pathId]/data/data';
import Image from 'next/image';
import testingImg from '@/app/img/content/testing.svg';
import Text from '@/app/components/ui/Text/Text';
import Link from 'next/link';
import { createPortal } from 'react-dom';
import Form from '@/app/components/widgets/Form';
import ModalSuccessSendForm from '@/app/components/widgets/ModalSuccessSendForm';
function CareerDetail({ params }: { params: { pathId: string } }) {
	const [openModal, setOpenModal] = useState(false);
	const [modalFormSend, setModalFormSend] = useState(false);

	const foundId = +params.pathId;
	const currentPath = data.find((item) => item.id === foundId);
	return (
		<main
			className={`flex w-full justify-center px-2 pt-[68px] font-poppins sm:pt-[96px] lg:px-12 lg:pt-[108px] 2xl:px-20`}
		>
			<section
				className={`mt-2 space-y-4 xl:space-y-10 ${openModal ? 'fixed z-50 bg-light px-12' : ''}`}
			>
				<div className={'flex flex-row items-center justify-start gap-2'}>
					<svg
						className={'inline'}
						width="33"
						height="34"
						viewBox="0 0 33 34"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M21.6562 27.3125L11.3438 17L21.6562 6.6875"
							stroke="#F25430"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>

					<Link
						href={'/career'}
						className={'pt-0.5 text-xl font-[400] text-orange'}
					>
						{'Вернуться к списку направлений'}
					</Link>
				</div>
				<div
					className={
						'grid w-full max-w-[1568px] grid-cols-1 gap-4 md:grid-cols-2 xl:gap-10'
					}
				>
					<WrapperBlocks
						params={
							'bg-orange lg:!p-10 xl:!px-[60px] xl:!pb-[60px] min-h-[312px] md:top-10 md:sticky md:!h-[600px] xl:min-h-[834px] justify-between'
						}
					>
						<Title
							text={
								currentPath?.title
									? currentPath?.title
									: 'Отсутствует заголовок'
							}
							color={'text-white xl:!leading-[1.2em]'}
						/>
						<div className={'flex gap-1 sm:gap-2'}>
							{currentPath?.labels.map((label, index) => (
								<span
									key={index}
									className={
										'flex w-fit items-center justify-center rounded-[16px] bg-light px-2 py-1 text-xs text-grey sm:px-3 sm:text-lg lg:text-xl xl:rounded-[40px] xl:px-5 xl:py-2 xl:text-2xl 2xl:text-3xl'
									}
								>
									{label}
								</span>
							))}
						</div>
					</WrapperBlocks>
					<div className={'!m-0 flex flex-col gap-4 xl:gap-10'}>
						<WrapperBlocks
							params={
								'bg-white lg:!p-10 gap-4 md:gap-10 xl:gap-[60px] justify-between'
							}
						>
							<div className={'flex flex-row items-center gap-2 xl:gap-6'}>
								<a
									className={
										'flex items-center justify-center rounded-[10px] bg-light px-2 py-1 text-xl font-semibold leading-7 tracking-tight text-orange lg:rounded-[20px] lg:px-4 lg:py-3'
									}
								>
									<Title color={'text-orange'} text={'01'} />
								</a>
								<Title text={'Описание'} color={'text-dark pt-0.5'}></Title>
							</div>
							<div className={'inline'}>
								<Text
									params={'text-dark font-bold'}
									text={
										currentPath?.title ? currentPath?.title : 'Описания нет'
									}
								/>
								<Text
									params={'text-grey'}
									text={
										currentPath?.description
											? currentPath?.description
											: 'Описания нет'
									}
								/>
							</div>
						</WrapperBlocks>
						<WrapperBlocks
							params={
								'bg-white lg:!p-10 gap-4 md:gap-10 xl:gap-[60px] justify-between'
							}
						>
							<div className={'flex flex-row items-center gap-2 xl:gap-6'}>
								<a
									className={
										'flex items-center justify-center rounded-[10px] bg-light px-2 py-1 text-xl font-semibold leading-7 tracking-tight text-orange lg:rounded-[20px] lg:px-4 lg:py-3'
									}
								>
									<Title color={'text-orange'} text={'02'} />
								</a>
								<Title text={'Требования'} color={'text-dark pt-0.5'}></Title>
							</div>
							<div className={'flex flex-col gap-y-2 sm:gap-y-5'}>
								<Text
									params={'text-grey'}
									text={
										currentPath?.requirements
											? currentPath?.requirements
											: 'Требований нет'
									}
								/>
							</div>
						</WrapperBlocks>
						<WrapperBlocks
							params={
								'bg-white lg:!p-10 gap-4 md:gap-10 xl:gap-[60px] justify-between'
							}
						>
							<div className={'flex flex-row items-center gap-2 xl:gap-6'}>
								<a
									className={
										'flex items-center justify-center rounded-[10px] bg-light px-2 py-1 text-xl font-semibold leading-7 tracking-tight text-orange lg:rounded-[20px] lg:px-4 lg:py-3'
									}
								>
									<Title color={'text-orange'} text={'03'} />
								</a>
								<Title
									text={'Что мы предлагаем'}
									color={'text-dark pt-0.5'}
								></Title>
							</div>
							<div className={'flex flex-col gap-y-2 sm:gap-y-5'}>
								<Text
									params={'text-grey'}
									text={
										currentPath?.plushki
											? currentPath?.plushki
											: 'Ничего не прделагаем'
									}
								/>
							</div>
						</WrapperBlocks>
						<button
							className={
								'h-fit w-full rounded-[14px] bg-orange px-6 py-3.5 text-[20px] font-semibold tracking-wider text-white hover:bg-orange/90'
							}
							onClick={() => setOpenModal(true)}
						>
							{'Откликнуться'}
						</button>
					</div>
				</div>
			</section>
			{openModal &&
				createPortal(
					<div
						className={
							'fixed top-0 z-50 h-screen w-screen bg-light/30 backdrop-blur-[2px]'
						}
						onClick={() => setOpenModal(false)}
					>
						<div
							onClick={(e) => e.stopPropagation()}
							className={
								' relative mx-auto flex h-screen w-full justify-center px-2 py-2 sm:px-4 sm:py-3 md:w-3/4'
							}
						>
							<Form
								isModal
								onClose={setOpenModal}
								onCloseOnPageCareer={setModalFormSend}
							/>
						</div>
					</div>,
					document.body
				)}
			{modalFormSend &&
				createPortal(
					<ModalSuccessSendForm onClose={setModalFormSend} />,
					document.body
				)}
		</main>
	);
}

export default CareerDetail;
