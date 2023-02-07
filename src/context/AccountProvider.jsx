import { useState } from "react";
import { createContext } from "react";

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
    const [account, setAccount] = useState();
    return(
        <AccountContext.Provider value={{
            account, setAccount
        }}>
            {children}
        </AccountContext.Provider>
    )
}
export default AccountProvider;