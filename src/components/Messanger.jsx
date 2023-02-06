import LoginDialog from "./account/LoginDialog"
import { AppBar, Toolbar, styled, Box} from "@mui/material"
import ChatDialog from "./chat/ChatDialog"
import { useContext } from "react"
import { AccountContext } from "../context/AccountProvider"

const LoginHeader = styled(AppBar)`
    height: 220px;
    background-color: #00bfa5;
    box-shadow: none
`
const Component = styled(Box)`
    height: 100vh;
    background-color: #DCDCDC
`
const ChatWindowHeader = styled(AppBar)`
    height: 100px;
    box-shadow: none
`
const Messanger = ()=>{
    const {account} = useContext(AccountContext);
    return(
        <Component>
            {
                account? 
                <>
                    <ChatWindowHeader>
                        <Toolbar>
                            
                        </Toolbar>
                    </ChatWindowHeader>
                    <ChatDialog/>
                </>:
                <>
                    <LoginHeader>
                        <Toolbar>
                            
                        </Toolbar>
                    </LoginHeader>
                    <LoginDialog /> 
                </>
            }
        </Component>
    )
}
export default Messanger