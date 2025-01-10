import { FC, MouseEvent, useState } from "react";
import { AppHeaderUI } from "../ui/app-header";
import { useMediaQuery, useTheme } from "@mui/material";
export const AppHeader:FC = () => {
    const theme = useTheme()
const matches = useMediaQuery(theme.breakpoints.up('sm'))
console.log(matches)
const [anchorEl, setAnchorEl] = useState<HTMLElement|null>(null);
const visible = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    return(
        <AppHeaderUI anchorEl={anchorEl} visible={visible} handleClick={handleClick} handleClose={handleClose} matches={matches}/>
    )
}