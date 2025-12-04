import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './components/Counter'
import Timer from './components/Timer'
import ThemeApp from './components/Theme'
import FocusInput from './components/Field'
import Parent from './components/Memo' 
import Posts from './components/Posts'
import UniqueFormFields from './components/Form'
import PerformanceComponent from './components/UseMemo'
import ComplexCounter from './components/UseReducer'
import TransitionSearch from './components/UseTransition'
import OptimisticComments from './components/UseOptimistic'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container'>
    <Counter />
    <Timer />
    {/*<ThemeApp />*/}
   {/* <FocusInput />*/}
    {/*<Parent />*/}
    <Posts />
    {/*<UniqueFormFields />*/}
    {/*<PerformanceComponent />*/}
    {/*<ComplexCounter />*/}
    {/*<TransitionSearch />*/}
    {/*<OptimisticComments />*/}
    </div>
  </StrictMode>,
)
