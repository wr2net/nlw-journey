import nodemailer from "nodemailer";

export async function getMailClient() {
	const account = await nodemailer.createTestAccount()
	return nodemailer.createTransport({
		host: process.env.MAIL_HOST,
		port: 587,
		secure: false,
		auth: {
			user: account.user,
			pass: account.pass,
		}
	})
}
