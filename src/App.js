import Navbar from './components/Navbar'
import Scenes from './components/Scenes'
import Sidebar from './components/Sidebar'
export default function App() {
  return (
    <>
     <Navbar />
     <div className='flex'>
     <Sidebar />
    {/* <Scenes/> */}
    <Scenes />
    </div>
   
     
 
    </>
  )
}