import { useState, useEffect} from "react";
import { Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import cookies from 'js-cookie';
import { Sidebar, Footer } from './layout/_indexLayout';
import { Announcement, DocsForms, Error, Evaluation, Home, Login, Loading, User, Admin, Dashboard} from './pages/_indexPages';
import { UserContext, PrivateRoutes } from './components/_indexComponents';
import './App.css';


function App() {
  const [user, setUser] = useState(null);
  return (
      <UserContext.Provider value={{user, setUser}}>

        <div className="App">
          <Sidebar />
          <div className="page-content">
            <Container>
              <Routes>
                <Route element={<PrivateRoutes/>}>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/admin" element={<Admin/>}/>
                  <Route path="/announcement" element={<Announcement/>}/>
                  <Route path="/dashboard" element={<Dashboard/>}/>
                  <Route path="/evaluation" element={<Evaluation/>}/>
                  <Route path="/user" element={<User/>}/>
                  <Route path="/docsforms" element={<DocsForms/>}/>
                </Route>
                <Route path="/loading" element={<Loading/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<Error/>}/>
              </Routes>
            </Container>
          </div>
          <Footer/>
        </div>
      </UserContext.Provider>
  );
}

export default App;
