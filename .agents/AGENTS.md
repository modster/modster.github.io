# AGENTS.md

This is a github pages site for user @modster's made using the Observable Framework.

Check the examples folder (.agents/examples) for an  example website that you can use as a starting point.

## Content for @modster's GitHub profile

### _whoami_

Eric M. Greeff
emg@greeffer.com
+1-226-932-0820

### _bio_

@modster's GitHub profile is a comprehensive showcase of his professional identity, contributions, and interests. It includes detailed information about his background, social media presence, company affiliation, location, and a selection of pinned repositories that highlight his work in various domains such as Android development, data visualization, AI, and more. Additionally, the profile emphasizes his engagement with the GitHub community through contributions and activity, as well as his openness to opportunities with a "Available for hire" status.

### _Custom Domain_

[greeffer.com](https://greeffer.com)

### _Social accounts_

- x.com/goodgreeff
- github.com/modster
- linkedin.com/in/emgreeff

### _Company_

_You can **@mention** the company’s GitHub organization to link it._

[@DataDrivenSoftware](https://datadash.cloud)

### _Location_

Ontario, Canada
_Time Zone:_ America/Toronto

### _Profile picture_

 ![@modster](https://avatars.githubusercontent.com/u/893946?s=400&u=7d63e8c0263d2f02bc3a74d96536d6b56abc8578&v=4)

### _Pinned Repos_

_work in progress_ these are placeholders for now

1. Android Camera
2. DataViz
3. GH Profile Template
4. AI
5. WebGL/WebGPU
6. PineScript (TradingView's DSL)

### _Contributions & activity_

Enabling this will make public your contributions and activity from your GitHub profile and from social features like followers, stars, feeds, leaderboards and releases.

- following: who and why
- project I'm stargazng
- followers

### _Achievements_

- Badges
- Contribution Graph
- GitHub Developer Program

### _Support Email Address_

An email address where GitHub users can contact you for support.

- support@datadash.cloud

### _Product or company website_

The URL for the product, company, or service that integrates with GitHub.

[datadash.cloud](https://datadash.cloud)

### *Jobs profile* 

Available for hire

### Status

Make a javascript module that updaes my github status via the GitHub API. This module can be imported into any of my Observable Framework pages to update my status across all of my GitHub accounts, including this one.

## Stack

This is an [Observable Framework](https://observablehq.com/framework/) app. To install the required dependencies, run:

```
npm install
```

Then, to start the local preview server, run:

```
pnpm run dev
```

Then visit <http://localhost:3000> to preview your app.

For more, see <https://observablehq.com/framework/getting-started>.

## Project structure

A typical Framework project looks like this:

```ini
.
├─ src
│  ├─ components
│  │  └─ timeline.js           # an importable module
│  ├─ data
│  │  ├─ launches.csv.js       # a data loader
│  │  └─ events.json           # a static data file
│  ├─ example-dashboard.md     # a page
│  ├─ example-report.md        # another page
│  └─ index.md                 # the home page
├─ .gitignore
├─ observablehq.config.js      # the app config file
├─ package.json
└─ README.md
```

**`src`** - This is the “source root” — where your source files live. Pages go here. Each page is a Markdown file. Observable Framework uses [file-based routing](https://observablehq.com/framework/project-structure#routing), which means that the name of the file controls where the page is served. You can create as many pages as you like. Use folders to organize your pages.

**`src/index.md`** - This is the home page for your app. You can have as many additional pages as you’d like, but you should always have a home page, too.

**`src/data`** - You can put [data loaders](https://observablehq.com/framework/data-loaders) or static data files anywhere in your source root, but we recommend putting them here.

**`src/components`** - You can put shared [JavaScript modules](https://observablehq.com/framework/imports) anywhere in your source root, but we recommend putting them here. This helps you pull code out of Markdown files and into JavaScript modules, making it easier to reuse code across pages, write tests and run linters, and even share code with vanilla web applications.

**`observablehq.config.js`** - This is the [app configuration](https://observablehq.com/framework/config) file, such as the pages and sections in the sidebar navigation, and the app’s title.

## Command reference

| Command              | Description                                 |
| -------------------- | ------------------------------------------- |
| `npm install`        | Install or reinstall dependencies           |
| `npm run dev`        | Start local preview server                  |
| `npm run build`      | Build your static site, generating `./dist` |
| `npm run deploy`     | Deploy your app to Observable               |
| `npm run clean`      | Clear the local data loader cache           |
| `npm run observable` | Run commands like `observable help`         |
