import './App.css';
import { visitorCheck } from "./network";

function App() {
    visitorCheck();
    return (
        <div className="wrapper">
            Test
            <img src={require('./assets/images/zippo.jpeg')} width="100%" alt="zippo"/>
        </div> 
    );
}

export default App;
