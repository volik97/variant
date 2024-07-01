'use client';
import React from 'react';
const Timer = ({
	hours = 0,
	minutes = 0,
	seconds = 0,
}: {
	hours?: number;
	minutes?: number;
	seconds?: number;
}) => {
	const [paused, setPaused] = React.useState(false);
	const [over, setOver] = React.useState(false);
	const [[h, m, s], setTime] = React.useState([hours, minutes, seconds]);

	const tick = () => {
		if (paused || over) return;

		if (h === 0 && m === 0 && s === 0) {
			setOver(true);
		} else if (m === 0 && s === 0) {
			setTime([h - 1, 59, 59]);
		} else if (s == 0) {
			setTime([h, m - 1, 59]);
		} else {
			setTime([h, m, s - 1]);
		}
	};

	const reset = () => {
		setTime([hours, minutes, seconds]);
		setPaused(false);
		setOver(false);
	};

	React.useEffect(() => {
		const timerID = setInterval(() => tick(), 1000);
		return () => clearInterval(timerID);
	});

	return (
		<div>
			<p
				className={
					'font-poppins text-lg !font-[600] tracking-widest text-white sm:text-xl lg:text-2xl xl:text-[40px]'
				}
			>{`${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p>
			<div>{over ? "Time's up!" : ''}</div>
		</div>
	);
};

export default Timer;
