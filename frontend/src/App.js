import { useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import cookies from 'js-cookie';
import { Sidebar, Footer } from './layout/_indexLayout';
import { Announcement, DocsForms, Error, Evaluation, Home, Login, Loading, User, Admin, Dashboard} from './pages/_indexPages';
import { CreateUser, CreateEvaluation, CreateAnnouncement, UserContext, PrivateRoutes } from './components/_indexComponents';
import './App.css';


function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false)
  const userCookie = cookies.get("userCookie");

  useEffect(() => {
    async function getUser() {
      const response = await fetch(`http://localhost:8000/api/usr/user/${userCookie}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/type",
        }
      });
      const _response = await response.json();
      if(!response.ok) {
        console.log(_response.error);
      }
      if(response.ok) {
        setUser(_response.user);
      }
      setLoading(false);

    }
    if(userCookie) {
      getUser();
    } else {
      setLoading(true);
    }
  }, []);


  return (
      <UserContext.Provider value={{user, setUser}}>
        <Router>
          <div className="App">
            <Sidebar/>
            <div className="page-content">
              <Container fluid style={{width: "100%"}}>
                <Routes>
                  <Route element={<PrivateRoutes/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/admin" element={<Admin/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>


                    <Route path="/createannouncement" element={<CreateAnnouncement newAnnouncement/>}/>
                    <Route path="/editannouncement/:id" element={<Announcement/>}/>
                    <Route path="/announcement" element={<Announcement/>}/>

                    <Route path="/createevaluation" element={<CreateEvaluation newEvaluation/>}/>
                    <Route path="/editevaluation/:id" element={<Evaluation />} />
                    <Route path="/evaluation" element={<Evaluation/>}/>

                    <Route path="/createuser" element={<CreateUser newUser/>} />
                    <Route path="/edituser/:id" element={<CreateUser />} />
                    <Route path="/user" element={<User/>}/>

                    <Route path="/docsforms" element={<DocsForms/>}/>
                  </Route>
                  <Route path="/loading" element={<Loading/>}/>
                  <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
                  <Route path="*" element={<Error/>}/>
                </Routes>
              </Container>
            </div>
            <Footer/>
          </div>
        </Router>
      </UserContext.Provider>
  );
}

export default App;
