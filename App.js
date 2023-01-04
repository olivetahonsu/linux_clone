
import './App.css';
import Form from './components/form/form';
import Header from './components/navbar/header';
import Profile from './components/profile/profile';

function App() {
  return (
    <div className="App">

      <Header/>

      <div className="content">
        <Profile/>
        <Form/>
      </div>

    </div>
  );
}

export default App;
