import "./SideBar.scss";

function SideBarItem({ setSidebarOpen, href, text }) {
  return (
    <li onClick={setSidebarOpen}>
      <a href={href}>{text}</a>
    </li>
  );
}

export default SideBarItem;
