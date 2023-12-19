import React from 'react';
import CookieConsent from '../app/components/CookieConsent';
import useCookies from 'react-cookie/es6/useCookies';


const App = () => {
  const [cookies] = useCookies(["cookieConsent"]);
  
  return (
    <div className="app">
      {!cookies.cookieConsent && <CookieConsent />}
    </div>
  );
};

export default App;