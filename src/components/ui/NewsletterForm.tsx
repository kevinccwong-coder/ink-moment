"use client";

import { type FormEvent, useState } from "react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: connect to email service provider
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="mt-10 text-sm text-ink">
        Thank you for joining. You'll hear from me soon.
      </p>
    );
  }

  return (
    <form
      className="mx-auto mt-10 flex max-w-lg flex-col gap-5 sm:flex-row"
      onSubmit={handleSubmit}
    >
      <div className="flex-1">
        <label htmlFor="newsletter-name" className="sr-only">
          First Name
        </label>
        <input
          id="newsletter-name"
          type="text"
          placeholder="First Name"
          required
          className="w-full border-b border-border-light bg-transparent px-1 pb-2 pt-1 text-sm text-ink outline-none transition-colors placeholder:text-warm-gray focus:border-ink"
        />
      </div>
      <div className="flex-1">
        <label htmlFor="newsletter-email" className="sr-only">
          Email
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="Email"
          required
          className="w-full border-b border-border-light bg-transparent px-1 pb-2 pt-1 text-sm text-ink outline-none transition-colors placeholder:text-warm-gray focus:border-ink"
        />
      </div>
      <button
        type="submit"
        className="self-start rounded-full border border-ink bg-transparent px-8 py-3 text-xs uppercase tracking-widest text-ink transition-all hover:bg-ink hover:text-paper sm:self-auto"
      >
        Subscribe
      </button>
    </form>
  );
}
