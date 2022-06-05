import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <section className="cards-list">
        {data.map(item => {
          return (
            <Card
              key={item.id}
              item={item}
            />
          )
        })}
      </section>
    </div>
  );
}

export default App;
