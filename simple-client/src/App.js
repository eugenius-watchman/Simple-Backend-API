import 'bootstrap/dist/css/bootstrap.min.css';
//import 'react-toastify/dist/ReactToastify.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";


// local
import UsersList from './pages/user/UsersList.jsx';
import CreateUser from './pages/user/CreateUser.jsx';
import RetrieveUser from './pages/user/RetrieveUser.jsx';
import EditUser from './pages/user/EditUser.jsx';
import DeleteUser from './pages/user/DeleteUser.jsx';
import Contact from './static/Contact.jsx';
import AboutUs from './static/AboutUs.jsx';




// const BlueText = styled.div`
//   color: blue;
// `;

const ClientApp = () => {
  return (
    <>
        <Container fluid className='mt-4 mb-3'> 
        <ToastContainer />     
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<UsersList/>} />
                <Route path="/create" element={<CreateUser/>} />
                <Route path="/:userId" element={<RetrieveUser/>} />
                <Route path="/edit/:userId" element={<EditUser/>} />
                <Route path="/delete/:userId" element={<DeleteUser/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/about" element={<AboutUs/>} />

              </Routes>
            </BrowserRouter>
        </Container>
    </>
  );
};

export default ClientApp;



// export default() => {
//   return (
//     <>
//       <Container fluid className='mt-4 mt-3'>
//         <UsersList />
//       </Container>
//   </>
//   );
// }
