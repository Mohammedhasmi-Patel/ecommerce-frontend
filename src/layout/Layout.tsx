import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
