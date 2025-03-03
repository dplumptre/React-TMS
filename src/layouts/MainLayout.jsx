import {Outlet} from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Nav/>
        <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
