import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/app/components/layout/Footer';
import Header from '@/app/components/layout/Header';
import React from 'react';
import localFont from 'next/font/local';

const poppins = localFont({
	src: [
		{
			path: '../../public/fonts/Poppins-Thin.ttf',
			weight: '100',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Poppins-Light.ttf',
			weight: '200',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Poppins-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Poppins-Medium.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Poppins-SemiBold.ttf',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Poppins-Bold.ttf',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Poppins-ExtraBold.ttf',
			weight: '800',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Poppins-Black.ttf',
			weight: '900',
			style: 'normal',
		},
	],
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: '',
	description: '',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={poppins.variable}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
