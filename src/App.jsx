import Cards from "./compontens/Cards"
import FeedBack from "./compontens/FeedBack"
import { Footerpage } from "./compontens/FooterPage"
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
        <Footerpage />
    </div>
  )
}

export default App
