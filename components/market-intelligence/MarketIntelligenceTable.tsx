"use client";

import { useState, useMemo } from "react";
import {
  marketIntelligenceData,
  tableHeaders,
  type MarketIntelligenceRow,
} from "@/lib/market-intelligence";

const fieldKeys: (keyof MarketIntelligenceRow)[] = [
  "location",
  "categories",
  "cereals",
  "babyFoods",
  "beverages",
  "dairy",
  "frozenFoods",
  "grainsStaples",
  "emergingBrands",
];

export default function MarketIntelligenceTable() {
  const [search, setSearch] = useState("");
  const [sortCol, setSortCol] = useState<number | null>(null);
  const [sortAsc, setSortAsc] = useState(true);

  const filtered = useMemo(() => {
    let rows = marketIntelligenceData;
    if (search.trim()) {
      const q = search.toLowerCase();
      rows = rows.filter((r) =>
        fieldKeys.some((k) => r[k].toLowerCase().includes(q)),
      );
    }
    if (sortCol !== null) {
      const key = fieldKeys[sortCol];
      rows = [...rows].sort((a, b) => {
        const cmp = a[key].localeCompare(b[key]);
        return sortAsc ? cmp : -cmp;
      });
    }
    return rows;
  }, [search, sortCol, sortAsc]);

  function handleSort(colIdx: number) {
    if (sortCol === colIdx) {
      setSortAsc(!sortAsc);
    } else {
      setSortCol(colIdx);
      setSortAsc(true);
    }
  }

  return (
    <div className="mx-auto w-full max-w-[1200px] px-5">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="text-sm text-gray-600">
          Showing 1 to {filtered.length} of {filtered.length} entries
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="mi-search" className="text-sm font-medium">
            Search:
          </label>
          <input
            id="mi-search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded border border-gray-300 px-3 py-1.5 text-sm outline-none focus:border-agdil-green"
            placeholder=""
          />
        </div>
      </div>

      <div
        className="overflow-auto rounded border border-gray-200"
        style={{ maxHeight: 600 }}
      >
        <table
          className="w-full border-collapse"
          style={{ minWidth: 1800, tableLayout: "fixed" }}
        >
          <thead className="sticky top-0 z-10 bg-white shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
            <tr>
              {tableHeaders.map((h, i) => (
                <th
                  key={i}
                  className="cursor-pointer border border-gray-200 px-3 py-2.5 text-left text-sm font-semibold"
                  style={{ minWidth: 150, color: "#C00000" }}
                  onClick={() => handleSort(i)}
                >
                  <span>{h}</span>
                  {sortCol === i && (
                    <span className="ml-1">{sortAsc ? "▲" : "▼"}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, ri) => (
              <tr
                key={ri}
                className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                {fieldKeys.map((key, ci) => (
                  <td
                    key={ci}
                    className={`border border-gray-200 px-3 py-2 text-left text-sm ${
                      ci === 0
                        ? "sticky left-0 z-[2] bg-white font-medium"
                        : ""
                    }`}
                    style={{ minWidth: 150 }}
                  >
                    {row[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
