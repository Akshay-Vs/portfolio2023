'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import LoadingAnim from '@components/LoadingAnim';


import "./index.scss"

function App() {
  const LazyHeader = React.lazy(() => import("@components/Header"))

  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  if (isLoading) {
    return (
      <LoadingAnim setIsLoading={setIsLoading}/>
    )
  }
  else{
    if(currentPage === 'home'){
      return (
        <React.Suspense fallback={<div>Loading...</div>}>
          <LazyHeader setCurrentPage={setCurrentPage} />
        </React.Suspense>
      )
    }
  }
}

export default App;
