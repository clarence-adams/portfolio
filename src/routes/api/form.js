import nodemailer from 'nodemailer';

const sender = import.meta.env.VITE_EMAIL;
const password = import.meta.env.VITE_EMAIL_PASS;

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	auth: {
		user: sender,
		pass: password
	}
});

export const post = async ({ request }) => {
	const body = await request.json();

	const mailData = {
		from: sender, // sender address
		to: sender, // list of receivers
		subject: 'New contact',
		text: 'name: ' + body.name + '\nemail: ' + body.email + '\n\nmessage: ' + body.message
	};

	let nodemailer;

	try {
		nodemailer = await transporter.sendMail(mailData);
	} catch (error) {
		console.log(error);
		return { status: 200, body: { success: false } };
	}

	if (nodemailer.accepted[0] !== sender) {
		return { status: 200, body: { success: false } };
	}

	return { status: 200, body: { success: true } };
};
