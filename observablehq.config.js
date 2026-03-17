// See https://observablehq.com/framework/config for documentation.

export default {
  // The app’s title; used in the sidebar and webpage titles.
  title: "@modster",
  // dynamicPaths: ["/components/contributions.js"],
  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  // pages: [
  //   {
  //     name: "User Profile",
  //     pages: [
  //       { name: "Repositories", path: "/repositories" },
  //       { name: "Gists", path: "/gists" },
  //       // { name: "Activity", path: "/activity" },
  //       // { name: "Contributions", path: "/contributions" },
  //       { name: "Followers", path: "/followers" },
  //       { name: "Following", path: "/following" },
  //       // { name: "Organizations", path: "/organizations" },
  //       // { name: "Events", path: "/events" },
  //       // { name: "Starred Repositories", path: "/starred-repositories" },
  //       // { name: "Languages", path: "/languages" },
  //       // { name: "Feed", path: "/feed" }
  //     ],
  //   },
  // ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: `<link rel="icon" href="observable.png" type="image/png" sizes="32x32">
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>`,

  // The path to the source root.
  root: "src",
  // base: "/",
  // Some additional configuration options and their defaults:
  theme: "dashboard", // try "light", "dark", "slate", etc.
  // header: "", // what to show in the header (HTML)
  footer:
    "Built with <a href='https://observablehq.com/framework'>Observable Framework</a>. | <a href='/privacy-policy'>Privacy Policy</a> | <a href='/terms-of-service'>Terms of Service</a>", // what to show in the footer (HTML)
  sidebar: true, // whether to show the sidebar
  toc: false, // whether to show the table of contents
  pager: true, // whether to show previous & next links in the footer
  output: "dist", // path to the output root for build
  // search: true, // activate search
  linkify: true, // convert URLs in Markdown to links
  // typographer: true, // smart quotes and other typographic improvements
  style: "style.css",
  // preserveExtension: false, // drop .html from URLs
  // preserveIndex: false, // drop /index from URLs
}
