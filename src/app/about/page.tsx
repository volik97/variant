import React from 'react';
import Content from '@/app/about/components/Content';
import Hero from '@/app/about/components/Hero';

function Page() {
	return (
		<main className="flex w-full justify-center px-2 pt-[68px] sm:pt-[96px] lg:px-12 lg:pt-[108px] 2xl:px-20">
			<section className={'w-full max-w-[1568px] space-y-4 xl:space-y-10'}>
				<Hero />
				<Content />
			</section>
		</main>
	);
}

export default Page;
