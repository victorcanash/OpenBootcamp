import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import ContactListComponent from './components/contact-list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactListComponent></ContactListComponent>
      </header>
    </div>
  );
}

export default App;
