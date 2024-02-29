import "./Layout.css";
import MainNavigation from "./MainNavigation";
import Sidebar from "./Sidebar";

function Layout(props) {
  return (
    <div className="app">
      <Sidebar className="sidebar" />
      <MainNavigation className="header" />

      <main className="content">{props.children}</main>
    </div>
  );
}

export default Layout;
