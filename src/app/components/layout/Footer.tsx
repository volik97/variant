import React from 'react';

function Footer() {
	return (
		<footer
			className={
				'flex w-full flex-row items-center justify-center px-2 pb-1 pt-4 lg:px-12 lg:pb-5 xl:pt-10 2xl:px-20'
			}
		>
			<div
				className={
					'flex w-full max-w-[1568px] flex-col items-center justify-between rounded-[12px] bg-dark px-3 py-2 sm:rounded-[20px] sm:p-5'
				}
			></div>
		</footer>
	);
}

export default Footer;
