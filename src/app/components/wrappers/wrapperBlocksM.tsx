import React from 'react';

function WrapperBlocksM({
	children,
	params,
}: {
	children: React.ReactNode;
	params: string;
}) {
	return (
		<div
			className={`${params} flex flex-col rounded-[24px] px-4 py-6 lg:rounded-[60px] lg:px-[60px] lg:pb-10 lg:pt-20`}
		>
			{children}
		</div>
	);
}

export default WrapperBlocksM;
