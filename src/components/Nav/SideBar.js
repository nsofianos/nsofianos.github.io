import "./SideBar.scss";
import SideBarItem from "./SideBarItem";

function SideBar({ sidebarOpen, setSidebarOpen }) {
  return (
    <div className={"sideBar " + (sidebarOpen && "active")}>
      <ul>
        <SideBarItem setSidebarOpen href="#intro" text="Intro" />
        <SideBarItem setSidebarOpen href="#projects" text="Projects" />
        <SideBarItem setSidebarOpen href="#skills" text="Skills" />
        <SideBarItem setSidebarOpen href="#contact" text="Contact" />
      </ul>
    </div>
  );
}

export default SideBar;
