"use client"
import React, { useState, useEffect } from 'react';
import Header from './components/Header/'
import LoadingAnim from './components/LoadingAnim';
import { CursorAnim } from './components/CursorAnim/CursorAnim';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4100);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div>
        <CursorAnim />
        <LoadingAnim />
      </div>
    );
  }

  return (
    <div>
      <CursorAnim />
      <Header />
    </div>
  );
}

export default App;
