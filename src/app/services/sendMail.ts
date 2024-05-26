import nodemailer from 'nodemailer';

export default async function nodemailerSend(data: {
	name: string;
	date: string;
	tel: string;
	email: string;
	vuz: string;
	course: string;
	education: string;
	formEducation: string;
	internship: { label: string };
	mail: string;
}) {
	const name = data?.name;
	const date = data?.date;
	const tel = data?.tel;
	const email = data?.email;
	const vuz = data?.vuz;
	const education = data?.education;
	const course = data?.course;
	const formEducation = data?.formEducation;
	const internship = data?.internship;
	const mail = data?.mail;

	const formattedBody = `
    <html lang='ru'>
      <body>
        <p>Направление стажировки: ${internship.label}</p>
        <p>---</p>
        <p>Имя: ${name}</p>
        <p>Номер телефона: ${tel}</p>
        <p>---</p>
      </body>
    </html>`;
	const mailTransporter = nodemailer.createTransport({
		host: 'smtp.mail.ru', // смтп адрес почтовика
		port: 465, // порт смтп почты
		secure: true,
		auth: {
			user: 'volik97@inbox.ru', // адрес твоей почты от кого будешь отплавять сообщение
			pass: 'cxuSy9St38Zsj0sn01LS', // специальный пароль получаемый в ЛК твоей почты
		},
	});

	return await mailTransporter.sendMail({
		from: 'volik97@inbox.ru', // вот сюда пишешь от кого будешь отправлять почту
		to: 'volik97@inbox.ru',
		subject: 'Заявка с сайта',
		html: formattedBody,
	});
}
