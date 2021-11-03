import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '../src/routes';
import GlobalStyle from "./styles/global";
function App() {

  return (
    <Router>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;



