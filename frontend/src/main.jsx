import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home/Home.jsx'
import Participants from "./pages/Participants/Participants.jsx";
import Registration from "./pages/Registration/Registration.jsx";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/registration/:eventId",
    element: <Registration />
  },
  {
    path: "/participants/:eventId",
    element: <Participants />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
