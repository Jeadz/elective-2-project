import React from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  TeamOutlined,
  AppstoreOutlined,
  FolderOpenOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import "./MenuSider.scss";

export const MenuSider = (props) => {
  const { Sider } = Layout;
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { key: "users", icon: <HomeOutlined />, label: "Gestión de usuarios" },
    {
      key: "products",
      icon: <FolderOpenOutlined />,
      label: "Portafolio de servicios",
    },
    {
      key: "clients",
      icon: <TeamOutlined />,
      label: "Clientes",
      subMenu: [
        { key: "clients/list",  icon: <TeamOutlined />, label: "Lista de clientes" },
        { key: "clients/new",  icon: <TeamOutlined/>, label: "Nuevo cliente" },
      ],
    },
    {
      key: "services",
      icon: <AppstoreOutlined />,
      label: "Servicios",
      subMenu: [
        { key: "services/list",  icon: <TeamOutlined />, label: "Listar trabajos" },
        { key: "services/new",  icon: <TeamOutlined />, label: "Crear trabajo" },
      ],
    },
    {
      key: "news",
      icon: <NotificationOutlined />,
      label: "Gestión de noticias",
    },
  ];

  const navigateTo = (e) => {
    const path = e.key;
    console.log(path);
    navigate(path);
  };

  const itemRender = (item, index) => {
    const { icon, label, subMenu } = item;
    const isSelected = location.pathname === item.key;
    if (subMenu) {
      return (
        <Menu.SubMenu key={item.key} icon={icon} title={label}>
          {subMenu.map((subMenuItem) => (
            <Menu.Item key={subMenuItem.key} onClick={navigateTo}>
              {subMenuItem.label}
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item
        key={item.key}
        icon={React.cloneElement(icon, { className: "menu-item-icon" })}
        className={
          isSelected
            ? "ant-menu-item ant-menu-item-selected"
            : "ant-menu-item"
        }
      >
        {label}
      </Menu.Item>
    );
  };
  return (
    <Sider className="menu-sider" collapsed={props.menuCollapsed}>
      <Menu
        mode="inline"
        onClick={navigateTo}
        defaultSelectedKeys={[location.pathname]}
        defaultOpenKeys={menuItems
          .filter((item) => item.subMenu)
          .map((item) => item.key)}
      >
        {menuItems.map((item) => itemRender(item))}
      </Menu>
    </Sider>
  );
};
