'use server';

import { contactValidation } from './utils';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { google } from 'googleapis';

interface formData {
  name: string;
  email: string;
  phone: string;
  service: string;
  plan: string;
  company?: string | undefined;
  details?: string | undefined;
}

const OAuth2 = google.auth.OAuth2;

export const contactForm = async (formData: formData) => {
  const result = await contactValidation.safeParse(formData);

  if (!result.success) {
    const { name, email, phone, service, plan } =
      result.error.flatten().fieldErrors;
    return {
      success: false,
      errors: {
        name: name && name[0],
        email: email && email[0],
        phone: phone && phone[0],
        service: service && service[0],
        plan: plan && plan[0],
      },
    };
  }

  const { plan, email, name, phone, service, company, details } = result.data;

  try {
    const oAuth2Client = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      'https://developers.google.com/oauthplayground'
    );

    oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

    const accessToken = await oAuth2Client.getAccessToken();

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
        accessToken: accessToken?.token,
      },
    } as SMTPTransport.Options);
    // codenix.agency@gmail.com
    await transporter.sendMail({
      from: `"Codenix" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `Contact Request - ${name}`,
      replyTo: email,
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
        <td style="border: 2px solid rgba(0, 0, 0, 0.2); padding: 5px; ">Plan</td>
        <td style="border: 2px solid rgba(0, 0, 0, 0.2); padding: 5px; ">${plan}</td>
      </tr>
      <tr style="background-color: #51515141;">
        <td style="border: 2px solid rgba(0, 0, 0, 0.2); padding: 5px; ">Details</td>
        <td style="border: 2px solid rgba(0, 0, 0, 0.2); padding: 3px; ">${details}</td>
      </tr>
    </table>
  </div>`,
    });
    // sami@codenix.agency
    await transporter.sendMail({
      from: `"Codenix" <${process.env.EMAIL_USER}>`,
      to: 'sami@codenix.agency',
      subject: `Contact Request - ${name}`,
      replyTo: email,
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
        <td style="border: 2px solid rgba(0, 0, 0, 0.2); padding: 5px; ">Plan</td>
        <td style="border: 2px solid rgba(0, 0, 0, 0.2); padding: 5px; ">${plan}</td>
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
