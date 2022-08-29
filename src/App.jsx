import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import react from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import './App.css'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import ECommerce from './Pages/ECommerce';
import Orders from './Pages/Orders'
import Empolyees from './Pages/Empolyees';
import Customars from './Pages/Customars'
import Kanban from './Pages/Kanban'
import Editor from './Pages/Editor'
import Calender from './Pages/Calender';
import ColorPicker from './Pages/ColorPicker'
import Line from './Pages/Charts/Line'
import Area from './Pages/Charts/Area'
import Pie from './Pages/Charts/Pie'
import Bar from './Pages/Charts/Bar'
import Financial from './Pages/Charts/Financial'
import ColorMapping from './Pages/Charts/ColorMapping'
import Pyramind from './Pages/Charts/Pyramid'
import Stacked from './Pages/Charts/Stacked'
import { useStateContext } from './Context/ContextProvider'

function App() {
  const { activeMenu } = useStateContext();
  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent content='Setting' position='top'>
              <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{ background: "blue", borderRadius: '50%' }}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {
            activeMenu ? (
              <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                <Sidebar />
              </div>
            ) : (
              <div className='w-0 dark:bg-secondary-dark-bg'>
                <Sidebar />
              </div>
            )
          }
          <div className={
            activeMenu ? 'dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full' : 'dark:bg-main-bg bg-main-bg min-h-screen w-full flex-2'
          }>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>

            <div>
              <Routes>
                {/* dashborad  */}
                <Route path='/' element={<ECommerce />} />
                <Route path='/ecommerce' element={<ECommerce />} />

                {/* pages  */}
                <Route path='/orders' element={<Orders />} />
                <Route path='/employees' element={<Empolyees />} />
                <Route path='/customers' element={<Customars />} />

                {/* Apps  */}
                <Route path='/kanban' element={<Kanban />} />
                <Route path='/editor' element={<Editor />} />
                <Route path='/calender' element={<Calender />} />
                <Route path='/color-picker' element={<ColorPicker />} />

                {/* chats  */}
                <Route path='/line' element={<Line />} />
                <Route path='/area' element={<Area />} />
                <Route path='/bar' element={<Bar />} />
                <Route path='/pie' element={<Pie />} />
                <Route path='/financial' element={<Financial />} />
                <Route path='/color-mapping' element={<ColorMapping />} />
                <Route path='/pyramid' element={<Pyramind />} />
                <Route path='/stacked' element={<Stacked />} />

              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
