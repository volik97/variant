'use client';
import React, { useEffect, useId, useRef, useState } from 'react';
import Title from '@/app/components/ui/Text/Title';
import Text from '@/app/components/ui/Text/Text';
import WrapperBlocks from '@/app/components/wrappers/wrapperBlocks';
import { string } from 'prop-types';

function TestCard({
	userQuestion,
	task,
	img,
	taskDescription,
	variants,
	id,
	index,
	handleNextQuestion,
}: {
	index: number;
	id: string;
	userQuestion: { id: string; value: string }[] | [];
	task: string;
	img?: string;
	variants?: { id: string; value: string }[];
	taskDescription?: string;
	handleNextQuestion: (a: number) => void;
}) {
	const [checkedItem, setCheckedItem] = useState<string>('');
	useEffect(() => {
		setCheckedItem('');
	}, [task]);
	const question = { id: id, value: '' };
	return (
		<>
			<WrapperBlocks params={'bg-white row-span-2 justify-between'}>
				<div className={'flex flex-row items-start gap-2 xl:gap-6'}>
					<a
						className={
							'flex items-center justify-center rounded-[10px] bg-light px-2 py-1 text-xl font-semibold leading-7 tracking-tight text-orange'
						}
					>
						<Title
							color={'text-orange font-bold font-poppins'}
							text={'0' + (index + 1)}
						/>
					</a>
					<div className={'flex w-full flex-col gap-5'}>
						<Title
							text={task}
							color={'text-dark font-[700] pb-0.5 !max-w-full'}
						></Title>
						<Text
							params={'text-grey'}
							text={taskDescription ? taskDescription : ''}
						/>
						<figure className={'flex h-px w-full flex-col bg-dark'} />
						<div className={'flex max-w-[608px] flex-col gap-y-2  sm:gap-y-5'}>
							{variants &&
								variants.map((item: { id: string; value: string }) => (
									<div
										className={
											'parentCheckbox flex gap-4 rounded-[24px] bg-light p-5 transition-colors duration-500 hover:outline hover:outline-1 hover:outline-orange'
										}
										id={item.id}
										onClick={(e) => {
											item.id === checkedItem
												? setCheckedItem('')
												: setCheckedItem(e.currentTarget.id);
											question.value = item.value;
										}}
										key={useId()}
									>
										<input
											type={'checkbox'}
											checked={item.id === checkedItem}
											className={'custom-checkbox'}
										/>
										<label htmlFor={item.id}>{item.value}</label>
									</div>
								))}
						</div>
					</div>
				</div>
			</WrapperBlocks>
			<div className={'mt-[40px] flex w-full justify-center'}>
				<button
					onClick={() => {
						handleNextQuestion(++index);
					}}
					className={`w-full max-w-[280px] rounded-[14px] bg-orange px-6 py-3.5 text-[20px] font-semibold tracking-wider text-white hover:bg-[#de4b2a]`}
				>
					Продолжить
				</button>
			</div>
		</>
	);
}

export default TestCard;
