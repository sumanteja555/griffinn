import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Component Imports
import RootLayout from "./pages/RootLayout";
import Home from "./components/Home/Home.jsx";
import AboutUs from "./components/AboutUs/AboutUs";
import Gallery from "./components/Gallery/Gallery.jsx";
import ContactUs from "./components/ContactUs/ContactUs";
import AdventureActivities from "./pages/AdventureActivities.jsx";
import NightCamps from "./pages/NightCamps.jsx";
import MountainTreks from "./pages/MountainTreks.jsx";
import EventPage from "./pages/EventPage.jsx";
import Policies from "./components/Policies/Policies.jsx";
import BookNow from "./components/BookNow/BookNow.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/adventureactivities", element: <AdventureActivities /> },
      { path: "/nightcamps", element: <NightCamps /> },
      { path: "/mountaintreks", element: <MountainTreks /> },
      { path: "/mountaintreks/:eventId", element: <EventPage /> },
      { path: "/booknow", element: <BookNow /> },
      { path: "/policies", element: <Policies /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
