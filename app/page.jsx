"use client"

import Header from '@components/Header'
//import LoadingAnim from './components/LoadingAnim';
import {CursorAnim} from '@components/CursorAnim/CursorAnim';
import SideNav from '@components/SideNav'
import "./index.scss"

function App() {

  return (
    <div>
      <CursorAnim />
      <Header />
      <SideNav />
    </div>
  );
}

export default App;
