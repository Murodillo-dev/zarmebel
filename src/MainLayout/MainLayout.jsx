import { Outlet } from "react-router-dom"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"


const MainLayout = () => {
  return (
    <div>
      <header>
        <Header/>
      </header>

      <main>
        <Outlet/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default MainLayout