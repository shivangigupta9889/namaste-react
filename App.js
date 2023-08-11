import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import Body from "./src/component/Body";
import About from "./src/component/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserContext from "./src/utils/UserContext";
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
  const [userName,setUserName]=useState();
  useEffect(()=>{
    const data={
      name:"Shivangi Gupta ",
    };
      setUserName(data.name)
    
  },[]);
  return (
    <UserContext.Provider value={{loggedInUser:userName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
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
