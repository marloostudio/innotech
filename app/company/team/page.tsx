import { permanentRedirect } from "next/navigation"

/** Story and team content now lives on `/company`. */
export default function TeamRedirectPage() {
  permanentRedirect("/company")
}
