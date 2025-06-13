import { Suspense } from "react";
import { Outlet } from "react-router";
import Fallbacks from "@components/skeletons/fallbacks";
import AppHeader from "@components/layout/app.header";
import AppFooter from "@components/layout/app.footer";

function Layout() {
  return (
    <div>
      <AppHeader />
      <Suspense fallback={Fallbacks.Page}>
        <Outlet />
      </Suspense>
      <AppFooter />
    </div>
  );
}

export default Layout;
