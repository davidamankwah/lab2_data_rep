//imports
import React from 'react'; //react
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap
import './App.css';
//components to import
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Header } from './components/header';
//import for access to bootstrap navbar 
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';

class App extends React.Component { //extend react component
  render() { //render methd to dispay other componets 
    return (
      // navigation bar
      // routing allows navigation
      <Router>
      <div className="App">
        <Navbar bg="primary" variant="dark">
        <Container>
           {/* set up navbar */}
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Content />}></Route>     {/* navigate to the content component*/}
        <Route path='/read' element={<Header/>}></Route>   {/* navigate to the header component*/}
        <Route path='/create' element={<Footer/>}></Route>  {/* navigate to thefooter component */}
    </Routes>

    {/* <Header></Header>
    <Content></Content> 
    <Footer></Footer> */}
      </div>
      </Router>
    );
    }
  }
    



export default App;
