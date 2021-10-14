import './App.css';
import { Card, CardTitle } from 'reactstrap';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Card body inverse style={{backgroundColor:'#333', borderColor:'#333'}}>
        <ToastContainer/>
        
        <CardTitle>
          Hello World
        </CardTitle>
      </Card>
    </div>
  );
}

export default App;
