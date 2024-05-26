import React, { useRef, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ru } from 'date-fns/locale'; // Импортируем русскую локаль из date-fns
import { PatternFormat } from 'react-number-format';
import Select from 'react-select';
import { PropagateLoader } from 'react-spinners';
import { createPortal } from 'react-dom';
import ModalSuccessSendForm from '@/app/components/widgets/ModalSuccessSendForm';
import PropTypes from 'prop-types';
registerLocale('ru', ru);

function Form({ isModal, onClose, onCloseOnPageCareer }) {
	const [date, setDate] = useState();
	const [modalFormSend, setModalFormSend] = useState(false);
	const canSendForm = localStorage.getItem('canSendForm');
	const [messageCantSendForm, setMessageCantSendForm] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const errorMessageRef = useRef();
	const [dataForm, setDataForm] = useState({
		name: '',
		date: date,
		tel: '',
		email: '',
		vuz: '',
		course: '',
		education: '',
		formEducation: '',
		internship: '',
		mail: '',
	});
	const handleChange = (e) => {
		const { id, value } = e.target;
		setDataForm((prevState) => {
			return { ...prevState, [id]: value };
		});
	};
	const selectHandleChange = (e, type) => {
		if (type === 'education') {
			setDataForm((prevState) => {
				return { ...prevState, education: e };
			});
		}
		if (type === 'formEducation') {
			setDataForm((prevState) => {
				return { ...prevState, formEducation: e };
			});
		}
		if (type === 'internship') {
			setDataForm((prevState) => {
				return { ...prevState, internship: e };
			});
		}
	};
	const customStyles = {
		control: (provided, state) => ({
			...provided,
			fontFamily: 'var(--font-poppins)',
			border: '1px solid #F25430', // Red border
			borderRadius: '14px', // Rounded corners
			padding: '10px 24px', // Padding
			boxShadow: state.isFocused ? '0 0 0 1px #F25430' : null,
			'&:hover': {
				borderColor: '#F25430',
			},
		}),
		indicatorsContainer: () => ({
			cursor: 'pointer',
		}),
		valueContainer: (provided) => ({
			...provided,
			padding: '0px',
		}),
		placeholder: (provided) => ({
			...provided,
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			opacity: 0.5,
			color: '#A1A9B1', // Grey color
			fontSize: '1rem',
		}),
		singleValue: (provided) => ({
			...provided,
			color: '#2D3748', // Dark grey color
			fontSize: '1rem',
		}),
		dropdownIndicator: (provided) => ({
			...provided,
			color: '#f56565', // Red color
		}),
		menu: (provided) => ({
			...provided,
			zIndex: '9999',
			boxShadow: 'none',
			overflow: 'hidden',
			borderBottomRightRadius: '14px',
			borderTopRightRadius: '0px',
			borderTopLeftRadius: '0px',
			marginLeft: '-1px',
			width: 'calc(100% + 2px)',
			borderBottomLeftRadius: '14px',
			borderRadius: '0.5rem', // Rounded corners
			marginTop: '-14px',
			paddingTop: '20px',
			borderLeft: '2px solid #F25430',
			borderRight: '2px solid #F25430',
			borderBottom: '2px solid #F25430',
		}),
		option: (provided, state) => ({
			...provided,
			cursor: 'pointer',
			backgroundCol: '0.5',
			backgroundColor: state.isFocused ? 'rgba(242,84,48, 0.07)' : null, // Light red background on hover
			color: '#041728', // Dark color
		}),
	};
	const handleOnSubmit = async (event) => {
		event.preventDefault();
		if (canSendForm === 'true') {
			setMessageCantSendForm(true);
		} else {
			setIsLoading(true);
			fetch('/api/nodemailer', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(dataForm),
			})
				.then((response) => {
					if (response.status === 200) {
						localStorage.setItem('canSendForm', 'true');
						setIsLoading(false);
						onClose && onClose(false);
						if (onCloseOnPageCareer) {
							onCloseOnPageCareer(true);
						} else {
							setModalFormSend(true);
						}
					}
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	return (
		<form
			onSubmit={handleOnSubmit}
			className={`hide-scroll flex w-full flex-col gap-6 overflow-y-scroll ${isModal && 'border border-light'} rounded-[16px] bg-white px-3 py-4 sm:gap-8 sm:p-5 md:gap-9 lg:gap-10 lg:p-9 2xl:rounded-[32px] 2xl:px-[60px] 2xl:py-10`}
		>
			<div className={'flex justify-between'}>
				<div className={'space-y-4 sm:space-y-5 md:space-y-7 lg:space-y-6'}>
					<a
						className={
							'flex flex-col text-[18px] font-semibold leading-7 tracking-wide text-dark sm:text-[24px] sm:leading-[28px] md:text-[26px] md:leading-[32px] lg:text-[32px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[40px] 2xl:leading-[50px]'
						}
					>
						{'Подать заявку на стажировку'}
					</a>
					<div className={'flex flex-row flex-wrap'}>
						<span
							className={
								'text-xs text-grey sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'
							}
						>
							{`Заполните форму и нажмите кнопку`}
						</span>
						<span
							className={
								'ml-1.5 text-xs text-orange sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'
							}
						>
							{' «Подать заявку»'}
						</span>
					</div>
				</div>
				{isModal && (
					<svg
						onClick={() => onClose(false)}
						className={'h-fit w-10 cursor-pointer lg:w-fit'}
						width="58"
						height="54"
						viewBox="0 0 58 54"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect width="57.5425" height="54" rx="16" fill="#F1F6F9" />
						<path
							d="M18.3797 37.3798L39.1631 16.6207M18.3919 16.6085L39.151 37.3919"
							stroke="#F25430"
							strokeWidth="3"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				)}
			</div>
			<div className={'flex flex-col gap-3'}>
				<span
					className={
						'text-sm font-semibold text-grey md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'
					}
				>
					{`Обо мне`}
				</span>
				<div className={'flex w-full flex-col gap-3 md:flex-row'}>
					<InputForm
						maxLength={80}
						onChange={handleChange}
						label={'ФИО'}
						value={dataForm.name}
						id={'name'}
						placeholder={'Имя Фамилия Отчество'}
					/>
					<div className="relative z-50 mt-3 w-full">
						<label className="absolute -top-4 left-3 z-50 bg-white px-1 text-sm text-orange">
							{'Дата рождения'}
						</label>
						<DatePicker
							className=" !w-full rounded-[14px] border border-orange px-6 py-4 text-dark focus:outline-none focus:ring-1 focus:ring-[#cf2b1f]"
							calendarClassName="border !border-red-500 !rounded-[18px] !overflow-hidden"
							locale="ru"
							selected={date}
							onChange={(date) => setDate(date)}
						/>
					</div>
				</div>
			</div>
			<div className={'flex flex-col gap-3'}>
				<span
					className={
						'text-sm font-semibold text-grey md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'
					}
				>
					{`Контактные данные`}
				</span>
				<div className={'flex w-full flex-col gap-3 md:flex-row'}>
					<InputForm label={'Телефон'}>
						<PatternFormat
							type="tel"
							format="+7 (###) ###-##-##"
							mask="_"
							required={true}
							id={'tel'}
							onChange={handleChange}
							placeholder="+7 (999) 999-99-99"
							className="w-full rounded-[14px] border border-orange px-6 py-4 text-dark placeholder:text-[#A1A9B1]/50 focus:outline-none focus:ring-1 focus:ring-[#cf2b1f]"
							value={dataForm.tel}
						/>
					</InputForm>
					<InputForm
						id={'email'}
						placeholder={'example@example.com'}
						label={'Email'}
						onChange={handleChange}
						value={dataForm.email}
						type={'email'}
					/>
				</div>
			</div>
			<div className={'flex flex-col gap-3'}>
				<span
					className={
						'text-sm font-semibold text-grey md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'
					}
				>
					{`Образование`}
				</span>
				<div className={'flex w-full flex-col gap-3 md:flex-row'}>
					<InputForm
						label={'Вуз'}
						value={dataForm.vuz}
						onChange={handleChange}
						id={'vuz'}
						placeholder={'Вуз'}
					/>
					<InputForm>
						<label className="absolute -top-4 left-3 !z-30 bg-white px-1 text-sm text-orange">
							{'Уровень образования'}
						</label>
						<Select
							instanceId={'education'}
							options={[
								{ value: 1, label: 'Среднее' },
								{ value: 2, label: 'Среднее специальное' },
								{ value: 3, label: 'Неоконченное высшее' },
								{ value: 4, label: 'Высшее-Бакалавр' },
								{ value: 5, label: 'Высшее-Магистр' },
							]}
							value={dataForm.education}
							onChange={(e) => selectHandleChange(e, 'education')}
							styles={customStyles}
							placeholder="Выберите направление"
						/>
					</InputForm>
				</div>
				<div className={'flex w-full flex-col gap-3 md:flex-row'}>
					<InputForm
						label={'Курс'}
						placeholder={'Курс'}
						id={'course'}
						onChange={handleChange}
						value={dataForm.course}
						type={'text'}
						maxLength={10}
					/>
					<InputForm>
						<label className="absolute -top-4 left-3 z-50 bg-white px-1 text-sm text-orange">
							{'Форма обучения'}
						</label>
						<Select
							instanceId={'formEducation'}
							options={[
								{ value: 1, label: 'Очная' },
								{ value: 2, label: 'Заочная' },
							]}
							value={dataForm.formEducation}
							onChange={(e) => selectHandleChange(e, 'formEducation')}
							styles={customStyles}
							placeholder="Выберите форму"
						/>
					</InputForm>
				</div>
			</div>
			<div className={'flex flex-col gap-3'}>
				<span
					className={
						'text-sm font-semibold text-grey md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'
					}
				>
					{`Направление стажировки`}
				</span>
				<div className={'flex w-full flex-col gap-3'}>
					<InputForm>
						<label className="absolute -top-4 left-3 z-50 bg-white px-1 text-sm text-orange">
							{'Направление'}
						</label>
						<Select
							instanceId={'internship'}
							options={[
								{ value: 1, label: 'Архитектурно-строительное направление' },
								{
									value: 2,
									label:
										'Направление тепло-водоснабжения, вентиляции и кондиционирования',
								},
								{ value: 3, label: 'Направление электрических сетей' },
								{ value: 4, label: 'Сметное направление' },
							]}
							value={dataForm.internship}
							onChange={(e) => selectHandleChange(e, 'internship')}
							styles={customStyles}
							placeholder="Выберите направление"
						/>
					</InputForm>
					<div className="relative mt-3 w-full font-poppins">
						<label className="absolute -top-4 left-3 bg-white px-1 text-sm text-orange">
							{'Сопроводительное письмо'}
						</label>
						<textarea
							placeholder={'Расскажите о себе'}
							id={'mail'}
							value={dataForm.mail}
							onChange={handleChange}
							className="w-full rounded-[14px] border border-orange px-6 py-4 text-dark placeholder:text-[#A1A9B1]/50 focus:outline-none focus:ring-1 focus:ring-[#cf2b1f]"
						/>
					</div>
				</div>
			</div>
			{messageCantSendForm && (
				<span className={'-my-3 text-orange'}>
					Вы уже отправляли заявку. Пожалуйста, дождитесь ответа по ней.
				</span>
			)}
			<button
				type={'submit'}
				className={`w-full ${isLoading && 'min-h-[58px]'} rounded-[14px] bg-orange px-6 py-3.5 text-[20px] font-semibold tracking-wider text-white hover:bg-[#de4b2a]`}
			>
				{isLoading ? (
					<PropagateLoader className={'pb-4'} color={'#F1F6F9'} />
				) : (
					'Подать заявку'
				)}
			</button>
			{modalFormSend &&
				createPortal(
					<ModalSuccessSendForm onClose={setModalFormSend} />,
					document.body
				)}
		</form>
	);
}

Form.propTypes = {
	isModal: PropTypes.bool,
	onClose: PropTypes.func,
	onCloseOnPageCareer: PropTypes.func,
};
const InputForm = ({
	label,
	value,
	onChange,
	maxLength,
	children,
	type,
	placeholder,
	id,
}) => {
	return (
		<div className="relative mt-3 w-full font-poppins">
			<label className="absolute -top-4 left-3 bg-white px-1 text-sm text-orange">
				{label}
			</label>
			{children ? (
				children
			) : (
				<input
					maxLength={maxLength}
					placeholder={placeholder}
					required
					id={id}
					type={type ? type : 'text'}
					value={value}
					onChange={onChange}
					className="w-full rounded-[14px] border border-orange px-6 py-4 text-dark placeholder:text-[#A1A9B1]/50 focus:outline-none focus:ring-1 focus:ring-[#cf2b1f]"
				/>
			)}
		</div>
	);
};
export default Form;
