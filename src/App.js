import logo from './logo..png';
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container"> 
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        
        <footer>
        <hr />
          Coded by <a href="https://app.netlify.com/teams/elisosic/overview">Elisa Sosic</a>, code viable on <a href="https://github.com/EliSosic/minimal-dictionary">Github</a> and hosted on  
          <a href="https://app.netlify.com/sites/minimal-dictionary-es/overview"> Netlify</a> 
        </footer>
      </div>
    </div>
  );
}


