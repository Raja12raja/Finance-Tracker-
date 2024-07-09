import './App.css'
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Auth from './pages/auth'
import Dashboard from './pages/dashboard'
import {SignedIn,UserButton,SignedOut,SignInButton,SignOutButton} from '@clerk/clerk-react'
import { FinancialRecordsProvider } from "./contexts/finance-record-context";
function App() {

  return (
    <Router> 
      <div className='app'>
        <div>
          <Link to='/'>Dashborad  </Link>
         <SignedOut>
           <SignInButton mode="modal"/>
        </SignedOut>
          <SignedIn>
            <UserButton showName/>
           <SignOutButton  mode="modal"/>
          </SignedIn>
        </div>
        <Routes>
        <Route
            path="/"
            element={
              <FinancialRecordsProvider>
                <Dashboard />
              </FinancialRecordsProvider>
            }
          />
          <Route path='/auth' element={<Auth/>}/>
        </Routes>
      </div>
      
    </Router>
  )
}

export default App
