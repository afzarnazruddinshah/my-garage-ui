import React from "react";
import { ReactElement } from "react";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FireTruckIcon from "@mui/icons-material/FireTruck";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import GroupIcon from "@mui/icons-material/Group";
import PaymentIcon from "@mui/icons-material/Payment";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  ROUTE_ASSIGNMENTS,
  ROUTE_CUSTOMERS,
  ROUTE_DASHBOARD,
  ROUTE_LOGOUT,
  ROUTE_MY_GARAGE,
  ROUTE_TECHNICIANS,
  ROUTE_TRANSACTIONS,
  ROUTE_VEHICLES,
} from "@/_utils/routes";

export interface IMenuListItem {
  title: string;
  icon: ReactElement<any>;
  route: string;
}

export const appItem: IMenuListItem = {
  title: "My Garage",
  icon: <WarehouseIcon fontSize="large" />,
  route: "/",
};
export const primaryMenuItems: IMenuListItem[] = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    route: ROUTE_DASHBOARD,
  },
  {
    title: "My Garage",
    icon: <FireTruckIcon />,
    route: ROUTE_MY_GARAGE,
  },
  {
    title: "Technicians",
    icon: <EngineeringIcon />,
    route: ROUTE_TECHNICIANS,
  },
  {
    title: "Vehicles",
    icon: <TwoWheelerIcon />,
    route: ROUTE_VEHICLES,
  },
  {
    title: "Customers",
    icon: <GroupIcon />,
    route: ROUTE_CUSTOMERS,
  },
];

export const secondaryMenuItems: IMenuListItem[] = [
  {
    title: "Assignments",
    icon: <AssignmentIcon />,
    route: ROUTE_ASSIGNMENTS,
  },
  {
    title: "Transactions",
    icon: <PaymentIcon />,
    route: ROUTE_TRANSACTIONS,
  },
  {
    title: "Logout",
    icon: <LogoutIcon />,
    route: ROUTE_LOGOUT,
  },
];
