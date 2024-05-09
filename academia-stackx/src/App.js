import PlansAndPrices from "./components/plansAndPrices";
import FirstSection from "./components/firstSection";
import SecondSection from "./components/secondSection";
import Footer from "./components/footer";
import "./app.css";

function App() {
  return (
    <div className='background'>
      <div className='teste'>
        <FirstSection />
      </div>
      <div>
        <PlansAndPrices />
      </div>
      <div className='secondSection'>
        <SecondSection />
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
