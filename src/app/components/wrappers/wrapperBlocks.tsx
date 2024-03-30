import React from 'react';

function WrapperBlocks({
	children,
	params,
}: {
	children: React.ReactNode;
	params: string;
}) {
	return (
		<div
			className={`px-4 py-6 ${params} flex flex-col rounded-[20px] lg:rounded-[40px] lg:p-[60px]`}
		>
			{children}
		</div>
	);
}

export default WrapperBlocks;
