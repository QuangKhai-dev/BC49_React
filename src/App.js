import ContentComponent from './components/ContentComponent';
import DemoComponents from './components/DemoComponents';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import HomeComponent from './components/HomeComponent';
import NavigationComponent from './components/NavigationComponent';

function App() {
  return (
    <div className="App">
      {/* Hello BC49
      <DemoComponents /> */}
      <HomeComponent />
      <HeaderComponent />
      <div className="row">
        <NavigationComponent />
        <ContentComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
