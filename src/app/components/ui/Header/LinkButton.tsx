import React from 'react';
import Link from 'next/link';

function LinkButton({ href, name }: { href: string; name: string }) {
	return (
		<Link
			className={
				'text-xl leading-7 tracking-[.02em] text-light duration-100 hover:cursor-pointer hover:text-orange active:text-orange'
			}
			href={href}
		>
			{name}
		</Link>
	);
}

export default LinkButton;
