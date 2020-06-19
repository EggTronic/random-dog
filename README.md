## 🐕 Random Dog App

Randomly generate 8 dog images or videos

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

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.