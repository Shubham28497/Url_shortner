import { useState } from "react";

import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/landing";
import Dashboard from "./pages/dashboard";
import Auth from "./pages/auth";
import RedirectLink from "./pages/redirect-link";
import Link from "./pages/link";
import UrlProvider from "./context";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/link/:id",
        element: <Link />,
      },
      {
        path: "/:id",
        element: <RedirectLink />,
      },
    ],
  },
]);
function App() {
  return (
    <UrlProvider>
      <RouterProvider router={router} />
    </UrlProvider>
  );
}

export default App;
