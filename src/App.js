import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './components/AboutUs/About';
import Career from './components/Career/Career';
import Contact from './components/ContactUs/Contact';
import Help from './components/HelpCenter/Help';
import Single_post_help_center from './pages/Single_post_help_center';
import Services from './components/Services/Services';
import Frequent_question_page from './pages/Frequent_question_page';
import taxi_booking_page_one from './components/taxi_booking_page_one/taxi_booking_page_one';
import taxi_booking_page_two from './components/taxi_booking_page_two/taxi_booking_page_two';
import taxi_booking_page_three from './components/taxi_booking_page_three/taxi_booking_page_three';
import taxi_booking_conformation from './components/taxi_booking_conformation/taxi_booking_conformation';
import login from './components/login/login';
import SignUp from './components/signup/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  return (
  <Router>
   <Header/>
   
   <Switch>
   <Route exact path='/' component={Home} />
   <Route path='/About' component={About} />
   <Route path='/Career' component={Career} />
   <Route path='/Contact' component={Contact} />
   <Route path='/Help' component={Help} />
   <Route path='/Single_post_help_center' component={Single_post_help_center} />
   <Route path='/Services' component={Services} />
   <Route path='/Frequent_question_page' component={Frequent_question_page} />
   <Route path='/taxi_booking_page_one' component={taxi_booking_page_one} />
   <Route path='/taxi_booking_page_two' component={taxi_booking_page_two} />
   <Route path='/taxi_booking_page_three' component={taxi_booking_page_three} />
   <Route path='/taxi_booking_conformation' component={taxi_booking_conformation} />
   <Route path='/login' component={login} />
   <Route path='/register' component={SignUp} />
   <Home/>  
   </Switch>
   
    <Footer/>
   </Router> 
  );
}

export default App;
