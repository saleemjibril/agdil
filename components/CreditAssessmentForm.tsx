"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { creditFormSchema, type CreditFormInput } from "@/lib/validators";

export function CreditAssessmentForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreditFormInput>({ resolver: zodResolver(creditFormSchema) });

  async function onSubmit(data: CreditFormInput) {
    setStatus("idle");
    setMessage("");
    const res = await fetch("/api/forms/credit-assessment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      setStatus("err");
      setMessage(json.error || "Something went wrong");
      return;
    }
    setStatus("ok");
    setMessage(json.message || "Thank you — we received your submission.");
    reset();
  }

  const inputClass =
    "mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm shadow-sm focus:border-agdil-green focus:outline-none focus:ring-1 focus:ring-agdil-green";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl space-y-4">
      <div>
        <label className="text-sm font-medium text-neutral-700">Full name *</label>
        <input className={inputClass} {...register("fullName")} />
        {errors.fullName ? <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p> : null}
      </div>
      <div>
        <label className="text-sm font-medium text-neutral-700">Email *</label>
        <input type="email" className={inputClass} {...register("email")} />
        {errors.email ? <p className="mt-1 text-sm text-red-600">{errors.email.message}</p> : null}
      </div>
      <div>
        <label className="text-sm font-medium text-neutral-700">Phone *</label>
        <input className={inputClass} {...register("phone")} />
        {errors.phone ? <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p> : null}
      </div>
      <div>
        <label className="text-sm font-medium text-neutral-700">Monthly revenue (NGN) *</label>
        <select className={inputClass} {...register("monthlyRevenue")}>
          <option value="">Select…</option>
          <option value="under-100k">Under ₦100,000</option>
          <option value="100k-500k">₦100,000 – ₦500,000</option>
          <option value="500k-2m">₦500,000 – ₦2,000,000</option>
          <option value="2m-plus">Above ₦2,000,000</option>
          <option value="prefer-not">Prefer not to say</option>
        </select>
        {errors.monthlyRevenue ? (
          <p className="mt-1 text-sm text-red-600">{errors.monthlyRevenue.message}</p>
        ) : null}
      </div>
      <div>
        <label className="text-sm font-medium text-neutral-700">Years in business *</label>
        <select className={inputClass} {...register("yearsInBusiness")}>
          <option value="">Select…</option>
          <option value="0-1">0–1 years</option>
          <option value="1-3">1–3 years</option>
          <option value="3-5">3–5 years</option>
          <option value="5+">5+ years</option>
        </select>
        {errors.yearsInBusiness ? (
          <p className="mt-1 text-sm text-red-600">{errors.yearsInBusiness.message}</p>
        ) : null}
      </div>
      <div>
        <label className="text-sm font-medium text-neutral-700">Notes</label>
        <textarea rows={4} className={inputClass} {...register("notes")} />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-md bg-agdil-green px-5 py-2.5 text-sm font-semibold text-white hover:bg-agdil-green-dark disabled:opacity-60"
      >
        {isSubmitting ? "Submitting…" : "Submit assessment"}
      </button>
      {status === "ok" ? <p className="text-sm text-agdil-green">{message}</p> : null}
      {status === "err" ? <p className="text-sm text-red-600">{message}</p> : null}
    </form>
  );
}
