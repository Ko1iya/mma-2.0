import { createRoot } from "react-dom/client"
import { App, Loader } from "./App"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./errorPage"

import { Suspense, useState } from "react"
import Branches from "./pages/Branches/Branches"
import MyApp from "./pages/MyApp/MyApp"

// const [location, setLocation] = useState("start")

// function handlerChangeLocation(param: string) {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth", // опционально для плавного скролла
//   })
//   setLocation(param)
// } // для передачи в компонент Branches

// function editLocation() {
//   setLocation("start")
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth", // опционально для плавного скролла
//   })
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/angarsk",
        element: <MyApp location='angarsk' />,
      },
      {
        path: "/meget",
        element: <MyApp location='meget' />,
      },
      {
        path: "/kuda",
        element: <MyApp location='kuda' />,
      },
      {
        path: "/zima",
        element: <MyApp location='zima' />,
      },
      {
        path: "/urik",
        element: <MyApp location='urik' />,
      },
    ],
    errorElement: <ErrorPage />,
  },
])

const root = document.getElementById("root")

if (!root) {
  throw new Error("root not found")
}

const container = createRoot(root)

container.render(<RouterProvider router={router} />)
