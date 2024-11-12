import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import SideBar from "./sideBar/SideBar";
import { Suspense } from "react";


const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar />

      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header />

        {/* <!-- ===== View Content Start ===== --> */}
        <main className="flex-1 pt-16 px-5">
          <Suspense fallback={<h1>Loading</h1>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default Layout;
