import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import SignUp from "./pages/SignUp"
import { UserProvider } from './redux/UserContext';
import {GlobalStyles} from "./assets/globalStyle"
import Home from "./pages/Home"


function App() {
  return (
    <UserProvider>
          <GlobalStyles/>

      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </UserProvider>);
}

export default App;
