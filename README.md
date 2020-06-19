## 🐕 Random Dog App

Randomly generate 8 dog images or videos

DEMO: https://eggtronic.github.io/random-dog/

Due to limited time (preparing exam), I did not handle the possible errors such as failed to get data.

---
## ⚙️ Features
- Layout -> pure css in App.css
- Responsive view -> Media query
- Get Data -> use fetch API to fetch data
- Two components (function components with hook)
  - BoxContainer: 
    - fetch the urls and pass them to Box components
    - It has a fixed button at the buttom of the viewport to re-fetch urls
  - Box
    - visualize media based on the file type
- Utils contian 2 functions
  -  fetchData -> return 8 valid urls (retry when file type is not valid)
  -  checkType -> check if the file type is valid or not

---
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

There are 2 unit test examples specified in src/App.test.js
Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.