import {
  AccountBox,
  LibraryBooks,
  MoreVert,
  Settings,
} from "@mui/icons-material";
import {
  AppBar,
  Fade,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { AppHeaderProps } from "./types";

export const AppHeaderUI: FC<AppHeaderProps> = ({
  matches,
  handleClick,
  handleClose,
  visible,
  anchorEl
}) => {
  return (
    <AppBar position="static" sx={{ display: "flex", px: 5, py: 2 }}>
      <Toolbar>
        <Typography
          sx={{
            color: "#FFF",
            fontSize: 30,
            flexGrow: 1,
          }}
        >
          ИТиС
        </Typography>
        {matches ? (
          <div>
            <IconButton size="large">
              <Settings />
            </IconButton>
            <IconButton size="large">
              <LibraryBooks />
            </IconButton>
            <IconButton size="large">
              <AccountBox />
            </IconButton>
          </div>
        ) : (
          <div>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={visible ? "long-menu" : undefined}
              aria-expanded={visible ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVert />
            </IconButton>

            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={visible}
              TransitionComponent={Fade}
              
            >
              <MenuItem>
                <IconButton size="large" onClick={handleClose}>
                  <AccountBox />
                </IconButton>
              </MenuItem>
              <MenuItem>
                <IconButton size="large" onClick={handleClose}>
                  <LibraryBooks />
                </IconButton>
              </MenuItem>
              <MenuItem>
                <IconButton size="large" onClick={handleClose}>
                  <Settings />
                </IconButton>
              </MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};
