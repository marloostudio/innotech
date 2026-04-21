-- Automate 2026 (and future) event interest leads.
--
-- In Supabase: SQL Editor → New query → paste everything BELOW this comment block
-- (the CREATE TABLE ... through COMMENT ON ...), then Run. Do not paste the file path.
--
-- Export leads: Table Editor → automate_intake_leads → ⋮ → Export as CSV.

CREATE TABLE IF NOT EXISTS public.automate_intake_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  form_slug text NOT NULL DEFAULT 'automate-2026',
  full_name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  job_title text NOT NULL,
  organization_type text NOT NULL,
  role_slug text NOT NULL,
  interest text NOT NULL
);

CREATE INDEX IF NOT EXISTS automate_intake_leads_created_at_idx
  ON public.automate_intake_leads (created_at DESC);

ALTER TABLE public.automate_intake_leads ENABLE ROW LEVEL SECURITY;

-- Site visitors use the anon key; inserts only (no public reads).
DROP POLICY IF EXISTS "anon_insert_automate_intake_leads" ON public.automate_intake_leads;
CREATE POLICY "anon_insert_automate_intake_leads"
  ON public.automate_intake_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

GRANT USAGE ON SCHEMA public TO anon;
GRANT INSERT ON TABLE public.automate_intake_leads TO anon;

COMMENT ON TABLE public.automate_intake_leads IS
  'Marketing leads from public event intake forms. Export via Supabase Dashboard or SQL.';
