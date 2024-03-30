import React from 'react';
import { v4 } from 'uuid';
import LinkButton from '@/app/components/ui/Header/LinkButton';

const links = [
	{ href: '/career', name: 'Вакансии' },
	{ href: '/intership', name: 'Стажировка' },
	{ href: '/testing', name: 'Тестирование' },
	{ href: '/about', name: 'О компании' },
];

function Navigation({ navIsOpen }: { navIsOpen?: (open: boolean) => void }) {
	return (
		<ul
			className={'flex flex-col items-center justify-center gap-8 lg:flex-row'}
		>
			{links.map((link) => (
				<li key={v4()} onClick={() => navIsOpen && navIsOpen(false)}>
					<LinkButton href={link.href} name={link.name} />
				</li>
			))}
		</ul>
	);
}

export default Navigation;
