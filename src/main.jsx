import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx"
import Contact from './components/Contact/Contact.jsx'
import Services from './components/Services/services.jsx'
import 'tailwindcss/tailwind.css';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/6th-Multipageawebsite-using_Tailwind/" element={<App/>}>
      <Route path="/6th-Multipageawebsite-using_Tailwind/" element={<Home />} />
      <Route path="/6th-Multipageawebsite-using_Tailwind/about" element={<About />} />
      <Route path="/6th-Multipageawebsite-using_Tailwind/contact" element={<Contact />} />
      <Route path="/6th-Multipageawebsite-using_Tailwind/services" element={<Services />} />
    </Route>
  )
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "About",
//         element: <About/> ,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
