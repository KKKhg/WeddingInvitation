import './App.css';

function App() {
  return (
    <div>
        자기 언능 와용
        <img src={require('./assets/images/zippo.jpeg')} width="100%" alt="zippo"/>
        <img src={'http://49.50.164.104:8000/pic/zippo.jpeg'} width="100%" alt="zippo"/>
    </div> 
  );
}

export default App;
