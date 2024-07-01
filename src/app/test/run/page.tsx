'use client';
import React, { useState } from 'react';
import Title from '@/app/components/ui/Text/Title';
import Link from 'next/link';
import WrapperBlocks from '@/app/components/wrappers/wrapperBlocks';
import Image from 'next/image';
import timer from '../../img/timer.png';
import TestCard from '@/app/test/run/components/TestCard';
import Timer from '@/app/test/run/components/Timer';
import { PropagateLoader } from 'react-spinners';
function Page() {
	let [currentQuestion, setCurrentQuestion] = useState(0);
	const testQue = [
		{
			id: '0',
			task: 'Какое число получится, если перемножить все цифры на цифровой клавиатуре телефона?',
			taskDescription: 'taskDescription',
			variants: [
				{ id: '1', value: '1' },
				{ id: '2', value: '2' },
				{ id: '3', value: '3' },
				{ id: '4', value: '4' },
			],
			question: '1',
		},
		{
			id: '1',
			task: 'Вопрос',
			taskDescription: 'taskDescription',
			variants: [
				{ id: '1', value: '1' },
				{ id: '2', value: '2' },
				{ id: '3', value: '3' },
				{ id: '4', value: '4' },
			],
			question: '1',
		},
	];
	const userQuestion: { id: string; value: string }[] | [] = [];
	return (
		<main className="flex w-full justify-center px-2 pt-[68px] sm:pt-[96px] lg:px-12 lg:pt-[108px] 2xl:px-20">
			<section className={'w-full max-w-[1568px] space-y-4 xl:space-y-10'}>
				<WrapperBlocks params={'bg-orange flex flex-col gap-6 justify-between'}>
					<Title
						size2XL
						color={'text-white !font-[600] !max-w-full'}
						text={'Проверка навыков для стажера'}
					/>
					<figure className={'h-px w-full bg-white'} />
					<div className={'flex w-full items-center justify-between'}>
						<h3
							className={
								'font-poppins text-lg !font-[600] tracking-widest text-white sm:text-xl lg:text-2xl xl:text-[40px]'
							}
						>{`Вопрос: ${currentQuestion + 1}/30`}</h3>
						<div
							className={
								'flex w-[150px] items-center gap-4 rounded-[40px] border border-white bg-white/20 px-4 py-2 xl:w-[250px] xl:px-5'
							}
						>
							<Image src={timer} alt={'timer'} className={'w-6 xl:w-[59px]'} />
							<Timer minutes={30} />
						</div>
					</div>
				</WrapperBlocks>
				<div>
					<TestCard
						index={currentQuestion}
						id={testQue[currentQuestion].id}
						userQuestion={userQuestion}
						task={testQue[currentQuestion].task}
						taskDescription={testQue[currentQuestion].taskDescription}
						variants={testQue[currentQuestion].variants}
						handleNextQuestion={setCurrentQuestion}
					/>
				</div>
			</section>
		</main>
	);
}

export default Page;
