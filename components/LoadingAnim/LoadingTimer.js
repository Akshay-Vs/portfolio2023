import React from 'react'
import { useState, useEffect } from 'react';
import { CursorAnim } from './components/CursorAnim/CursorAnim';
import { LoadingAnim } from './components/LoadingAnim/LoadingAnim';

export const LoadingTimer = () => {
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
    <div>LoadingTimer</div>
  )
}
