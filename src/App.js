import logo from './logo.svg';
import './App.css';
import Messanger from './components/Messanger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { clientId } from './constants/constant';
import AccountProvider from './context/AccountProvider';


function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messanger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
