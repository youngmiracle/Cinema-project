import './App.css';
import {Header} from './components/widgets/Header';
import {MainPage} from './components/pages/Main/Main';
import {ContactsPage} from './components/pages/Contacts/Contacts';
import {InformationPage} from './components/pages/Information/Information';
import {PricesPage} from './components/pages/prices/Prices';
import { useState } from 'react';



export function App() {
  const [nav, setNav] = useState('main')


  return (
    <>
      <Header active={nav} onChange={(current) => setNav(current)}>
      </Header>
      <main>
        {nav === 'main' && <MainPage/>}
        {nav === 'contacts' && <ContactsPage/>}
        {nav === 'info' && <InformationPage/>}
        {nav === 'prices' && <PricesPage/>}
      </main>
    </>
  );
}


export default App;
