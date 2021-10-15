import './App.css';
import { Card, CardTitle, Container , Row, Col } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Menu from './components/Menu';
import AllBlogs from './components/AllBlog';
import AddBlog from './components/AddBlog';
import UpdateBlog from './components/UpdateBlog';

function App() {
  return (
    <div className="App">
      <Card body inverse style={{backgroundColor:'#333', borderColor:'#333'}}>
        <ToastContainer/>
        <Router>
          <CardTitle className="display-2">
            Hola Blogger!
          </CardTitle>
          <Container>
            <Row>
              <Col>
                <Menu/>
              </Col>
            </Row>
            <Row>
              <Col>
                <Route path="/" component={AllBlogs} exact/>
                <Route path="/add" component={AddBlog} exact/>
                <Route path="/update" component={UpdateBlog} exact/>
              </Col>
            </Row>  
          </Container>
        </Router>
      </Card>
    </div>
  );
}

export default App;
