## @modster

## Content for github profile

### *whoami*
Eric M. Greeff
emg@greeffer.com
+1-226-932-0820

### *bio* 
*@mention other users and organizations to link to them.*

**to do**

### **Custom Domain**

[greeffer.com](https://greeffer.com)

### *Social accounts*

- x.com/goodgreeff
- github.com/modster
- linkedin.com/in/emgreeff
### *Company*
*You can **@mention** the company’s GitHub organization to link it.*

[@DataDrivenSoftware](https://datadash.cloud)
### *Location* 

Ontario, Canada
*Time Zone:* America/Toronto

### *Profile picture*

 ![@modster](https://avatars.githubusercontent.com/u/893946?s=400&u=7d63e8c0263d2f02bc3a74d96536d6b56abc8578&v=4)

### *Pinned Repos*

1. Android Camera
2. DataViz
3. GH Profile Template
4. AI
5. WebGL/WebGPU
6. PineScript (TradingView's DSL)

### *Contributions & activity*
Enabling this will make public your contributions and activity from your GitHub profile and from social features like followers, stars, feeds, leaderboards and releases.

- following: who and why
- project I'm stargazng
- followers

### *Achievements*

- Badges
- Contribution Graph
- GitHub Developer Program

### *Support Email Address*
An email address where GitHub users can contact you for support.

- support@datadash.cloud

### *Product or company website*
The URL for the product, company, or service that integrates with GitHub.

[datadash.cloud](https://datadash.cloud)

### *Jobs profile* 
Available for hire

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
