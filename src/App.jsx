import Cards from "./compontens/Cards"
import FeedBack from "./compontens/FeedBack"
import { Footer } from "./compontens/Footer"
import Hero from "./compontens/Hero"
import Menus from "./compontens/Menus"
import Services from "./compontens/Services"

function App() {

  return (
    <div className="h-screen bg-bgHero bg-cover bg-no-repeat">
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
