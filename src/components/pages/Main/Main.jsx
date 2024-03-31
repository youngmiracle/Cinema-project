import './main.css'
import React, { useEffect, useState } from 'react';

export function MainPage(){
    
    const [state, setState] = useState(null);

  const callBackendAPI = async () => {
    const response = await fetch('/');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };
  
  // получение GET маршрута с сервера Express, который соответствует GET из server.js 
  useEffect(() => {
    callBackendAPI()
    .then(res => setState(res.express))
    .catch(err => console.log(err));
  }, [])

    return(
        <section className='mainPage'>
            <h1 style={{
                textAlign: 'center',
                color: 'white',
                fontSize: '28px'
            }}>Здесь будет основная страница</h1>
        </section>
    )
}