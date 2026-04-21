import { createClient } from "@supabase/supabase-js"

/**
 * Public Supabase anon credential (safe to expose in the browser with RLS).
 * Prefer `NEXT_PUBLIC_SUPABASE_ANON` — Vercel warns on names ending in `*_ANON_KEY`.
 * Legacy: `NEXT_PUBLIC_SUPABASE_ANON_KEY` is still read if `ANON` is unset.
 */
export function getSupabaseAnonCredential() {
  const v =
    process.env.NEXT_PUBLIC_SUPABASE_ANON?.trim() ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim()
  return v || undefined
}

/**
 * Server-only Supabase client using the public anon key.
 * Used for RLS-governed inserts (e.g. public lead forms).
 */
export function createSupabaseAnonServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = getSupabaseAnonCredential()
  if (!url || !key) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON")
  }
  return createClient(url, key)
}
