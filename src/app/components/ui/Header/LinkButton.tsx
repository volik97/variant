import React from 'react';
import Link from 'next/link';

function LinkButton({
	href,
	name,
	onClose,
}: {
	onClose?: (open: boolean) => void;
	href: string;
	name: string;
}) {
	return (
		<Link
			className={
				'text-xs leading-none tracking-[0.02em] text-light duration-100 hover:cursor-pointer hover:text-orange active:text-orange sm:text-xl'
			}
			onClick={() => onClose && onClose(false)}
			href={href}
		>
			{name}
		</Link>
	);
}

export default LinkButton;
