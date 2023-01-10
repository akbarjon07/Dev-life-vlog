import './App.css';
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Posts } from "./components/Posts/Posts";
import { Works } from "./components/Works/Works";
import { Footer } from "./components/Footer/Footer";






function App() {
  return (
    <div className="App">
      <Header/>

      <main>
        <Hero/>

        <Posts/>

        <Works/>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
