import MenuIcon from '@mui/icons-material/Menu';
import {  IconButton, Menu, MenuItem,Typography,Link } from "@mui/material";
import React, { useState } from "react";


const pages = ["Home","About" ,"Login","Service"];


export default function MenuBar() {
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);
  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  }
  const handleClose = () => {
    setAnchor(null);
  }
  return (
    
      <React.Fragment>
          <IconButton sx={{color: "white",marginLeft:"auto"}} onClick={handleClick}
            id="a-b"
            aria-haspopup="true" aria-expanded={open ? "true" : undefined}>
            <MenuIcon />
          </IconButton>


          <Menu anchorEl={anchor} 
          open={open}
           MenuListProps={{ "aria-labelledby": "a-b" }
           
           }
            onClose={handleClose}>
            {pages.map((page) => (
                                    <MenuItem key={page} >
                                        <Typography textAlign="center">
                                            <Link style={{ textDecoration: "none", color: "Black" }}   href={`/${page.toLowerCase()}`}>{page}</Link>
                                            
                                        </Typography>
                                    </MenuItem>
                                ))}

          </Menu>
          </React.Fragment>

   
  )
}