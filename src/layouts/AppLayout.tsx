import AppFooter from "../components/AppFooter";
import AppNavbar from "../components/AppNavbar";

interface LayoutTypes {
  children: React.ReactNode;
}

const AppLayout = ({ children }: LayoutTypes) => {
  return (
    <div>
      <div>
        <AppNavbar />
      </div>
      <div>{children}</div>
      <div>
        <AppFooter />
      </div>
    </div>
  );
};

export default AppLayout;
