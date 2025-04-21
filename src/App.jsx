import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Features from "./pages/Detailpage/Features";
import Services from "./pages/Services/Service";
import Bloglist from "./pages/Blog/Blog";
import BlogDetail from "./pages/Blog/BlogDetail";
import Contact from "./pages/Contact/Contact";

function App() {
  // http://localhost:5173
  // http://localhost:5173/ - index
  // http://localhost:5173/about  - path about
  // http://localhost:5173/contact  - path contact
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/features/:slug" element={<Features />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Bloglist />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
