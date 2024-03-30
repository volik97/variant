import React from 'react';

function Text({ text, params }: { text: string; params?: string }) {
	return (
		<a
			className={`${params} font-poppins text-xs leading-[1.2rem] tracking-[.02em] sm:text-lg xl:text-2xl xl:leading-[2.6rem]`}
		>
			{text}
		</a>
	);
}

export default Text;
