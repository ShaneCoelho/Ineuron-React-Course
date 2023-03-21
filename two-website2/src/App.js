import React from 'react';
import NavBar from './NavBar';
import MastHead from './MastHead';
import PortSection from './PortSection';
import AbtSection from './AbtSection';
import Contact from './Contact';
import Footer from './Footer';
import CopyRight from './CopyRight';
import Modal1 from './Modal1';

const App=()=>{
    return(
        <div>
            <NavBar />
            <MastHead />
            <PortSection />
            <AbtSection />
            <Contact />
            <Footer />
            <CopyRight />
          
        </div>
    )
}

export default App;