import React from 'react';
import Link from 'next/link';

function ModalSuccessSendForm({ onClose }: { onClose: (a: boolean) => void }) {
	return (
		<div
			className={
				'fixed top-0 z-[9999] flex h-screen w-screen items-center justify-center bg-light/30 px-8 backdrop-blur-[2px]'
			}
			onClick={() => onClose(false)}
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className={
					'flex max-w-[855px] flex-col gap-6 rounded-[16px] border border-light bg-white px-3 py-4 sm:gap-8 sm:p-5 md:gap-9 lg:gap-10 lg:p-9 2xl:rounded-[32px] 2xl:px-[60px] 2xl:py-10'
				}
			>
				<div className={'flex justify-between'}>
					<div
						className={'flex flex-col gap-y-4 sm:gap-y-5 md:gap-y-7 lg:gap-y-6'}
					>
						<a
							className={
								'flex flex-col text-[18px] font-semibold leading-7 tracking-wide text-dark sm:text-[24px] sm:leading-[28px] md:text-[26px] md:leading-[32px] lg:text-[32px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[40px] 2xl:leading-[50px]'
							}
						>
							{'Заявка отправлена'}
						</a>
						<span
							className={
								'text-xs text-grey sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'
							}
						>
							{`Заявка успешно отправлена. Пройдите тестирование, для дальнейшего продвижения.`}
						</span>
					</div>
					<svg
						onClick={() => onClose(false)}
						className={'h-fit w-10 cursor-pointer lg:w-fit'}
						width="58"
						height="54"
						viewBox="0 0 58 54"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect width="57.5425" height="54" rx="16" fill="#F1F6F9" />
						<path
							d="M18.3797 37.3798L39.1631 16.6207M18.3919 16.6085L39.151 37.3919"
							stroke="#F25430"
							strokeWidth="3"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
				<Link
					href={'/test'}
					className={
						'flex w-full items-center justify-center rounded-[14px] bg-orange px-4 py-2 text-sm font-semibold tracking-wider text-white hover:bg-[#de4b2a] md:px-6 md:py-3.5 md:text-[20px]'
					}
				>
					{'Пройти тестирование'}
				</Link>
			</div>
		</div>
	);
}

export default ModalSuccessSendForm;
