import React from 'react';

function Title({
	color,
	size2XL,
	text,
	variant,
	v,
}: {
	color: string;
	size2XL?: boolean;
	text: string;
	variant?: boolean;
	v?: boolean;
}) {
	return (
		<h1
			className={`${color} ${
				size2XL
					? 'text-2xl sm:text-5xl sm:leading-[4.275rem] sm:tracking-[.01em] lg:text-6xl lg:leading-[4.275rem] lg:tracking-[.01em]'
					: 'text-xl sm:text-3xl sm:leading-[2.675rem] sm:tracking-[.01em]  lg:text-4xl lg:leading-[2.675rem] lg:tracking-[.01em] xl:text-5xl'
			} flex max-w-[773px] flex-col font-semibold leading-[1,95rem] tracking-[.02em]`}
		>
			<>
				{text}
				{variant && (
					<p className={'flex flex-row'}>
						{v && <a>в</a>}
						<a className={'pl-1.5 text-orange sm:pl-2.5'}>Вариант</a>
					</p>
				)}
			</>
		</h1>
	);
}

export default Title;
