import React, { useState } from 'react';
import './App.css';
import {Header} from './components/widgets/Header';
import {MainPage} from './components/pages/Main/Main';
import {ContactsPage} from './components/pages/Contacts/Contacts';
import {InformationPage} from './components/pages/Information/Information';
import { ServicePage } from './components/pages/Service/Service';
import { Route, Routes } from 'react-router-dom';



export function App() {
  const [nav, setNav] = useState('main')

  return (
    <>
      <Header active={nav} onChange={(current) => setNav(current)}/>
      <Routes>
        <Route path='/' element = {<MainPage/>}/>
        <Route path='about' element = {<InformationPage/>}/>
        <Route path='service' element = {<ServicePage/>}/>
        <Route path='contacts' element = {<ContactsPage/>}/>
      </Routes>
    </>
  );
}


export default App;
