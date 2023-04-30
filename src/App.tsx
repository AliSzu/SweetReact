import "./App.scss";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, useLocation } from "react-router-dom";
import router from "./router/router";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
