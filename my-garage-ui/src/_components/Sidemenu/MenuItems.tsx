import React from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import {
  appItem,
  IMenuListItem,
  primaryMenuItems,
  secondaryMenuItems,
} from "./listItems";
import Link from "next/link";

const MenuItems = () => (
  <>
    <Box className="theme">
      <List>
        <ListItem key={"title-item"}>
          <Link prefetch={false} href={"/"}>
            <ListItemButton>
              <ListItemIcon>{appItem.icon}</ListItemIcon>
              <ListItemText>{appItem.title}</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        {primaryMenuItems.map((item: IMenuListItem) => (
          <ListItem key={item.title}>
            <Link prefetch={false} href={item.route}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {secondaryMenuItems.map((item: IMenuListItem) => (
          <ListItem key={item.title}>
            <Link prefetch={false} href={item.route}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                {item.title}
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  </>
);

export default MenuItems;
