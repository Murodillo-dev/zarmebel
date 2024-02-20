import { Outlet } from "react-router-dom"
import Header from "../Components/Header/Header"


const MainLayout = () => {
  return (
    <div>
      <header>
        <Header/>
      </header>

      <main>
        <Outlet/>
      </main>

      <footer></footer>
    </div>
  )
}

export default MainLayout