import "./App.scss";
import React, { Suspense } from "react";

import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </Suspense>
  );
}

export default App;
