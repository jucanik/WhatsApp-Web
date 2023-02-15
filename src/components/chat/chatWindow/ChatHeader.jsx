import { Box, Typography, styled } from "@mui/material";
import {Search, MoreVert} from "@mui/icons-material";
import { defaultProfilePicture } from "../../../constants/constant";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const Header = styled(Box)`
    height: 44px;
    background: #ededed;
    padding: 8px 16px;
    display: flex;
    align-items: center;
`
const Image = styled('img')({
    height: 40,
    width: 40,
    objectFit: 'cover',
    borderRadius: '50%'
});

const Name = styled(Typography)`
    margin-left: 12px !important;
`
const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
        padding: 8px;
        font-size: 24px;
        color: #000;
    }
`
const Status = styled(Typography)`
    margin-left: 12px !important;
    font-size: 12px;
    color: rgb(0,0,0,0.6);
`
const ChatHeader = () => {
    const {account} = useContext(AccountContext);
    return(
        <Header>
           <Image src={defaultProfilePicture} alt="dp"/> 
           <Box>
                <Name>{account.name}</Name>
                <Status>Online Status</Status>
           </Box>
           <RightContainer>
                <Search/>
                <MoreVert/>
           </RightContainer>
        </Header>
    )
}
export default ChatHeader;