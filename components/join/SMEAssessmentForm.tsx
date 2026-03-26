"use client";

import { useState, type FormEvent } from "react";

interface RadioOption {
  label: string;
  value: number;
}

function RadioGroup({
  name,
  legend,
  options,
  selected,
  onChange,
}: {
  name: string;
  legend: string;
  options: RadioOption[];
  selected: number | null;
  onChange: (v: number) => void;
}) {
  return (
    <fieldset className="mb-0">
      <legend className="mb-2.5 text-sm font-[900] text-[#555]">
        {legend}
      </legend>
      <div className="flex flex-col gap-2.5">
        {options.map((opt, i) => (
          <label
            key={i}
            className="flex items-center gap-2 text-sm text-[#555]"
          >
            <input
              type="radio"
              name={name}
              checked={selected === opt.value}
              onChange={() => onChange(opt.value)}
              className="h-4 w-4 accent-[#28a745]"
            />
            {opt.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function CheckboxGroup({
  name,
  legend,
  options,
  selected,
  onChange,
}: {
  name: string;
  legend: string;
  options: RadioOption[];
  selected: Set<number>;
  onChange: (v: number, checked: boolean) => void;
}) {
  return (
    <fieldset className="mb-0">
      <legend className="mb-2.5 text-sm font-[900] text-[#555]">
        {legend}
      </legend>
      <div className="flex flex-col gap-2.5">
        {options.map((opt, i) => (
          <label
            key={i}
            className="flex items-center gap-2 text-sm text-[#555]"
          >
            <input
              type="checkbox"
              name={`${name}_${i}`}
              checked={selected.has(i)}
              onChange={(e) => onChange(i, e.target.checked)}
              className="h-4 w-4 accent-[#28a745]"
            />
            {opt.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function SectionDivider({ title }: { title: string }) {
  return (
    <div className="mb-4 mt-8 border-b border-gray-200 pb-2 first:mt-0">
      <h3 className="text-[16px] font-bold text-[#112337]">{title}</h3>
    </div>
  );
}

function SubSectionTitle({ title }: { title: string }) {
  return (
    <h4 className="mb-1 mt-4 text-[15px] font-bold text-[#112337]">
      {title}
    </h4>
  );
}

const yearsOptions: RadioOption[] = [
  { label: "Less than 1 year", value: 0 },
  { label: "1-3 years", value: 5 },
  { label: "3-5 years", value: 15 },
  { label: "More than 5 years", value: 20 },
];

const legalOptions: RadioOption[] = [
  { label: "Yes", value: 5 },
  { label: "No", value: 0 },
];

const vouchOptions: RadioOption[] = [
  { label: "Yes", value: 5 },
  { label: "No", value: 0 },
];

const turnoverOptions: RadioOption[] = [
  { label: "Less than ₦1 million", value: 0 },
  { label: "₦1 million – ₦5 million", value: 5 },
  { label: "₦5 million – ₦10 million", value: 10 },
  { label: "₦10 million – ₦50 million", value: 15 },
  { label: "Above ₦50 million", value: 20 },
];

const docOptions: RadioOption[] = [
  { label: "Bank Statements", value: 5 },
  { label: "Tax Returns", value: 5 },
  { label: "Financial Statements", value: 5 },
];

const debtOptions: RadioOption[] = [
  { label: "Yes", value: 0 },
  { label: "No", value: 5 },
];

const assetBaseOptions: RadioOption[] = [
  { label: "Less than ₦1 million", value: 0 },
  { label: "₦1 million – ₦5 million", value: 5 },
  { label: "₦5 million – ₦10 million", value: 10 },
  { label: "₦10 million – ₦50 million", value: 15 },
  { label: "Above ₦50 million", value: 20 },
];

const collateralOptions: RadioOption[] = [
  { label: "Real Estate", value: 20 },
  { label: "Machinery/Equipment", value: 15 },
  { label: "Inventory", value: 10 },
  { label: "Other", value: 5 },
  { label: "None", value: 0 },
];

export default function SMEAssessmentForm() {
  const [years, setYears] = useState<number | null>(null);
  const [legal, setLegal] = useState<number | null>(null);
  const [vouch, setVouch] = useState<number | null>(null);

  const [turnover, setTurnover] = useState<number | null>(null);
  const [docs, setDocs] = useState<Set<number>>(new Set());
  const [debt, setDebt] = useState<number | null>(null);

  const [assetBase, setAssetBase] = useState<number | null>(null);

  const [collateral, setCollateral] = useState<number | null>(null);

  function handleDocChange(idx: number, checked: boolean) {
    setDocs((prev) => {
      const next = new Set(prev);
      if (checked) next.add(idx);
      else next.delete(idx);
      return next;
    });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const charScore = (years ?? 0) + (legal ?? 0) + (vouch ?? 0);
    const docScore = Array.from(docs).reduce(
      (sum, idx) => sum + docOptions[idx].value,
      0,
    );
    const capScore = (turnover ?? 0) + docScore + (debt ?? 0);
    const capitalScore = assetBase ?? 0;
    const collateralScore = collateral ?? 0;
    const total = charScore + capScore + capitalScore + collateralScore;

    alert(
      `Assessment Complete!\n\nCharacter Score: ${charScore}\nCapacity Score: ${capScore}\nCapital Score: ${capitalScore}\nCollateral Score: ${collateralScore}\n\nFinal Score: ${total}`,
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-[100%] rounded-[10px] bg-white p-[50px] shadow-[0_4px_10px_rgba(0,0,0,0.1)] max-md:p-6"
    >
      <h2 className="mb-5 text-[24px] font-bold text-[#112337]">
        SME Assessment Form
      </h2>

      {/* SECTION 1 */}
      <SectionDivider title="SECTION 1: CHARACTER ASSESSMENT" />
      <SubSectionTitle title="1. Business Leadership History" />

      <div className="flex flex-col gap-5">
        <RadioGroup
          name="years"
          legend="a) How many years have you been running this business?"
          options={yearsOptions}
          selected={years}
          onChange={setYears}
        />
        <RadioGroup
          name="legal"
          legend="b) Do you have any outstanding legal judgments against you or your business?"
          options={legalOptions}
          selected={legal}
          onChange={setLegal}
        />
        <RadioGroup
          name="vouch"
          legend="c) Do you have person(s) who can vouch for your professional integrity?"
          options={vouchOptions}
          selected={vouch}
          onChange={setVouch}
        />
      </div>

      {/* SECTION 2 */}
      <SectionDivider title="SECTION 2: CAPACITY ASSESSMENT" />

      <div className="flex flex-col gap-5">
        <RadioGroup
          name="turnover"
          legend="1. What is your business's average annual turnover (revenue)?"
          options={turnoverOptions}
          selected={turnover}
          onChange={setTurnover}
        />
        <CheckboxGroup
          name="docs"
          legend="2. Do you have any of the following documentation? (Select all that apply)"
          options={docOptions}
          selected={docs}
          onChange={handleDocChange}
        />
        <RadioGroup
          name="debt"
          legend="3. Do you have outstanding debt obligations?"
          options={debtOptions}
          selected={debt}
          onChange={setDebt}
        />
      </div>

      {/* SECTION 3 */}
      <SectionDivider title="SECTION 3: CAPITAL ASSESSMENT" />

      <div className="flex flex-col gap-5">
        <RadioGroup
          name="assetBase"
          legend="1. What is your business's estimated asset base?"
          options={assetBaseOptions}
          selected={assetBase}
          onChange={setAssetBase}
        />
      </div>

      {/* SECTION 4 */}
      <SectionDivider title="SECTION 4: COLLATERAL ASSESSMENT" />

      <div className="flex flex-col gap-5">
        <RadioGroup
          name="collateral"
          legend="1. Business Assets Owned:"
          options={collateralOptions}
          selected={collateral}
          onChange={setCollateral}
        />
      </div>

      <button
        type="submit"
        className="mt-8 rounded-[5px] bg-[#34a203] px-5 py-2.5 text-[16px] font-bold text-white transition-colors hover:bg-[#218838]"
      >
        Submit
      </button>
    </form>
  );
}
