# Issue Tracker

This is an issue tracker application built using Node.js and EJS. It allows users to track issues/bugs for different projects. The application provides a user interface to create projects, view project details, filter issues, and create new issues

## Features

- Neat UI with a home page showing a list of projects
- Ability to create a new project with name, description, and author
- Project detail page to view bugs related to a specific project
- Filter issues by multiple labels, author, and search by title and description
- Create new issues for a project with a title, description, labels, and author

## Projects page

![screen](/public/img/project.jpg)

## Issues page

![screen](/public/img/issue.jpg)

## Filter page

![screen](/public/img/filter.jpg)

## Folder structure

- 📂 **Issue\-Tracker\-NJS**
  - 📂 **controllers**
    - 📄 [homeController.js](controllers/homeController.js)
    - 📄 [issueController.js](controllers/issueController.js)
    - 📄 [projectController.js](controllers/projectController.js)
  - 📂 **models**
    - 📄 [issueModel.js](models/issueModel.js)
    - 📄 [projectModel.js](models/projectModel.js)
  - 📂 **public**
    - 📂 **css**
      - 📄 [footer.css](public/css/footer.css)
      - 📄 [header.css](public/css/header.css)
      - 📄 [home.css](public/css/home.css)
      - 📄 [issue.css](public/css/issue.css)
      - 📄 [layout.css](public/css/layout.css)
    - 📂 **img**
    - 📂 **js**
  - 📂 **routes**
    - 📄 [index.js](routes/index.js)
    - 📄 [issueRoutes.js](routes/issueRoutes.js)
    - 📄 [projectRoutes.js](routes/projectRoutes.js)
  - 📂 **views**
    - 📄 [\_filterIssueLabels.ejs](views/_filterIssueLabels.ejs)
    - 📄 [\_footer.ejs](views/_footer.ejs)
    - 📄 [\_header.ejs](views/_header.ejs)
    - 📄 [\_issueLabels.ejs](views/_issueLabels.ejs)
    - 📄 [home.ejs](views/home.ejs)
    - 📄 [issue.ejs](views/issue.ejs)
    - 📄 [layout.ejs](views/layout.ejs)
  - 📄 [.eslintrc.json](.eslintrc.json)
  - 📄 [.gitignore](.gitignore)
  - 📄 [.prettierrc](.prettierrc)
  - 📄 [app.js](app.js)
  - 📄 [config.env](config.env)
  - 📄 [package\-lock.json](package-lock.json)
  - 📄 [package.json](package.json)
  - 📄 [readme.md](readme.md)
  - 📄 [server.js](server.js)

## Installation And Usage

1. Git clone https://github.com/P666R/Issue-Tracker-NJS.git
2. Npm install to install all the dependencies
3. Create config.env file in the root of project and add following data

- PORT=[Your Port]
- DATABASE=[Your DB url]
- DATABASE_PASSWORD=[Your DB password]

4. Start the application: npm run start:dev

Application will be accessible at http://localhost:8000
