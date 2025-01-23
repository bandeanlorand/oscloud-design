import { Outlet } from "react-router-dom";
import { SessionProvider } from "./context/SessionContext";
import Header from "./components/Header/Header";

const Providers = () => {
  return (
    <SessionProvider>
      <Header />
      <Outlet />
    </SessionProvider>
  );
};

export default Providers;
