"use client";

import { useState, type FormEvent } from "react";

const categories = [
  "Agribusiness (MSME)",
  "Investor or Funder",
  "Service Provider / Partner",
  "Volunteers",
  "Book Consultation",
] as const;
type Category = (typeof categories)[number];

const investmentTypes = [
  "Grant-style (non-repayable support)",
  "Impact investment (low-interest repayable)",
  "Equity investment (ownership-based)",
  "Loan facility (standard interest & terms)",
];

const investmentSectors = [
  "Livestock",
  "Crops",
  "Processing",
  "Distribution/Logistics",
  "Agritech",
  "General Agribusiness",
];

const durationOptions = [
  "Short-term (3–6 months)",
  "Medium-term (6–12 months)",
  "Long-term (1 year+)",
  "Open to discussion",
];

const serviceTypes = [
  "Input Supply",
  "Aggregation",
  "Financial Services",
  "Training/Extension",
  "Logistics",
  "Market Linkage",
  "Other",
];

const hearAboutOptions = [
  "Ikore website",
  "Referral",
  "WhatsApp",
  "Newsletter",
  "Other",
];

function Label({
  children,
  required,
  htmlFor,
}: {
  children: React.ReactNode;
  required?: boolean;
  htmlFor?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-sm font-medium text-[#112337]"
    >
      {children}
      {required && (
        <span className="ml-1 text-sm font-normal text-red-500">
          (Required)
        </span>
      )}
    </label>
  );
}

function TextInput({
  id,
  type = "text",
  placeholder,
}: {
  id: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <input
      id={id}
      name={id}
      type={type}
      placeholder={placeholder}
      className="w-full rounded-[3px] border border-[#686e77] bg-white px-3 py-2.5 text-sm text-[#112337] outline-none transition-colors focus:border-agdil-green"
    />
  );
}

function SelectInput({
  id,
  options,
}: {
  id: string;
  options: string[];
}) {
  return (
    <select
      id={id}
      name={id}
      className="w-full rounded-[3px] border border-[#686e77] bg-white px-3 py-2.5 text-sm text-[#112337] outline-none transition-colors focus:border-agdil-green"
    >
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

function TextArea({ id }: { id: string }) {
  return (
    <textarea
      id={id}
      name={id}
      rows={5}
      className="w-full rounded-[3px] border border-[#686e77] bg-white px-3 py-2.5 text-sm text-[#112337] outline-none transition-colors focus:border-agdil-green"
    />
  );
}

function CheckboxGroup({
  name,
  options,
}: {
  name: string;
  options: string[];
}) {
  return (
    <div className="flex flex-col gap-2">
      {options.map((opt) => (
        <label key={opt} className="flex items-center gap-2 text-sm text-[#112337]">
          <input
            type="checkbox"
            name={name}
            value={opt}
            className="h-4 w-4 rounded border-[#686e77] accent-agdil-green"
          />
          {opt}
        </label>
      ))}
    </div>
  );
}

function MSMEFields() {
  return (
    <>
      <div>
        <Label htmlFor="businessName">Business Name</Label>
        <TextInput id="businessName" />
      </div>
      <div>
        <Label htmlFor="ownerName" required>
          Owner&apos;s Full Name
        </Label>
        <TextInput id="ownerName" />
      </div>
      <div>
        <Label htmlFor="phone" required>
          Phone Number (WhatsApp preferred)
        </Label>
        <TextInput id="phone" type="tel" />
      </div>
      <div>
        <Label htmlFor="email" required>
          Email Address (if any)
        </Label>
        <TextInput id="email" type="email" />
      </div>
      <div>
        <Label htmlFor="stateLga" required>
          State and LGA
        </Label>
        <TextInput id="stateLga" />
      </div>
      <div>
        <Label htmlFor="businessAddress" required>
          Business Address
        </Label>
        <TextInput id="businessAddress" />
      </div>
      <div>
        <Label htmlFor="agriType" required>
          Type of Agribusiness (e.g., Livestock, Crop farming, Processing,
          Aggregation, Retail)
        </Label>
        <TextInput id="agriType" />
      </div>
    </>
  );
}

function InvestorFields() {
  return (
    <>
      <div>
        <Label htmlFor="fullName" required>
          Full Name
        </Label>
        <TextInput id="fullName" />
      </div>
      <div>
        <Label htmlFor="email">Email Address</Label>
        <TextInput id="email" type="email" />
      </div>
      <div>
        <Label required>Type of Investment You&apos;re Interested In</Label>
        <CheckboxGroup name="investmentType" options={investmentTypes} />
      </div>
      <div>
        <Label htmlFor="investAmount" required>
          Amount You&apos;re Willing to Invest
        </Label>
        <TextInput id="investAmount" placeholder="E.g., ₦500,000 – ₦5,000,000" />
      </div>
      <div>
        <Label required>Preferred Investment Sector(s):</Label>
        <CheckboxGroup name="sectors" options={investmentSectors} />
      </div>
      <div>
        <Label htmlFor="duration" required>
          Duration
        </Label>
        <SelectInput id="duration" options={durationOptions} />
      </div>
      <div>
        <Label htmlFor="updates">
          Would you like regular updates on how your funds are used by MSMEs?
        </Label>
        <SelectInput id="updates" options={["Yes", "No"]} />
      </div>
      <div>
        <Label htmlFor="motivation" required>
          Briefly, what motivates your interest in investing through AgDiL?
        </Label>
        <TextArea id="motivation" />
      </div>
      <div>
        <Label htmlFor="hearAbout" required>
          How did you hear about us?
        </Label>
        <SelectInput id="hearAbout" options={hearAboutOptions} />
      </div>
    </>
  );
}

function PartnerFields() {
  return (
    <>
      <div>
        <Label htmlFor="orgName" required>
          Organization/Business Name
        </Label>
        <TextInput id="orgName" />
      </div>
      <div>
        <Label htmlFor="contactName" required>
          Contact Person Full Name
        </Label>
        <TextInput id="contactName" />
      </div>
      <div>
        <Label htmlFor="email">Email Address</Label>
        <TextInput id="email" type="email" />
      </div>
      <div>
        <Label htmlFor="serviceType" required>
          Business/Service Type
        </Label>
        <SelectInput id="serviceType" options={serviceTypes} />
      </div>
      <div>
        <Label htmlFor="serviceDesc" required>
          Brief Description of Your Services
        </Label>
        <TextArea id="serviceDesc" />
      </div>
      <div>
        <Label htmlFor="workingWith" required>
          Are you currently working with agribusinesses or farmer groups?
          (Yes/No)
        </Label>
        <SelectInput id="workingWith" options={["Yes", "No"]} />
      </div>
      <div>
        <Label htmlFor="valueChains" required>
          Which value chains are you focused on?
        </Label>
        <p className="mb-1 text-xs text-gray-500">
          (e.g., Maize, Fish, Cassava, Millet, Baobab, Multiple)
        </p>
        <TextInput id="valueChains" />
      </div>
      <div>
        <Label htmlFor="partnership" required>
          What kind of partnership are you seeking on AgDiL Centre?
        </Label>
        <p className="mb-1 text-xs text-gray-500">
          (e.g., Linkage to MSMEs, Access to finance, Marketing of services,
          Knowledge sharing, Investment partnerships)
        </p>
        <TextInput id="partnership" />
      </div>
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <TextInput id="phone" type="tel" />
      </div>
    </>
  );
}

function VolunteerFields() {
  return (
    <>
      <div>
        <Label htmlFor="capacity">
          In what capacity do you want to Volunteer to work with Agdil?
        </Label>
        <TextArea id="capacity" />
      </div>
    </>
  );
}

function ConsultationFields() {
  return (
    <>
      <div>
        <Label htmlFor="bookDate">Book Date</Label>
        <TextInput id="bookDate" type="date" />
      </div>
      <div>
        <Label htmlFor="contact" required>
          Would you like to be contacted for future pilot opportunities or
          partnerships via AgDiL?
        </Label>
        <SelectInput id="contact" options={["Yes", "No"]} />
      </div>
    </>
  );
}

export default function JoinForm() {
  const [category, setCategory] = useState<Category>("Agribusiness (MSME)");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    alert("Thank you! Your submission has been received. Our team will reach out shortly.");
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-[640px]">
      <div className="flex flex-col gap-5">
        <div>
          <Label htmlFor="category" required>
            Select Your Category
          </Label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
            className="w-full rounded-[3px] border border-[#686e77] bg-white px-3 py-2.5 text-sm text-[#112337] outline-none transition-colors focus:border-agdil-green"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {category === "Agribusiness (MSME)" && <MSMEFields />}
        {category === "Investor or Funder" && <InvestorFields />}
        {category === "Service Provider / Partner" && <PartnerFields />}
        {category === "Volunteers" && <VolunteerFields />}
        {category === "Book Consultation" && <ConsultationFields />}
      </div>

      <button
        type="submit"
        className="mt-6 rounded bg-agdil-green px-[25px] py-[12px] text-sm font-semibold text-white transition-colors hover:bg-green-700"
      >
        Submit
      </button>
    </form>
  );
}
