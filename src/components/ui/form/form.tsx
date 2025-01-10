import { Button, Card, TextField, Typography } from "@mui/material";
import { FC } from "react";

export const FormUI:FC = () => {
    return(
        <Card sx={{
            my:{xs:5,md:7},
            mx:{xs:5, md: 30},
            p:{xs:2, sm:4},
            transition:"margin 500ms, padding 500ms",
            display:'flex',
            flexDirection:'column',
            gap:{xs: 2, sm:3}
        }}>
        <Typography sx={{
            color:"#FFF",
            textAlign:"center",
            fontSize:{xs:20, sm:40}
            }}
            variant="h3">Авторизация</Typography>
        <TextField id="outlined-basic" label="Логин" variant="outlined" required/>
        <TextField id="outlined-basic" label="Пароль" variant="outlined" type="password" required/>
        <Button variant="outlined">Войти</Button>
        </Card>
    )
}