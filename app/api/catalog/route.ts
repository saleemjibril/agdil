import { NextResponse } from "next/server";
import catalog from "@/data/catalog.json";

/**
 * JSON catalogue API — Phase 2: point clients at WooCommerce `/wp-json/wc/v3/products`
 * or GraphQL when `WOO_*` env vars are configured.
 */
export async function GET() {
  return NextResponse.json(catalog);
}
