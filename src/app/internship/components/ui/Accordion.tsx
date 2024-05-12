import React from 'react';

function Accordion({
	accordion,
	setAccordion,
	id,
	head,
	body,
}: {
	head: string;
	body: string;
	id: string;
	accordion: string | null;
	setAccordion: (a: string | null) => void;
}) {
	return (
		<div
			id={'1'}
			className={`flex cursor-pointer flex-col overflow-hidden rounded-[16px] bg-white px-3 py-4 sm:p-5 lg:p-9 2xl:rounded-[32px] 2xl:px-[60px] 2xl:py-10`}
		>
			<div
				onClick={() => {
					if (accordion === id) {
						setAccordion(null);
					} else setAccordion(id);
				}}
				className={'flex gap-3 text-lg'}
			>
				<a
					className={
						'flex flex-col text-[18px] font-semibold leading-7 tracking-wide text-dark sm:text-[24px] sm:leading-[28px] md:text-[26px] md:leading-[32px] lg:text-[32px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[40px] 2xl:leading-[50px]'
					}
				>
					{head}
				</a>
				<a
					className={
						'flex h-10 w-10 items-center justify-center self-center rounded-[10px] bg-light px-2 py-1.5 text-xl font-semibold leading-7 tracking-tight text-orange sm:h-fit sm:w-fit'
					}
				>
					<svg
						className={`${accordion === id && 'rotate-45'} transition duration-500`}
						width="34"
						height="34"
						viewBox="0 0 34 34"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M17 2.3125V31.6875M31.6875 17H2.3125"
							stroke="#F25430"
							strokeWidth="3"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</a>
			</div>
			<div
				onClick={() => setAccordion(null)}
				className={`font-regular top-0 flex overflow-hidden text-sm text-[#435362] transition-all duration-500 lg:text-lg ${accordion === id ? `custom-bounce max-h-[280px] pt-4 opacity-100 sm:max-h-[280px] sm:pt-5 lg:max-h-[300px]` : 'max-h-0 opacity-0'}`}
			>
				{body}
			</div>
		</div>
	);
}

export default Accordion;
