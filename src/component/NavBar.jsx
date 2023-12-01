import React from "react";
import { AppBar, Button, MenuItem, Stack, Toolbar, Typography, useMediaQuery, useTheme, Link, } from "@mui/material";
import MenuBar from "./MenuBar";

const pages = ["Home", "Login"];

function NavBar() {
    const isMatch = useMediaQuery(useTheme().breakpoints.down("md"));
    

    return (
        <div>
            <AppBar  >
            
                <Toolbar >
                    {
                        isMatch ? (<>
                            <MenuBar />
                        </>) : (<>
                            <Stack sx={{ marginLeft: "auto" }} spacing={4} direction="row" alignItems="center" >

                                {pages.map((page) => (
                                    <MenuItem key={page} >
                                        <Typography textAlign="center">
                                            <Link style={{ textDecoration: "none", color: "white" }}   href={`/${page.toLowerCase()}`}>{page}</Link>
                                            
                                        </Typography>
                                    </MenuItem>
                                ))}



                            </Stack>
                            <Button sx={{ marginLeft: "auto" }} variant="contained">Login</Button>
                        </>)
                    }

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;