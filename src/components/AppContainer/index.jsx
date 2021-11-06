import "./style.css";
import Student from "../Student";

function AppContainer({
  randomStudants,
  random,
  showImage,
  setRandomStudants,
}) {
  return (
    <section className="AppContainer">
      {randomStudants.length > 0 ? (
        <>
          <div className="AppContainer_studants">
            {randomStudants.map((item, index) => {
              return (
                <Student student={item} showImage={showImage} key={index} />
              );
            })}
          </div>
          <div className="AppContainer_studants_button">
            <button onClick={() => setRandomStudants([])}>
              Tentar novamente
            </button>
          </div>
        </>
      ) : (
        <div className="AppContainer_home">
          <h1>Torneio Tribruxo</h1>
          <p>Clique no botão para encontrar os feiticeiros</p>
          <button onClick={random}>Começar!</button>
        </div>
      )}
    </section>
  );
}

export default AppContainer;
