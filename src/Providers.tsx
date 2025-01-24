import { Outlet } from "react-router-dom";
import { SessionProvider } from "./context/SessionContext";
import Header from "./components/Header/Header";
import SideMenuWidget from "./components/SideMenuWidget/SideMenuwidget"; // Import the Menu

const Providers = () => {
  return (
    <SessionProvider>
      <Header />
      <div className="main-container d-flex">
        <SideMenuWidget />
        <div className="page-content">
          <Outlet /> {/* Dynamic content will load here */}
        </div>
      </div>
    </SessionProvider>
  );
};

export default Providers;
