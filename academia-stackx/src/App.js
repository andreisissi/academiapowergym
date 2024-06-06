import PlansAndPrices from "./components/plansAndPrices";
import Home from "./components/home";
import About from "./components/about";
import Footer from "./components/footer";
import "./app.css";

function App() {
  return (
    <div className='background'>
      <div className='home'>
        <Home />
      </div>
      <div>
        <PlansAndPrices />
      </div>
      <div className='about'>
        <About />
      </div>
      <div className='footer'>
        <Footer />
        <div className='dev'>
          <p>
            © Developed by{" "}
            <a href='https://github.com/andreisissi' target='_blank'>
              andreisissi
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
