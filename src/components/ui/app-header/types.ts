import { MouseEventHandler } from "react"

export type AppHeaderProps = {
    anchorEl:HTMLElement|null,
    matches: boolean,
    handleClick:MouseEventHandler,
    visible:boolean,
    handleClose:MouseEventHandler,
}