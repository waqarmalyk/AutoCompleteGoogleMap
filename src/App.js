import LocationFinder from "./components/locationFinder";
import Header from "./components/header/Header";
import "./App.css";
import SwiperField from "./components/swiper";

function App() {
  return (
    <>
      <Header />
      <div className="container-body">
        <LocationFinder />
        <SwiperField />
      </div>
    </>
  );
}

export default App;
