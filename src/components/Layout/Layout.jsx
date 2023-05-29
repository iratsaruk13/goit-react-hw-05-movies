import React, { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import { Header } from "./Layout.styled";
import { Navigation } from "./Layout.styled";

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </Navigation>
      </Header>
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />{" "}
        </main>
      </Suspense>
    </>
  );
};

export default SharedLayout;
