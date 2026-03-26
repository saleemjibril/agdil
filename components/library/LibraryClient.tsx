"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  libraryResources,
  libraryCategoryFilters,
  libraryCourses,
  type LibraryFileType,
} from "@/lib/library";

const fileTypeLabels: { value: LibraryFileType; label: string }[] = [
  { value: "pdf", label: "Pdf" },
  { value: "template", label: "Template" },
  { value: "video", label: "Video" },
];

const courseLevels = ["All Levels", "Beginner", "Intermediate", "Expert"];

function ResourceCard({
  title,
  date,
  author,
  cover,
  downloadUrl,
  downloadLabel,
}: {
  title: string;
  date: string;
  author: string;
  cover: string;
  downloadUrl: string;
  downloadLabel: string;
}) {
  return (
    <div className="flex flex-col">
      <div
        className="min-h-[256px] rounded-[6px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cover})` }}
      />
      <div className="-mt-[68px] self-center rounded-[6px] bg-white px-0 pb-[24px] pt-[10px] shadow-[0_1px_2px_0_rgba(0,0,0,0.07)] md:w-[90%]">
        <h3 className="text-center font-[family-name:var(--font-manrope)] text-[16px] font-bold leading-[24px] text-neutral-800">
          {title}
        </h3>
        <div className="mt-[12px] flex items-center justify-center gap-[10px]">
          <span className="font-[family-name:var(--font-manrope)] text-[12px] font-normal leading-[13px] text-neutral-600">
            {date}
          </span>
          <span className="font-[family-name:var(--font-manrope)] text-[12px] font-normal leading-[13px] text-neutral-600">
            by
          </span>
          <span className="font-[family-name:var(--font-manrope)] text-[12px] font-normal leading-[13px] text-neutral-600">
            {author}
          </span>
        </div>
        <div className="mt-[12px] flex justify-center">
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded bg-agdil-green px-[15px] py-[10px] font-[family-name:var(--font-manrope)] text-[13px] font-semibold text-white hover:bg-agdil-green-dark"
          >
            {downloadLabel}
          </a>
        </div>
      </div>
    </div>
  );
}

function CourseCard({
  title,
  slug,
  cover,
  author,
}: {
  title: string;
  slug: string;
  cover: string;
  author: string;
}) {
  return (
    <div className="overflow-hidden rounded-[8px] border border-neutral-200 bg-white shadow-sm">
      <div className="relative h-[200px]">
        <Image src={cover} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
      <div className="p-4">
        <h3 className="font-[family-name:var(--font-manrope)] text-[16px] font-bold leading-[24px] text-neutral-800">
          {title}
        </h3>
        <div className="mt-2 flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-agdil-green text-[10px] font-bold text-white">
            A
          </span>
          <span className="font-[family-name:var(--font-manrope)] text-[13px] text-neutral-500">
            By {author} In Nutrition
          </span>
        </div>
        <div className="mt-4">
          <Link
            href={`/courses/${slug}`}
            className="inline-flex w-full justify-center rounded-[5px] border border-agdil-green bg-white px-[15px] py-[10px] font-[family-name:var(--font-manrope)] text-[13px] font-semibold text-agdil-green hover:bg-agdil-green hover:text-white"
          >
            Enroll Course
          </Link>
        </div>
      </div>
    </div>
  );
}

