import "./App.scss";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { Provider } from "react-redux";
import store from "./store/store";
import ScrollToTop from "./router/scrollToTop";

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
