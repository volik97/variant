'use client';
import React from 'react';
import { v4 } from 'uuid';
import LinkButton from '@/app/components/ui/Header/LinkButton';

const links = [
	{ href: '/internship', name: 'Стажировка' },
	{ href: '/career', name: 'Варианты направлений' },
	{ href: '/test', name: 'Тестирование' },
	{ href: '/about', name: 'Приоритеты компании' },
];

function Navigation({
	navIsOpen,
	className,
}: {
	navIsOpen?: (open: boolean) => void;
	className?: string;
}) {
	return (
		<ul className={className}>
			{links.map((link) => (
				<li
					className={'h-4 sm:h-fit'}
					key={v4()}
					onClick={() => navIsOpen && navIsOpen(false)}
				>
					<LinkButton onClose={navIsOpen} href={link.href} name={link.name} />
				</li>
			))}
		</ul>
	);
}

export default Navigation;
