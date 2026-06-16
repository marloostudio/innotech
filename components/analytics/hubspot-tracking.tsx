import Script from "next/script"

const HUBSPOT_SCRIPT_SRC = "https://js-na2.hs-scripts.com/244835137.js"

/** HubSpot tracking embed — async loader after page is interactive. */
export function HubSpotTracking() {
  return (
    <Script
      id="hs-script-loader"
      src={HUBSPOT_SCRIPT_SRC}
      strategy="afterInteractive"
    />
  )
}
