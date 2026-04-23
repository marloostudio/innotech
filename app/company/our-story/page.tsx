import { permanentRedirect } from "next/navigation"

/** Legacy URL: story content now lives on `/company`. */
export default function OurStoryRedirectPage() {
  permanentRedirect("/company")
}
