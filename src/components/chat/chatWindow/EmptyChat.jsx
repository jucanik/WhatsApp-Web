import { Box, styled } from "@mui/material";
import { emptyChatImage } from "../../../constants/constant";

const Image = styled('img')({
    width:800,
    marginTop: 100,
    marginLeft: 100
})
const EmptyChat = () => {
    return(
        <Box>
            <Box>
                <Image src={emptyChatImage} alt="image"/>
            </Box>
        </Box>
    )
}
export default EmptyChat;