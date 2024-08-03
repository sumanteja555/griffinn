import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Component Imports
import RootLayout from "./pages/RootLayout";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./components/Home/Home.jsx")); //home page import
const AboutusPage = lazy(() => import("./components/AboutUs/AboutUs.jsx")); //about us page import
const GallerPage = lazy(() => import("./components/Gallery/Gallery.jsx")); //gallery page import
const ContactusPage = lazy(() =>
  import("./components/ContactUs/ContactUs.jsx")
); //contact us page import
const AdventureparkPage = lazy(() => import("./pages/AdventurePark.jsx")); //adventure activities page import
const NightscampsPage = lazy(() => import("./pages/NightCamps.jsx")); //nightcamps page import
const MountaintreksPage = lazy(() => import("./pages/MountainTreks.jsx")); //mountain treks imports
const MountaintreksEventPage = lazy(() =>
  import("./pages/MountaintreksEventPage.jsx")
); //mountain treks event page import
const WeekendgatewayPage = lazy(() => import("./pages/WeekendGateway.jsx")); //weekend gateway import
const WeekendgatewayEventPage = lazy(() =>
  import("./pages/WeekendgatewayEventPage.jsx")
);
const BooknowPage = lazy(() => import("./components/BookNow/BookNow.jsx")); //booknow component import
const PoliciesPage = lazy(() => import("./components/Policies/Policies.jsx")); //policies page import
const VolunteerPage = lazy(() =>
  import("./components/Volunteer/Volunteer.jsx")
); //volunteer page import

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/aboutus",
        element: (
          <Suspense>
            <AboutusPage />
          </Suspense>
        ),
      },
      {
        path: "/gallery",
        element: (
          <Suspense>
            <GallerPage />
          </Suspense>
        ),
      },
      {
        path: "/contactus",
        element: (
          <Suspense>
            <ContactusPage />
          </Suspense>
        ),
      },
      {
        path: "/adventurepark",
        element: (
          <Suspense>
            <AdventureparkPage />
          </Suspense>
        ),
      },
      {
        path: "/nightcamps",
        element: (
          <Suspense>
            <NightscampsPage />
          </Suspense>
        ),
      },
      {
        path: "/mountaintreks",
        children: [
          {
            index: true,
            element: (
              <Suspense>
                <MountaintreksPage />
              </Suspense>
            ),
          },
          {
            path: ":eventId",
            element: (
              <Suspense>
                <MountaintreksEventPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/weekendgateway",
        children: [
          {
            index: true,
            element: (
              <Suspense>
                <WeekendgatewayPage />
              </Suspense>
            ),
          },
          {
            path: ":eventId",
            element: (
              <Suspense>
                <WeekendgatewayEventPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/booknow",
        element: (
          <Suspense>
            <BooknowPage />
          </Suspense>
        ),
      },
      {
        path: "/volunteer",
        element: (
          <Suspense>
            <VolunteerPage />
          </Suspense>
        ),
      },
      {
        path: "/policies",
        element: (
          <Suspense>
            <PoliciesPage />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
