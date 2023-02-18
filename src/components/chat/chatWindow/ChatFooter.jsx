import {EmojiEmotionsOutlined} from '@mui/icons-material';
import {AttachFileOutlined, Mic} from '@mui/icons-material';
import { Box, InputBase, styled } from '@mui/material';

const Container = styled(Box)`
    height: 55px;
    background: #ededed;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 15px;
    & > * {
        margin: 5px;
        
    }
`

const Search = styled(Box)`
    background-color: #FFFFFF;
    border-radius: 18px;
    width: 80%;
`
const InputField = styled(InputBase)`
   margin-left: 40%;
`
const ChatFooter = () => {
    return (
        <Container>
            <EmojiEmotionsOutlined/>
            <AttachFileOutlined/>
            <Search>
                <InputField placeholder='Type Your Message'/>
            </Search>
            <Mic/>
        </Container>
    )
}

export default ChatFooter;