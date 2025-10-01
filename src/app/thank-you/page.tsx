'use client';

import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-iceland-green">Thank you!</h1>
        <p className="text-stone-200 mb-6">
          We’ve received your details. We’ll reach out shortly with availability and next steps.
        </p>
        <div className="flex flex-col gap-3 items-center">
          <a
            href="https://wa.me/917373076000"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 font-semibold"
          >
            Message us on WhatsApp
          </a>
          <Link href="/" className="text-iceland-green hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}


