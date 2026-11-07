
import React, { useState, useEffect } from 'react';

import SplashScreen from './screens/SplashScreen';
import MainScreen from './screens/MainScreen';

export default function App() {

  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setCargando(false);
    }, 2000);

    return () => clearTimeout(temporizador);
  }, []);

  return (
    <>
      {cargando ? (
        <SplashScreen />
      ) : (
        <MainScreen />
      )}
    </>
  );
}
