import "dotenv/config"

const { GITHUB_USER } = process.env
if (!GITHUB_USER) {
  console.warn(
    "Warning: GITHUB_USER environment variable is not set. GitHub-related features may not work properly.",
  )
} else {
  console.log(`GITHUB_USER: ${GITHUB_USER} ✔️`)
}

export const {
  SUPPORT_EMAIL,
  PRIVACY_EMAIL,
  DEV_ADDRESS,
  DEV_CITY,
  DEV_NAME,
  DEV_COUNTRY,
} = process.env

console.log(`SUPPORT_EMAIL: ${SUPPORT_EMAIL ? "✔️" : "Not set"} `)
console.log(`PRIVACY_EMAIL: ${PRIVACY_EMAIL ? "✔️" : "Not set"} `)
console.log(`DEV_ADDRESS: ${DEV_ADDRESS ? "✔️" : "Not set"} `)
console.log(`DEV_CITY: ${DEV_CITY ? "✔️" : "Not set"} `)
console.log(`DEV_NAME: ${DEV_NAME ? "✔️" : "Not set"} `)
console.log(`DEV_COUNTRY: ${DEV_COUNTRY ? "✔️" : "Not set"} `)

assertEquals(GITHUB_USER, "modster", "GITHUB_USER should be 'modster'")
// assertEquals(GITHUB_USER, "modster", "GITHUB_USER should be 'modster'")
// assertEquals(GITHUB_USER, "modster", "GITHUB_USER should be 'modster'")
// assertEquals(GITHUB_USER, "modster", "GITHUB_USER should be 'modster'")
// assertEquals(GITHUB_USER, "modster", "GITHUB_USER should be 'modster'")
// assertEquals(GITHUB_USER, "modster", "GITHUB_USER should be 'modster'")
