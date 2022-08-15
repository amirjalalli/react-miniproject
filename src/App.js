import "./App.css";
import Lorem from "./component/Loarem/Lorem";
import Slider from "./component/Slider/Slider";
import Tabs from "./component/Tabs/Tabs";
import MainReviews from "./component/Reviews/MainReviews";
import Birthday from "./component/Birthday/Birthday";
import MainTours from "./component/Tours/MainTours";
import MainAccording from "./component/According/MainAccording";
import MenuApp from "./component/Menu/MenuApp";
import Color from "./component/Color/Color";
import Grocy from "./component/Grocy/Grocy";

function App() {
  return (
    <div className="App">
      {/* <Birthday />
      <MainTours />
      <MainReviews />
      <MainAccording />
      <MenuApp />
      <Tabs />
      <Slider />
      <Lorem /> */}
      <Color />
      {/* <Grocy /> */}
    </div>
  );
}

export default App;
