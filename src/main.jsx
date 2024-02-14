import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import Foods from './pages/foods.jsx'
// import Foods from './pages/foods.jsx'
import './assets/style/index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const Home = React.lazy(()=> import("./pages/Home.jsx"))
const Foods = React.lazy(()=> import("./pages/foods.jsx"))
const AboutUs = React.lazy(()=> import("./pages/about-us.jsx"))
const ContactUs = React.lazy(()=> import("./pages/contact-us.jsx"))

const routes = createBrowserRouter([
  {path:"/", element:<Home/>, errorElement:<h1>Error</h1>},
  {path:"/foods", element:<Foods/>},
  {path:"/about-us", element:<AboutUs/>},
  {path:"/contact-us", element:<ContactUs/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense>
      <RouterProvider router={routes}/>
    </Suspense>
  </React.StrictMode>,
)
