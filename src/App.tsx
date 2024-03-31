import { Header } from "./components/header/Header";
import { TabButton } from "./components/TabButton/TabButton";
import "./App.css";

function App() {
  return (
    <>
      <Header title="Hello world" />
      <Header title="Course" />

      <section id="examples">
        <menu>
          <TabButton>Components</TabButton>
        </menu>
      </section>
    </>
  );
}

export default App;
