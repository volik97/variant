import Hero from '@/app/components/layout/Main/Hero';
import Content from '@/app/components/layout/Main/Content';

export default function Home() {
	return (
		<main className="flex min-h-screen w-full justify-center px-2 pt-[68px] sm:pt-[96px] lg:px-12 lg:pt-[108px] 2xl:px-20">
			<section
				className={'min-h-screen w-full max-w-[1568px] space-y-4 xl:space-y-10'}
			>
				<Hero />
				<Content />
			</section>
		</main>
	);
}
