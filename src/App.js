// import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import AddQuestionScreen from './screens/AddQuestionScreen';

import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    
    <Router>
      <div className='bg-white'>
      <Header />  
        <main  className='bg-white py-8'>
          {/* <Route path='/' component={HomeScreen} exact /> */}
          
          <Route path='/' component={HomeScreen} exact />
          <Route path='/addQuestion' component={AddQuestionScreen} />
        </main>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
