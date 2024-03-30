import React from 'react';
import Link from 'next/link';

function Logo() {
	return (
		<Link
			href="/"
			className={
				'flex flex-row gap-1 whitespace-nowrap text-xl font-extrabold leading-7 tracking-[.02em] text-orange'
			}
		>
			<p className={'hidden sm:block'}>ООО Фирма</p> Вариант
		</Link>
	);
}
//тег а временно приколхожен
export default Logo;
