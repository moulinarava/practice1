import { useState } from "react";
import Header from "./Header";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
import ChildThree from "./ChildThree";
import Footer from "./Footer";

function Parent() {

  // Parent State
  const [message, setMessage] = useState("Hello React");
  const [childData, setChildData] = useState("");

  // Data Types
  const studentName = "Chandra";
  const age = 22;

  const skills = ["HTML", "CSS", "JavaScript", "React"];

  const student = {
    id: 101,
    city: "Kakinada"
  };

  // Callback Function
  const receiveData = (data) => {
    setChildData(data);
  };

  return (
    <div>

      <Header />

      <h2>Parent Component</h2>

      <p>Message from Child : {childData}</p>

      <ChildOne
        name={studentName}
        age={age}
        skills={skills}
        student={student}
      />

      <ChildTwo
        sendData={receiveData}
      />

      <ChildThree
        text={childData}
      />

      <button onClick={() => setMessage("State Updated!")}>
        Update Parent State
      </button>

      <h3>{message}</h3>

      <Footer />

    </div>
  );
}

export default Parent;