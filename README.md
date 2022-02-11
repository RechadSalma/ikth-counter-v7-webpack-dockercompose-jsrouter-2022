# ikth-counter-v7-webpack-dockercompose-jsrouter-2022

## Status

- 20220206: _completed most of what I wanted to achieve, & am pleased in general_

---

## Mission

- Wanted to test out: webpack / react / react-router / redux / sass / redux devtools / webpack image optimization plugins / Netlify form submission (contact form)
- Three route paths:
  - `/` = counter page with three working redux buttons
  - `/side` = display compress imaged
  - `/form` = contact form
  - `/*` = error page
- working counter with redux
- use of SASS within my webpack template
- optimized image (jpeg),
- deploy on Netlify using their configuration file

---

## Main technology / libraries / plugins used

- webpack (my template)
- javascript
- react
- react-router
- redux
  - @redux-devTools/extension
  - redux-thunk
- SASS
- image-minimizer-webpack-plugin / Imagemin / imagemin-mozjpeg
  - my jpeg file from 232kb to 11kb with 5% quality on production mode
- `netlify.toml` - Netlify configuration file to redirect static routes (react-router) & basic setup
- Netlify form submission as contact form for live site

  ***

  ## [ikth-counter-v7-webpack-dockercompose-jsrouter-2022](https://github.com/RechadSalma/ikth-counter-v7-webpack-dockercompose-jsrouter-2022.git)
