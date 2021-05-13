import logo from './logo.svg';
import './App.css';
import casa from './assets/casa.png';
import manzana from './assets/manzana.png';
import cosaRara2 from './assets/cosaRara2.png';
import cosarara4 from './assets/cosarara4.png';

import Imagenes from './assets/Imagenes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <nav class="anchototal">
  
    <a href="#punk-rock">Inicio</a>
    <a href="#fundadores">Quienes somos</a>
   
  </nav>
  <div className="intro">
  <p className="introTexto">Tu seguridad es lo primero</p>
  


  </div>
 
  <p className="texto">
    Instalamos todo tipo de persianas, persianas de seguridad, motores de persiana, ventanas de tejado VELUX, mosquiteras y carpintería PVC Kömmerling. 
      En Persiluxe le ofrecemos asesoramiento personalizado, diseñándole presupuesto adaptado a sus necesidades y al mejor precio. Contacte con nosotros y 
      solucionaremos cualquier idea que nos proponga, desplazándonos a su domicilio para estudiar su caso particular. Trabajamos en la Comunidad de Madrid y alrededores.
      
  </p>
  <Imagenes />
  
  <div> 
   <img  src={cosarara4}   class="grande" id = "foto"/>
   
   <img width="200px"src={cosaRara2} alt="" class=" arriba" onclick="miFuncion('imagen1');"/>


   <img width="200px" src={manzana} alt="" class=" medio" onclick="miFuncion('imagen2');"/>


   <img  width="200px" src={cosarara4} alt="" class="bajo" onclick="miFuncion('imagen3');"/>
   </div>
  
      </header>
    </div>
    
    
  );
}


export default App;
