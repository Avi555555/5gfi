import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignupToSteps from './components/signup/index';
import Layout from './components/layout/layout';
import Dashboard from './components/pages/Dashboard';
import Breadcrumbs from './utils/Breadcrumb';
import { UserProfile } from './components/pages/UserProfile';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tenant from './components/pages/Tenant';

const App = () => {
  return (
    <Router>
      {/* <div> */}
      {/* <Breadcrumbs /> */}
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupToSteps />} />     
          <Route path="*" element={
            <Layout>
              <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/tenant' element={<Tenant />}>
                    <Route path='sub1' element={<Tenant />} />
                    <Route path='sub2' element={<Tenant />} />
                </Route>
               
              </Routes>
            </Layout>
          } />       
      </Routes>
      {/* </div> */}
      <ToastContainer 
        position="top-right" 
        autoClose={10000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover
      />
    </Router>
  );
};

export default App;
