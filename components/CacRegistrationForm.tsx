"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { cacFormSchema, type CacFormInput } from "@/lib/validators";

export function CacRegistrationForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CacFormInput>({ resolver: zodResolver(cacFormSchema) });

  async function onSubmit(data: CacFormInput) {
    setStatus("idle");
    setMessage("");
    const res = await fetch("/api/forms/cac", {
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
        <label className="text-sm font-medium text-neutral-700">Business name *</label>
        <input className={inputClass} {...register("businessName")} />
        {errors.businessName ? (
          <p className="mt-1 text-sm text-red-600">{errors.businessName.message}</p>
        ) : null}
      </div>
      <div>
        <label className="text-sm font-medium text-neutral-700">Business type *</label>
        <input
          className={inputClass}
          placeholder="e.g. Processing, retail, farm"
          {...register("businessType")}
        />
        {errors.businessType ? (
          <p className="mt-1 text-sm text-red-600">{errors.businessType.message}</p>
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
        {isSubmitting ? "Submitting…" : "Submit"}
      </button>
      {status === "ok" ? <p className="text-sm text-agdil-green">{message}</p> : null}
      {status === "err" ? <p className="text-sm text-red-600">{message}</p> : null}
    </form>
  );
}
