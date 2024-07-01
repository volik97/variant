import nodemailer from 'nodemailer';

export default async function nodemailerSend(data: {
	name: string;
	date: string;
	tel: string;
	email: string;
	vuz: string;
	course: string;
	education: { label: string };
	formEducation: { label: string };
	internship: { label: string };
	mail: string;
}) {
	const name = data?.name;
	const date = data?.date;
	const tel = data?.tel;
	const email = data?.email;
	const vuz = data?.vuz;
	const education = data?.education.label;
	const course = data?.course;
	const formEducation = data?.formEducation.label;
	const internship = data?.internship;
	const mail = data?.mail;

	const formattedBody = `
    <html lang='ru'>
      <body>
        <p>Направление стажировки: ${internship.label}</p>
        <p>---</p>
        <p>Обо мне:</p>
        <p style='margin-left:20px'>Имя: ${name}</p>
        <p style='margin-left:20px'>Дата рождения: ${date}</p>
        <p style='margin-top:20px'>Контактные данные:</p>
        <p style='margin-left:20px'>Номер телефона: ${tel}</p>
        <p style='margin-left:20px'>E-mail: ${email}</p>
        <p style='margin-top:20px'>Образование:</p>
        <p style='margin-left:20px'>Вуз: ${vuz}</p>
        <p style='margin-left:20px'>Уровень образования: ${education}</p>
        <p style='margin-left:20px'>Курс: ${course}</p>
        <p style='margin-left:20px'>E-mail: ${formEducation}</p>
        <p style='margin-top:20px'>Сопроводительное письмо:</p>
        <p style='margin-left:20px'>${mail}</p>
        <p>---</p>
      </body>
    </html>`;
	const mailTransporter = nodemailer.createTransport({
		host: 'smtp.mail.ru', // смтп адрес почтовика
		port: 465, // порт смтп почты
		secure: true,
		auth: {
			user: 'variant_rabota@inbox.ru', // адрес твоей почты от кого будешь отплавять сообщение
			pass: 'v5CR4Ezp5rFebQKmkqw1', // специальный пароль получаемый в ЛК твоей почты
		},
	});

	return await mailTransporter.sendMail({
		from: 'variant_rabota@inbox.ru', // вот сюда пишешь от кого будешь отправлять почту
		to: 'variant_rabota@inbox.ru',
		subject: 'Заявка с сайта',
		html: formattedBody,
	});
}
