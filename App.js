import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import Body from "./src/component/Body";
import About from "./src/component/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ContactUs from "./src/component/ContactUs";
import Error from "./src/component/Error";
import RestaurantMenu from "./src/component/RestaurantMenu";
import Shimmer from "./src/component/Shimmer";

// import Grocery from "./src/component/Grocery";

// React.createElement =>object=> HTMLelement(render)l
// const heading = React.createElement("h1", { id: "heading" }, "Hello Shivangi ");
// console.log(heading);
// jsx => (transpilled before it reaches the javascript engine )and it is done by PARCEL and parcel uses babel
// babel takes jsx and compiled or convert into the code that js engine or browser understand .

const Grocery = lazy(() => import("./src/component/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contactUs", element: <ContactUs /> },
      {
        path: "/grocery",
        element: (
          <Suspense
            fallback={<h1>Loading..................................</h1>}
          >
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
