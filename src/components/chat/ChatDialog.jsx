import { Dialog,Box, styled } from "@mui/material";
import Menu from "./menu/Menu";
import EmptyChat from "./chatWindow/EmptyChat"
import ChatBox from "./chatWindow/ChatBox";

const dialogStyle = {
    height: '95%',
    margin: '20px',
    width: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden',
    borderRadius: 0
}

const Component = styled(Box)`
    display:flex;
`
const LeftComponent = styled(Box)`
    min-width: 450px;
`
const RightComponent = styled(Box)`
    width: 75%;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0,0,0,0.14);
`
const ChatDialog = () =>{
    return(
        <Dialog open={true} PaperProps={{sx:dialogStyle}} hideBackdrop={true} maxWidth={'md'}>
            <Component>
                <LeftComponent>
                    <Menu/>
                </LeftComponent>
                <RightComponent>
                    <ChatBox/>
                </RightComponent>
            </Component>
        </Dialog>
    )
}
export default ChatDialog;