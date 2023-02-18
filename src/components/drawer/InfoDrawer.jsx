import { Box, Drawer, Typography,styled } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from "./Profile";

const drawerStyle = {
    left: 20,
    top: 23,
    height: '95%',
    width: '30%'
}

const Header = styled(Box)`
    background: #008069;
    height: 107px;
    color:#FFFFFF;
    display:flex;
    & > svg, & > p {
        margin-top: auto;
        padding: 15px;
        font-weight: 600;
    }
`
const Component = styled(Box)`
    background: #ededed;
    height: 85%
`
const Text = styled(Typography)`
    font-size: 18px;
`
const InfoDrawer= ({open, setOpen}) => {

    const val =1;
    const handleClose = ({val})=> {
        setOpen(false);
    }
    return(
        <Drawer
        open={open}
        onClose={handleClose}
        PaperProps = {{sx: drawerStyle}}
        style = {{zIndex: 1500}}
        >
            <Header>
                <ArrowBackIcon onClick= {() => setOpen(false)}/>
                <Text>Profile</Text>
            </Header>
            <Component>
                <Profile/>
            </Component>
        </Drawer>
    )
}
export default InfoDrawer;