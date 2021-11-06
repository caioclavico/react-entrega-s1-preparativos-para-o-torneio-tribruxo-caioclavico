import "./style.css";

function Student({ student, showImage }) {
  return (
    <div className="Studant">
      <h2>{student.name}</h2>
      {student.image === "" ? (
        showImage(student)
      ) : (
        <img src={student.image} alt={student.name} className={student.house} />
      )}
      <h3>{student.house === "" ? "No House" : student.house}</h3>
    </div>
  );
}

export default Student;
