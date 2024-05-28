import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router.jsx";
import "swiper/css";
import "swiper/css/pagination";
import { HelmetProvider } from "react-helmet-async";
import { MyContextProvider } from "./Context/MyContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MyContextProvider>
        <HelmetProvider>
          <RouterProvider router={Router} />
        </HelmetProvider>
      </MyContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
