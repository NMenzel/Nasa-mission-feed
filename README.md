# NASA Missions test-project

1H Project, which displays data about NASA missions, to test my Next.js Starter Template. 
This Project was bootstrapped with Next.js Starter Template.

THIS VERSION IS ONLY FOR NEXTJS 12

This includes Next.js' built-in support for Global CSS, CSS Modules, TypeScript and a git/pre-commit hook with typechecking.

The git/pre-commit hook is created with husky & lint-staged.

**What it does:**

- Run the tsc command to make sure there are no TypeScript errors
- Run the eslint command to make sure there are no ESLint errors
- Format the code using prettier

uses lint-staged, which runs your lint scripts only when necessary, and only on the necessary files.

## Frameworks

**Design:**

- Taildwindcss
- Ant Design
- Ant Design Icons

**Data Fetching:**

- Axios
- React query

**Dates:**

- moment

## How to Use

To work on dev first install husky

```bash
yarn husky install
```

To start the development server, run the following command:

```bash
yarn dev
```

To create a production build, run the following command:

```bash
yarn build
```

## Testing

To start unit tests, run the following command:

```bash
yarn test
```

To start e2e tests, run the following command:

```bash
yarn e2e
```

## ANTD Config Vars

To use antd config vars, you need to use an less compiler and change the next js config file.
!Only use this in production, because it slows down the dev server performance!

change next.config.js file to this:

```bash
// LESS COMPILER FOR ANT DESIGN CUSTOM TEMPLATES VARS
module.exports = withLess({
     lessLoaderOptions: {
         /* ... */
     },
 });
const withLess = require("next-with-less");
```

see styles/global.less for more information

Known issues: lint-staged
lint staged runs on all staged files. By the first commit,
the runner will have problems with the test fles, config files, etc.

Hack: comment out the following in first commit and redo after commit

.husky / pre-commit

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

#see lint-staged.config.js
#yarn lint-staged -- comment this line in first commit then uncommend it
```

Copyright © 2023 Niklas Menzel-Sandic. All rights reserved.
