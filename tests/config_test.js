import "varlock/auto-load"
import { assertEquals } from "@std/assert"

const { GH_PAT } = process.env
if (!GH_PAT) {
  console.warn(
    "Warning: GH_PAT environment variable is not set. GitHub-related features may not work properly.",
  )
} else {
  console.log("Token Set ✔️")
}

export const {
  GH_USER,
  GH_REPO,
  SUPPORT_EMAIL,
  PRIVACY_EMAIL,
  DEV_ADDRESS,
  DEV_CITY,
  DEV_NAME,
  DEV_COUNTRY,
} = process.env

console.log(`SUPPORT_EMAIL ${SUPPORT_EMAIL ? "✔️" : "Not set"} `)
console.log(`PRIVACY_EMAIL ${PRIVACY_EMAIL ? "✔️" : "Not set"} `)
console.log(`DEV_ADDRESS ${DEV_ADDRESS ? "✔️" : "Not set"} `)
console.log(`DEV_CITY ${DEV_CITY ? "✔️" : "Not set"} `)
console.log(`DEV_NAME ${DEV_NAME ? "✔️" : "Not set"} `)
console.log(`DEV_COUNTRY ${DEV_COUNTRY ? "✔️" : "Not set"} `)

assertEquals(GH_USER, "modster", "GH_USER should be 'modster'")