function FilterSidebar({
  selectedFileTypes,
  onToggleFileType,
  onReset,
}: {
  selectedFileTypes: Set<LibraryFileType>;
  onToggleFileType: (ft: LibraryFileType) => void;
  onReset: () => void;
}) {
  return (
    <div className="rounded-[6px] bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.1)]">
      <div className="bg-white px-[16px] py-[10px]">
        <h4 className="font-[family-name:var(--font-manrope)] text-[20px] font-semibold leading-[20px] text-neutral-800">
          Filters
        </h4>
      </div>
      <div className="bg-[#F9FAFB] px-[24px] py-[16px]">
        <p className="mb-3 font-[family-name:var(--font-manrope)] text-[14px] font-semibold text-neutral-700">
          File type
        </p>
        <div className="flex flex-col gap-[16px]">
          {fileTypeLabels.map((ft) => (
            <label
              key={ft.value}
              className="flex cursor-pointer items-center gap-[16px]"
              onClick={() => onToggleFileType(ft.value)}
            >
              <span
                className={`flex h-[16px] w-[16px] min-w-[16px] items-center justify-center rounded-[2px] border ${
                  selectedFileTypes.has(ft.value)
                    ? "border-agdil-green bg-agdil-green"
                    : "border-neutral-300 bg-white"
                }`}
              >
                {selectedFileTypes.has(ft.value) && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span className="font-[family-name:var(--font-manrope)] text-[16px] font-normal leading-[14px] text-neutral-700">
                {ft.label}
              </span>
            </label>
          ))}
        </div>
        <button
          onClick={onReset}
          className="mt-5 rounded bg-agdil-green px-[25px] py-[15px] font-[family-name:var(--font-manrope)] text-[13px] font-semibold text-white hover:bg-agdil-green-dark"
        >
          Reset filters
        </button>
      </div>
    </div>
  );
}

function CourseSidebar({
  selectedLevel,
  onSelectLevel,
}: {
  selectedLevel: string;
  onSelectLevel: (l: string) => void;
}) {
  return (
    <div className="rounded-[6px] bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.1)]">
      <div className="bg-white px-[16px] py-[10px]">
        <h4 className="font-[family-name:var(--font-manrope)] text-[20px] font-semibold leading-[20px] text-neutral-800">
          Filters
        </h4>
      </div>
      <div className="bg-[#F9FAFB] px-[24px] py-[16px]">
        <p className="mb-3 font-[family-name:var(--font-manrope)] text-[14px] font-semibold text-neutral-700">
          Category
        </p>
        <label className="flex cursor-pointer items-center gap-3">
          <input type="radio" name="course-cat" defaultChecked className="accent-agdil-green" />
          <span className="font-[family-name:var(--font-manrope)] text-[16px] text-neutral-700">Nutrition</span>
        </label>

        <p className="mb-3 mt-5 font-[family-name:var(--font-manrope)] text-[14px] font-semibold text-neutral-700">
          Level
        </p>
        <div className="flex flex-col gap-[16px]">
          {courseLevels.map((level) => (
            <label key={level} className="flex cursor-pointer items-center gap-3">
              <input
                type="radio"
                name="course-level"
                checked={selectedLevel === level}
                onChange={() => onSelectLevel(level)}
                className="accent-agdil-green"
              />
              <span className="font-[family-name:var(--font-manrope)] text-[16px] text-neutral-700">{level}</span>
            </label>
          ))}
        </div>

        <p className="mb-3 mt-5 font-[family-name:var(--font-manrope)] text-[14px] font-semibold text-neutral-700">
          Price
        </p>
        <div className="flex flex-col gap-[16px]">
          {["Free", "Paid"].map((price) => (
            <label key={price} className="flex cursor-pointer items-center gap-3">
              <input type="checkbox" className="accent-agdil-green" />
              <span className="font-[family-name:var(--font-manrope)] text-[16px] text-neutral-700">{price}</span>
            </label>
          ))}
        </div>

        <button className="mt-5 font-[family-name:var(--font-manrope)] text-[13px] font-semibold text-agdil-green underline">
          Clear All Filters
        </button>
      </div>
    </div>
  );
}

export default function LibraryClient() {
  const [activeCategory, setActiveCategory] = useState<string | null>("Access to Finance");
  const [selectedFileTypes, setSelectedFileTypes] = useState<Set<LibraryFileType>>(new Set());
  const [search, setSearch] = useState("");
  const [courseLevel, setCourseLevel] = useState("All Levels");

  const filteredResources = useMemo(() => {
    return libraryResources.filter((r) => {
      if (activeCategory && !r.categories.includes(activeCategory)) return false;
      if (selectedFileTypes.size > 0 && !selectedFileTypes.has(r.fileType)) return false;
      if (search && !r.title.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [activeCategory, selectedFileTypes, search]);

  function toggleFileType(ft: LibraryFileType) {
    setSelectedFileTypes((prev) => {
      const next = new Set(prev);
      if (next.has(ft)) next.delete(ft);
      else next.add(ft);
      return next;
    });
  }

  function resetFilters() {
    setSelectedFileTypes(new Set());
    setActiveCategory(null);
    setSearch("");
  }

  return (
    <>
      {/* ── Short Courses Section ── */}
      <section className="mx-[70px] mb-[70px] mt-[70px] px-[10px] pb-[70px] max-md:mx-0 max-md:mt-[27px]">
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <h2 className="text-center font-bold capitalize text-neutral-800 max-md:text-[29px] max-md:leading-[1.2em] md:text-[32px]">
            Get Short Courses That Transforms Agrifood Businesses
          </h2>
          <p className="max-w-[74%] text-center font-[family-name:var(--font-manrope)] text-[16px] font-normal leading-[24px] text-neutral-600 max-md:max-w-full">
            Explore our curated learning paths from foundational short modules to in-depth courses designed for agrifood
            enterprises seeking growth, Impact, and sustainability
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="mt-[20px] flex flex-wrap items-center justify-between gap-4 max-md:flex-col">
          <div className="flex flex-wrap gap-x-[40px] gap-y-[10px] max-md:justify-center">
            {libraryCategoryFilters.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                className={`cursor-pointer font-[family-name:var(--font-manrope)] text-[16px] transition-all ${
                  activeCategory === cat
                    ? "font-bold text-black underline decoration-agdil-green decoration-[4px] underline-offset-4"
                    : "font-normal text-[#54595F] hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="self-center max-md:w-full">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded border border-[#CCCCCC] px-3 py-2 font-[family-name:var(--font-manrope)] text-[14px] text-neutral-800 outline-none focus:border-agdil-green md:w-[200px]"
            />
          </div>
        </div>

        {/* Sidebar + Grid */}
        <div className="mt-[38px] flex gap-0 rounded bg-white max-lg:flex-col">
          {/* Sidebar */}
          <div className="w-[20%] shrink-0 max-lg:order-2 max-lg:mt-4 max-lg:w-full max-md:order-2">
            <FilterSidebar
              selectedFileTypes={selectedFileTypes}
              onToggleFileType={toggleFileType}
              onReset={resetFilters}
            />
          </div>
          {/* Grid */}
          <div className="flex-1 max-md:order-1">
            <div className="grid grid-cols-1 gap-x-0 gap-y-[40px] px-0 sm:grid-cols-2 lg:grid-cols-3">
              {filteredResources.map((r) => (
                <ResourceCard
                  key={r.id}
                  title={r.title}
                  date={r.date}
                  author={r.author}
                  cover={r.cover}
                  downloadUrl={r.downloadUrl}
                  downloadLabel={r.downloadLabel}
                />
              ))}
            </div>
            {filteredResources.length === 0 && (
              <p className="py-10 text-center font-[family-name:var(--font-manrope)] text-[16px] text-neutral-500">
                No data was found
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ── Long Courses Section ── */}
      <section className="mx-0 mb-0 px-[10px] pb-[70px] md:mx-[70px]">
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <h2 className="text-center font-bold capitalize text-neutral-800 max-md:text-[29px] max-md:leading-[1.2em] md:text-[32px]">
            Get Long Courses That Transforms Agrifood Businesses
          </h2>
          <p className="mb-[10px] max-w-[74%] text-center font-[family-name:var(--font-manrope)] text-[16px] font-normal leading-[24px] text-neutral-600 max-md:max-w-full">
            Explore our curated learning paths from foundational short modules to in-depth courses designed for agrifood
            enterprises seeking growth, Impact, and sustainability
          </p>
          <Link
            href="/dashboard"
            className="rounded-[10px] border border-agdil-green bg-neutral-800 px-[25px] py-[15px] font-[family-name:var(--font-manrope)] text-[13px] font-semibold text-white hover:bg-agdil-green"
          >
            View my Course Dashboard
          </Link>
        </div>

        {/* Sidebar + Course list */}
        <div className="mt-[38px] flex gap-0 rounded bg-white max-lg:flex-col">
          <div className="w-[20%] shrink-0 max-lg:order-2 max-lg:mt-4 max-lg:w-full max-md:order-2">
            <CourseSidebar selectedLevel={courseLevel} onSelectLevel={setCourseLevel} />
          </div>
          <div className="flex-1 max-md:order-1">
            <div className="grid grid-cols-1 gap-[32px]">
              {libraryCourses.map((c) => (
                <CourseCard key={c.slug} title={c.title} slug={c.slug} cover={c.cover} author={c.author} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
