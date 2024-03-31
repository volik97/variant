import Hero from '@/app/internship/components/Hero';
import Content from '@/app/internship/components/Content';

export default function Internship() {
	return (
		<main className="flex w-full justify-center px-2 pt-[68px] sm:pt-[96px] lg:px-12 lg:pt-[108px] 2xl:px-20">
			<section className={'w-full max-w-[1568px] space-y-4 xl:space-y-10'}>
				<Hero />
				<Content />
			</section>
		</main>
	);
}
