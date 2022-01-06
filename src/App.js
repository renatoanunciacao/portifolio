import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Porfolio";
import Services from "./components/Services";
import Slider from "./components/Slider";


function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
