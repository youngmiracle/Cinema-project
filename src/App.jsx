import './App.css';
import {Header} from './components/widgets/Header';
import {MainPage} from './components/pages/Main/Main';
import {ContactsPage} from './components/pages/Contacts/Contacts';
import {InformationPage} from './components/pages/Information/Information';
import { ServicePage } from './components/pages/Service/Service';
import { useState } from 'react';



export function App() {
  const [nav, setNav] = useState('main')

  return (
    <>
      <Header active={nav} onChange={(current) => setNav(current)}>
      </Header>
      <main>
        {nav === 'contacts' && <ContactsPage/>}
        {nav === 'main' && <MainPage/>}
        {nav === 'info' && <InformationPage/>}
        {nav === 'prices' && <ServicePage/>}
      </main>
    </>
  );
}


export default App;
