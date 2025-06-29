import Nav from './Componentes/Nav'
import Herosection from './Componentes/Herosection'
import TechnologiesSection from './Componentes/TechnologiesSection'
import Proyectos from './Componentes/Proyectos'
import Estudios from './Componentes/Estudios' 
import Footer from './Componentes/Footer'
import './App.css'

const PrimaryColor = '#808080'; 
const TextColor = '#ffffff';  
function App() {
  
 return (
     <div style={{ backgroundColor: PrimaryColor, color: TextColor, minHeight: '100vh' }}>
       <Nav/>
       <main className="container">
         <Herosection/>
         <TechnologiesSection />
         <Proyectos/>
         <Estudios/>
       </main>

       <Footer />

     </div>
   );
 };

export default App;
