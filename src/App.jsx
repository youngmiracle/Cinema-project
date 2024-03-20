import React, { useState } from 'react';
import './App.css';
import {Header} from './components/widgets/Header';
import {MainPage} from './components/pages/Main/Main';
import {ContactsPage} from './components/pages/Contacts/Contacts';
import {InformationPage} from './components/pages/Information/Information';
import {PricesPage} from './components/pages/prices/Prices';
import { Route, Routes } from 'react-router-dom';



export function App() {
  const [nav, setNav] = useState('main')

  return (
    <>
      <Header active={nav} onChange={(current) => setNav(current)}>
      </Header>
      {/* <main>
        {nav === 'contacts' && <ContactsPage/>}
        {nav === 'main' && <MainPage/>}
        {nav === 'info' && <InformationPage/>}
        {nav === 'prices' && <PricesPage/>}
      </main> */}
      <Routes>
        <Route path='/' element = {<MainPage/>}/>
        <Route path='about' element = {<InformationPage/>}/>
        <Route path='price' element = {<PricesPage/>}/>
        <Route path='contacts' element = {<ContactsPage/>}/>
      </Routes>
    </>
  );
}


export default App;
