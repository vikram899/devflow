import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <div>
        LeftSideBar
        <section>
          <div>{children}</div>
        </section>
        RightSideBar
      </div>
    </main>
  );
};

export default Layout;
