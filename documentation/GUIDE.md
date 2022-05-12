# Vite Production Setup Guide

* Author: Timo Klingler
* Date of creation: 2022-05-12
* Last update: 2022-05-12

## Chapter 1: Installation From Scratch with `yarn`

This installation guide focuses on installing `vite` from scratch with `yarn`. If you would rather use a template, follow the official installation guide[^1] of `vite`.

1. Create project directory `vite-production-setup` and run the following command

   ```bash
   yarn init -2
   ```

2. Add `vite` as development dependency to `package.json`

   ```bash
   yarn add -D vite@2.9.9
   ```

3. Install packages locally

   ```bash
   yarn install
   ```

4. Add run scripst for `vite`  in `package.json`

   ```json
   {
     "name": "vite-production-setup",
     "packageManager": "yarn@3.2.0",
     // new
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview"
     },
     //
     "devDependencies": {
       "vite": "2.9.9"
     }
   }
   ```

5. Add a minimum setup to test the development server in the project root folder:

   1. `index.html`. Extended version of the *simplest possible HTML template*[^2]

      ```html
      <!doctype html>
      <html>
        <head>
          <title>This is the title of the webpage!</title>
           <link rel="stylesheet" href="./style.css">
        </head>
        <body>
          <p>This is an example paragraph. Anything in the <strong>body</strong> tag will appear on the page, just like this <strong>p</strong> tag and its contents.</p>
          <script type="module" src="./script.js"></script>
        </body>
      </html>
      ```

   2. `style.css`

      ```css
      body {
        color: red;
      }
      ```

   3. `script.js`

      ```javascript
      const newParagraph = document.createElement('p');
      const newParagraphContent = document.createTextNode(
        'This is a paragraph added by the script for testing'
      );
      newParagraph.appendChild(newParagraphContent);
      
      document.body.appendChild(newParagraph)
      ```

6. Run the development server

   ```bash
   yarn run dev
   ```

[^1]:[Vite Development Team: Scaffolding Your First Vite Project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project), last accessed on 2022-05-12
[^2]: [Fritz, Chris (2014): The Simplest Possible HTML Template](https://gist.github.com/madjazz/5e7bffd7f5e058110515327888136998), last accessed on 2022-05-12

