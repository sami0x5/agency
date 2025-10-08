'use server';

import { contactValidation } from './utils';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { success } from 'zod';

interface formData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  company?: string | undefined;
  details?: string | undefined;
}
export const contactForm = async (formData: formData) => {
  const result = await contactValidation.safeParse(formData);

  if (!result.success) {
    const { name, email, phone, service, budget } =
      result.error.flatten().fieldErrors;
    return {
      success: false,
      errors: {
        name: name && name[0],
        email: email && email[0],
        phone: phone && phone[0],
        service: service && service[0],
        budget: budget && budget[0],
      },
    };
  }

  const { budget, email, name, phone, service, company, details } = result.data;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
      },
    } as SMTPTransport.Options);

    await transporter.sendMail({
      from: `"Codenix" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `Contact Request - ${name}`,
      html: `<div style=" background-color: #ffffff;">
    <table style="margin-top: 10px; font-size: 25px; border-collapse: collapse;">
      <tr style="background-color: #51515141;">
        <td style="border: 2px solid rgba(0, 0, 0, 0.2); padding: 5px; ">Name</td>
        <td style="border: 2px solid rgba(0, 0, 0, 0.2); padding: 5px; ">${name}</td>
      </tr>
      <tr>
        <td style="border: 2px solid rgba(0, 0, 0, 0.2); padding: 5px; ">Email</td>
        <td style="border: 2px solid rgba(0, 0, 0, 0.2); padding: 5px; ">${email}</td>
      </tr>
      <tr style="background-color: #51515141;">
        <td style="border: 2px solid rgba(0, 0, 0, 0.2); padding: 5px; ">Budget</td>
        <td style="border: 2px solid rgba(0, 0, 0, 0.2); padding: 5px; ">${budget}</td>
      </tr>
      <tr>
        <td style="border: 2px solid rgba(0, 0, 0, 0.2); padding: 5px; ">Phone</td>
        <td style="border: 2px solid rgba(0, 0, 0, 0.2); padding: 5px; ">${phone}</td>
      </tr>
      <tr style="background-color: #51515141;">
        <td style="border: 2px solid rgba(0, 0, 0, 0.2); padding: 5px; ">Company</td>
        <td style="border: 2px solid rgba(0, 0, 0, 0.2); padding: 5px; ">${company}</td>
      </tr>
      <tr>
        <td style="border: 2px solid rgba(0, 0, 0, 0.2); padding: 5px; ">Service</td>
        <td style="border: 2px solid rgba(0, 0, 0, 0.2); padding: 5px; ">${service}</td>
      </tr>
      <tr style="background-color: #51515141;">
        <td style="border: 2px solid rgba(0, 0, 0, 0.2); padding: 5px; ">Details</td>
        <td style="border: 2px solid rgba(0, 0, 0, 0.2); padding: 3px; ">${details}</td>
      </tr>
    </table>
  </div>`,
    });
    console.log('sent successfully');

    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false };
  }
};
