# Vite Production Setup Guide

* Author: Timo Klingler
* Date of creation: 2022-05-12
* Email: timo.klingler@ik.me
* License: [CC0](https://creativecommons.org/share-your-work/public-domain/cc0/)

## A Note To Potential Users

This guide, together with the repository, was made public in case someone else struggled with the same issues as I did when wanting to use `vite` for a project. It consequently describes the setup process which catered to my own personal needs and might not be suited to your specific usecase. Please feel free to make any adjustments to this guide and submit a pull request if you are convinced that it would make it more useful for you or a general public.

## A Note on Licensing

The license was chosen to be as unrestrictive as possible. Do with the repo what you want and do not attribute me for anything please.

## Installation From Scratch with `yarn`

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

  <a rel="license"
     href="http://creativecommons.org/publicdomain/zero/1.0/">
    <img src="http://i.creativecommons.org/p/zero/1.0/88x31.png" style="border-style: none;" alt="CC0" />
  </a>
  <br />
To the extent possible under law, <a rel="dct:publisher" href="https://github.com/madjazz/vite-production-setup">
    <span property="dct:title">Timo Klingler</span></a> has waived all copyright and related or neighboring rights to <span property="dct:title">Vite Production Setup</span>. This work is published from:
<span property="vcard:Country" datatype="dct:ISO3166"
      content="CH" about="https://github.com/madjazz/vite-production-setup" Switzerland</span>.
</p>

