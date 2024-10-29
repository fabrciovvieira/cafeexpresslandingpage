import Cards from "./compontens/Cards"
import FeedBack from "./compontens/FeedBack"
import { Footer } from "./compontens/Footer"
import Hero from "./compontens/Hero"
import Menus from "./compontens/Menus"
import Services from "./compontens/Services"
import { useState, useEffect } from "react"
import logo from './assets/logoCafe.png'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando o carregamento do background
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 2 segundos para simular o carregamento

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen justify-center items-center bg-bgHero bg-cover bg-no-repeat">
        <div className="text-3xl font-raleway bg-background w-screen h-screen m-auto flex justify-center items-center"><img src={logo} alt="logo" /></div>
      </div>
    );
  }

  return (
    <div className="h-screen phone:h-full bg-bgHero bg-cover phone:bg-contain bg-no-repeat">
        <Hero />
        <Cards />
        <Services />
        <Menus />
        <FeedBack />
        <Footer />
    </div>
  )
}

export default App
