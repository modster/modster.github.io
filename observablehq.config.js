// See https://observablehq.com/framework/config for documentation.
import 'dotenv/config'

const {GITHUB_USER} = process.env;
if (!GITHUB_USER) {
  console.warn("Warning: GITHUB_USER environment variable is not set. GitHub-related features may not work properly.");
} else {
  console.log(`GITHUB_USER: ${GITHUB_USER} ✔️`);
}

const {SUPPORT_EMAIL, PRIVACY_EMAIL, BUSINESS_ADDRESS, BUSINESS_CITY, BUSINESS_NAME, BUSINESS_COUNTRY} = process.env;
console.log(`SUPPORT_EMAIL: ${SUPPORT_EMAIL ? "✔️" : "Not set"} `);
console.log(`PRIVACY_EMAIL: ${PRIVACY_EMAIL ? "✔️" : "Not set"} `);
console.log(`BUSINESS_ADDRESS: ${BUSINESS_ADDRESS ? "✔️" : "Not set"} `);
console.log(`BUSINESS_CITY: ${BUSINESS_CITY ? "✔️" : "Not set"} `);
console.log(`BUSINESS_NAME: ${BUSINESS_NAME ? "✔️" : "Not set"} `);
console.log(`BUSINESS_COUNTRY: ${BUSINESS_COUNTRY ? "✔️" : "Not set"} `);

export default {
  // The app’s title; used in the sidebar and webpage titles.
  title: "@" + GITHUB_USER,

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  // pages: [
  //   {
  //     name: "Reports",
  //     pages: [
  //       {name: "User Profile", path: "/"},
  //       {name: "Repositories", path: "/repositories/"},
        // {name: "Activity", path: "/activity"},
        // {name: "Contributions", path: "/contributions"},
        // {name: "Followers", path: "/followers"},
        // {name: "Following", path: "/following"},
        // {name: "Organizations", path: "/organizations"},
        // {name: "Gists", path: "/gists"},
        // {name: "Events", path: "/example-events"},
        // {name: "Starred Repositories", path: "/example-starred-repositories"},
        // {name: "Languages", path: "/example-languages"},
        // {name: "Topics", path: "/example-topics"},
        // {name: "Trends", path: "/example-trends"},
        // {name: "Comparisons", path: "/example-comparisons"},
        // {name: "Dashboard", path: "/example-dashboard"},
        // {name: "Report", path: "/example-report"}
    //   ]
    // }
  // ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',

  // The path to the source root.
  root: "src",
  // base: "/",
  // Some additional configuration options and their defaults:
  theme: "default", // try "light", "dark", "slate", etc.
  // header: "", // what to show in the header (HTML)
  footer: "Built with <a href='https://observablehq.com/framework'>Observable Framework</a>. | <a href='/privacy/'>Privacy Policy</a> | <a href='/tos/'>Terms of Service</a>", // what to show in the footer (HTML)
  sidebar: true, // whether to show the sidebar
  toc: true, // whether to show the table of contents
  pager: true, // whether to show previous & next links in the footer
  output: "dist", // path to the output root for build
  search: true, // activate search
  linkify: true, // convert URLs in Markdown to links
  typographer: true, // smart quotes and other typographic improvements
  // preserveExtension: false, // drop .html from URLs
  // preserveIndex: false, // drop /index from URLs
};
