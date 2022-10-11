import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import Topics from "./Components/Topics/Topics";
import Main from "./Layout/Main";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/home", element: <Home /> },
        { path: "/topics", element: <Topics /> },
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
