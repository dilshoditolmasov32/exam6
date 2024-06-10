import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { NavLink } from "react-router-dom";
import { MdProductionQuantityLimits } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaTasks } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";

import "./index.css";

const item = {
  py: "2px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

export default function Navigator(props) {
  const { ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding className="navigator-dashboard">
        <ListItem
          sx={{
            ...item,
            ...itemCategory,
            fontSize: 22,
            color: "#fff",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span>
            <LuLayoutDashboard />
          </span>
          Dashboard
        </ListItem>

        <ul className="navigator">
          <NavLink to="/dashboard">
            <li>
              <span>
                <MdProductionQuantityLimits />
              </span>
              Products
            </li>
          </NavLink>
          <NavLink to="/dashboard/tasks">
            <li>
              <span>
                <FaTasks />
              </span>
              Tasks
            </li>
          </NavLink>
          <NavLink to="/">
            <li className="logout">
              <span>
                <RiLogoutCircleLine />
              </span>
              Logout
            </li>
          </NavLink>
        </ul>
      </List>
    </Drawer>
  );
}
