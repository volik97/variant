import React from 'react';
import Title from '@/app/components/ui/Text/Title';
import Image from 'next/image';
import testingImg from '@/app/img/content/testing.svg';
import Text from '@/app/components/ui/Text/Text';
import WrapperBlocks from '@/app/components/wrappers/wrapperBlocks';

function Content() {
	return (
		<WrapperBlocks params={'bg-white row-span-2 justify-between'}>
			<div className={'flex flex-row items-center gap-2 xl:gap-6'}>
				<a
					className={
						'flex items-center justify-center rounded-[10px] bg-light px-2 py-1 text-xl font-semibold leading-7 tracking-tight text-orange'
					}
				>
					<Title color={'text-orange font-bold font-poppins'} text={'01'} />
				</a>
				<Title
					text={'Приоритеты компании'}
					color={'text-dark font-[700] pb-0.5'}
				></Title>
			</div>
			<div className={'flex flex-col gap-y-2 sm:gap-y-5'}>
				<div className={'mt-6 flex h-px w-full flex-col bg-dark md:mt-10'} />
				<Text
					params={'text-grey'}
					text={
						'Мы специализируемся на проектировании общественных зданий, как проектировании новых объектов, так и реконструкции существующих. Среди общего числа, основными являются образовательные учреждения, дошкольно-образовательные, учреждения здравоохранения и некоторые иные объекты, предназначенные для общественного пользования.'
					}
				/>
				<Text
					params={'text-grey'}
					text={
						'Своей основной задачей видим своевременное внедрение самых современных и эффективных решений в строительстве, реализацией которых можно будет гордиться. Современный дизайн интерьеров и экстерьеров зданий, их полное оснащение надежными и продвинутыми инженерными системами, применение долговечных материалов решений при проектировании – все это комплексный подход, который формирует принципиальное отличие наших объектов. Достижение таких параметров при проектировании и есть основной приоритет компании, который требует от специалистов как хорошей фундаментальной подготовки, так и необходимости освоения современных технологий автоматизации проектирования. Если Вас не пугает необходимость дополнить и восстановить знания полученные еще при обучении в школе, дополнить и восстановить знания, полученные в специализированном учреждении, и имеется уверенность в выборе профессии, то мы ждем Вас в нашей команде!'
					}
				/>
			</div>
		</WrapperBlocks>
	);
}

export default Content;
