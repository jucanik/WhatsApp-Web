import { useState } from 'react';
import {MoreVert} from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';
import InfoDrawer from '../../drawer/InfoDrawer';

const HeaderMenu = () => {
    const [open, setOpen] = useState(null);
    const [openProfile, setOpenProfile] = useState(false);

    const handleOpenProfile = ()=>{
        setOpenProfile(true);
    }
    const handleClose= () =>{
        setOpen(null);
    }
    const handleClick= (e) =>{
        setOpen(e.currentTarget);
    }
    return (
        <>
            <MoreVert onClick={handleClick}/>
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorE1={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin = {{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuItem onClick={() => {handleClose(); handleOpenProfile()}}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
                <InfoDrawer open={openProfile} setOpen={setOpenProfile}/>
            </Menu>
        </>
    )
}
export default HeaderMenu;