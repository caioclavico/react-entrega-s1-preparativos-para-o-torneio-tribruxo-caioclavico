import LayoutContainer from "../LayoutContainer";
import Student from "../Student";
import "./style.css";

function RandomStudents({
  randomStudants,
  showImage,
  setRandomStudants,
  random,
}) {
  return (
    <LayoutContainer>
      <div className="Container_studants">
        {randomStudants.map((item, index) => {
          return <Student student={item} showImage={showImage} key={index} />;
        })}
      </div>
      <div className="Container_studants_button">
        <button onClick={() => setRandomStudants([])}>Voltar ao inicio</button>
        <button onClick={random}>Resortear</button>
      </div>
    </LayoutContainer>
  );
}

export default RandomStudents;
