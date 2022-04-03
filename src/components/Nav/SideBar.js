import "./SideBar.scss";
import SideBarItem from "./SideBarItem";

function SideBar({ sidebarOpen, setSidebarOpen }) {
  return (
    <div class={"sideBar " + (sidebarOpen && "active")}>
      <ul>
        <SideBarItem setSidebarOpen href="#intro" text="Intro" />
        <SideBarItem setSidebarOpen href="#about" text="About" />
        <SideBarItem setSidebarOpen href="#work" text="My Work" />
        <SideBarItem setSidebarOpen href="#footer" text="Footer" />
      </ul>
    </div>
  );
}

export default SideBar;
