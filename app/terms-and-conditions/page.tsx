import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Codenix',
  description:
    'Welcome to Codenix. By using our services, you agree to the following Terms & Conditions. Please read them carefully. If you have questions, feel free to contact us.',
};

const page = () => {
  return (
    <div className="py-8 px-8 md:px-16">
      <h1 className="text-center text-4xl md:text-5xl mt-20 font-semibold">
        Terms and Conditions
      </h1>
      <p className="max-w-3xl mt-4 text-lg text-white/80 text-center mx-auto">
        Welcome to Codenix. By using our services, you agree to the following
        Terms & Conditions. Please read them carefully. If you have questions,
        feel free to contact us.
      </p>
      {/* date */}
      <p className="mt-8">
        Last Updated:{' '}
        <time className="italic" dateTime="2025-11-21">
          November 21, 2025
        </time>
      </p>

      {/* 1 */}
      <section className="mt-8">
        <h2 className="text-2xl">1. Services Provided</h2>
        <p className="max-w-4xl ml-8">
          We offer website design, development, e-commerce development, hosting,
          maintenance, and subscription-based website services. The exact
          features included depend on the package the client chooses.
        </p>
      </section>

      <hr className="mt-2 text-white/40" />

      {/* 2 */}
      <section className="mt-8">
        <h2 className="text-2xl">2. One-Time Website Projects</h2>
        <div className="mt-2 ml-8">
          <h3 className=" text-lg">2.1 Ownership</h3>
          <p className="ml-8 max-w-4xl">
            For one-time (paid upfront) projects, the client receives full
            ownership of the website once the full payment is completed.
          </p>
        </div>
        <div className="mt-2 ml-8">
          <h3 className=" text-lg">2.2 Hosting & Maintenance Fees</h3>
          <p className="ml-2">
            Clients who purchase a one-time website must pay:
          </p>
          <ul className="ml-8 max-w-4xl list-disc">
            {[
              'Hosting: $25/month (for business website)',
              'Maintenance & support: $50/month (for business website)',
              'E-commerce hosting: $50/month (for e-commerce website)',
              'E-commerce maintenance & support: $200/month (for e-commerce website)',
            ].map((item, index) => (
              <li key={index}>{item} </li>
            ))}
          </ul>
          <p className="ml-2 italic">These services are optional.</p>
          <p className="ml-2">
            <span className="text-red-500">*</span>
            If the client chooses not to pay, they are responsible for hosting
            and managing the website on their own.
          </p>
        </div>
      </section>
      <hr className="mt-2 text-white/40" />

      {/* 3 */}
      <section className="mt-8">
        <h2 className="text-2xl">3. Subscription Website Plans</h2>
        <div className="mt-2 ml-8">
          {/* 3.1 */}
          <h3 className=" text-lg">3.1 Ownership</h3>
          <p className="ml-16 max-w-4xl">
            Subscription websites are rented, not owned. The website remains the
            property of Codenix unless the client pays a separate buyout fee.
          </p>
        </div>
        {/* 3.2 */}
        <div className="mt-2 ml-8">
          <h3 className=" text-lg">3.2 Monthly Billing</h3>
          <p className="ml-2">By subscribing, the client agrees:</p>
          <ul className="ml-8 max-w-4xl list-disc">
            {[
              'To pay the monthly subscription fee',
              'Payments are recurring',
              'Late or failed payments may cause suspension of website services',
            ].map((item, index) => (
              <li key={index}>{item} </li>
            ))}
          </ul>
        </div>
        {/* 3.3 */}
        <div className="mt-2 ml-8">
          <h3 className=" text-lg">3.3 Website Buyout</h3>
          <p className="ml-2">
            If the client wants full ownership, a buyout fee will be provided
            based on the project size.
          </p>
        </div>
        {/* 3.4 */}
        <div className="mt-2 ml-8">
          <h3 className=" text-lg">3.4 Cancellation</h3>
          <p className="ml-2">If the client cancels:</p>
          <ul className="ml-8 max-w-4xl list-disc">
            {[
              'The website will be taken offline',
              'The client loses access unless they pay the buyout fee',
              'All hosted files, content, and features remain owned by Codenix',
            ].map((item, index) => (
              <li key={index}>{item} </li>
            ))}
          </ul>
        </div>
        {/* 3.5 */}
        <div className="mt-2 ml-8">
          <h3 className=" text-lg">3.5 Early Contract Cancellation</h3>
          <p className="ml-2">
            Canceling early requires paying the remaining balance
          </p>
        </div>
      </section>
      <hr className="mt-2 text-white/40" />

      {/* 4 */}
      <section className="mt-8">
        <h2 className="text-2xl">4. Edits & Updates</h2>
        {/* 4.1 */}
        <div className="mt-2 ml-8">
          <h3 className=" text-lg">4.1 Unlimited Edits & Updates </h3>
          <p className="ml-2">Small changes are allowed, such as:</p>
          <ul className="ml-8 max-w-4xl list-disc">
            {['Text updates', 'Image changes', 'Minor styling tweaks'].map(
              (item, index) => (
                <li key={index}>{item} </li>
              )
            )}
          </ul>
        </div>
        {/* 4.2 */}
        <div className="mt-2 ml-8">
          <h3 className=" text-lg">4.2 Not Included in Unlimited Edits</h3>

          <ul className="ml-8 max-w-4xl list-disc">
            {[
              'Full redesigns',
              'New pages',
              'New features',
              'New sections',
              'CMS setup',
              'E-commerce setup',
            ].map((item, index) => (
              <li key={index}>{item} </li>
            ))}
          </ul>
          <p className="ml-2 italic">These require additional fees.</p>
        </div>
      </section>
      <hr className="mt-2 text-white/40" />

      {/* 5 */}
      <section className="mt-8">
        <h2 className="text-2xl">5. Maintenance</h2>
        {/* 5.1 */}
        <div className="mt-2 ml-8">
          <h3 className=" text-lg">5.1 What’s Included in Maintenance</h3>
          <p className="ml-2">
            Our maintenance service ensures your website stays secure,
            functional, and up-to-date. This includes:
          </p>
          <ul className="ml-8 max-w-4xl list-disc">
            {[
              'Website Updates – Minor content updates (text, images, banners)',
              'Bug Fixes & Technical Support – Fixing errors, broken links, or any technical issues affecting website functionality.',
              'Security Monitoring – Regular checks to prevent hacks or malware.',
              'Performance Monitoring – Monitoring site speed, uptime, and performance issues.',
              'Backup & Recovery – Regular backups of your website and database to restore in case of issues.',
            ].map((item, index) => (
              <li key={index}>{item} </li>
            ))}
          </ul>
        </div>
        {/* 5.2 */}
        <div className="mt-2 ml-8">
          <h3 className=" text-lg">5.2 What’s Not Included</h3>
          <p className="ml-2 italic">Maintenance does not include:</p>
          <ul className="ml-8 max-w-4xl list-disc">
            {[
              'Full website redesign or major feature changes',
              'Adding multiple new pages or sections',
              'Custom coding beyond small fixes',
            ].map((item, index) => (
              <li key={index}>{item} </li>
            ))}
          </ul>
        </div>
      </section>
      <hr className="mt-2 text-white/40" />

      {/* 6 */}
      <section className="mt-8">
        <h2 className="text-2xl">6. Payments</h2>
        {/* 6.1 */}
        <div className="mt-2 ml-8">
          <h3 className=" text-lg">6.1 One-Time Projects</h3>
          <ul className="ml-8 max-w-4xl list-disc">
            {['50% upfront', '50% due before launch'].map((item, index) => (
              <li key={index}>{item} </li>
            ))}
          </ul>
        </div>
        {/* 6.2 */}
        <div className="mt-2 ml-8">
          <h3 className=" text-lg">6.2 Subscription Plans</h3>

          <ul className="ml-8 max-w-4xl list-disc">
            {[
              'Payments are billed monthly',
              'All payments are non-refundable',
            ].map((item, index) => (
              <li key={index}>{item} </li>
            ))}
          </ul>
        </div>
        {/* 6.3 */}
        <div className="mt-2 ml-8">
          <h3 className=" text-lg">6.3 Late or Failed Payments</h3>
          <p className="ml-2">We reserve the right to:</p>
          <ul className="ml-8 max-w-4xl list-disc">
            {[
              'Pause hosting',
              'Suspend website access until payments resume.',
            ].map((item, index) => (
              <li key={index}>{item} </li>
            ))}
          </ul>
        </div>
      </section>
      <hr className="mt-2 text-white/40" />

      {/* 7 */}
      <section className="mt-8">
        <h2 className="text-2xl">7. Refund Policy</h2>
        <div className="mt-2">
          <p className="ml-2">We do not offer refunds for:</p>
          <ul className="ml-8 max-w-4xl list-disc">
            {[
              'Work already completed',
              'Subscription payments',
              'Hosting or maintenance fees',
              'Add-ons or special requests',
            ].map((item, index) => (
              <li key={index}>{item} </li>
            ))}
          </ul>
          <p className="ml-2">All payments are final.</p>
        </div>
      </section>
      <hr className="mt-2 text-white/40" />

      {/* 8 */}
      <section className="mt-8">
        <h2 className="text-2xl">8. Termination of Services</h2>
        {/* 8.1 */}
        <div className="mt-2">
          <p className="ml-2">We may terminate services if:</p>
          <ul className="ml-8 max-w-4xl list-disc">
            {[
              'The client violates these terms',
              'The client uses the website for illegal activities',
              'Payments are not made',
            ].map((item, index) => (
              <li key={index}>{item} </li>
            ))}
          </ul>
        </div>
        {/* 8.2 */}
        <div className="mt-2">
          <p className="ml-2">
            If terminated, all rights revert based on ownership rules:
          </p>
          <ul className="ml-8 max-w-4xl list-disc">
            {[
              'Subscription = website is removed',
              'One-time = client keeps full ownership',
            ].map((item, index) => (
              <li key={index}>{item} </li>
            ))}
          </ul>
        </div>
      </section>
      <hr className="mt-2 text-white/40" />

      {/* 9 */}
      <section className="mt-8">
        <h2 className="text-2xl">9. Liability Limitations</h2>
        {/* 9.1 */}
        <div className="mt-2">
          <p className="ml-2">We are not responsible for:</p>
          <ul className="ml-8 max-w-4xl list-disc">
            {[
              'Loss of profit',
              'Business loss',
              'Third-party service failures (hosting, payment gateways, APIs, etc.)',
              'Hacks or security issues caused by weak client passwords',
            ].map((item, index) => (
              <li key={index}>{item} </li>
            ))}
          </ul>
          <p className="ml-2">
            We do our best to ensure stability and security but cannot guarantee
            100% uptime.
          </p>
        </div>
      </section>
      <hr className="mt-2 text-white/40" />

      {/* 10 */}
      <section className="mt-8">
        <h2 className="text-2xl">10. Contact</h2>

        <div className="mt-2">
          <p className="ml-2">For any questions, please contact:</p>
          <p className="ml-2">Email: contact@codenix.agency</p>

          <p className="ml-2">Website: www.codenix.agency</p>
        </div>
      </section>
    </div>
  );
};

export default page;
