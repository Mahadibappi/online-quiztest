import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import Error from "./Components/Topics/Error/Error";
import Topics from "./Components/Topics/Topics";
import Main from "./Layout/Main";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error />,
      element: <Main />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/home",
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home />,
        },
        {
          path: "/topics",
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Topics />,
        },
        { path: "/statistics", element: <Statistics /> },
        { path: "/blog", element: <Blog /> },
        { path: "/about", element: <About /> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
