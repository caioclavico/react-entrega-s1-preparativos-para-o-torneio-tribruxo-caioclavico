import "./style.css";
import LayoutContainer from "../LayoutContainer";

function Home({ random }) {
  return (
    <LayoutContainer>
      <div className="Container_home">
        <h1>Torneio Tribruxo</h1>
        <p>Clique no botão para encontrar os feiticeiros</p>
        <button onClick={random}>Começar!</button>
      </div>
    </LayoutContainer>
  );
}

export default Home;
