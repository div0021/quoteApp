import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthorQuotes from "./components/AuthorQuotes.tsx";
import HomePage from "./components/HomePage.tsx";

const client = new QueryClient();
const router = createBrowserRouter([
  {
    element: (
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    ),
    path: "/",
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: ":author",
        element: <AuthorQuotes />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
