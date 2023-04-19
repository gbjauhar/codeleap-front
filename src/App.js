import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import SignUp from "./components/signUp"
import { UserProvider } from './redux/UserContext';
import {GlobalStyles} from "./assets/globalStyle"


function App() {
  return (
    <UserProvider>
          <GlobalStyles/>

      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
        </Routes>
      </Router>
    </UserProvider>);
}

export default App;
