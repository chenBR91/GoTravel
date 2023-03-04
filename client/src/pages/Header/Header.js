import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UsersContext from "../../UsersContext";
import "./Header.css";

// Metrial UI
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
// import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
// import Button from "@mui/material/Button";

// Icons
import { DiAndroid } from "react-icons/di";
import { RxHamburgerMenu } from "react-icons/rx";
import { color } from "@mui/system";

// 240
const drawerWidth = 240;

export default function Header() {
  const [openDrawer, setOpenDrawer] = useState(true);
  const { user } = useContext(UsersContext);

  const handleChangeStateDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const menuCategories = ["Map", "users", "mesurement", "mail"];

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            onClick={handleChangeStateDrawer}
            color="inherit"
            edge="start"
            sx={{
              marginRight: 3,
              // ...(open && { display: 'none' }),
            }}
          >
            <RxHamburgerMenu />
          </IconButton>

          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 0 }}>
            GoTravel
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>

          <Typography variant="h7" noWrap component="div" sx={{ flexGrow: 0 }}>
            {user.username}
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        anchor="left"
        open={openDrawer}
        variant="persistent"
      >
        <Toolbar />
        <Box className="box">
          <List>
            {menuCategories.map((category, index) => {
              return (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={`/` + category.toLowerCase()}
                  >
                    <ListItemIcon>
                      <DiAndroid />
                    </ListItemIcon>
                    <ListItemText primary={category} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <Toolbar />
      </Box>

    </Box>
  );
}
