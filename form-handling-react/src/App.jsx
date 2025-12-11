// src/App.jsx
import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  const [which, setWhich] = useState("controlled"); // or "formik"

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: 12 }}>
      <h1>Task 0 — Form Handling</h1>

      <div style={{ marginBottom: 12 }}>
        <button onClick={() => setWhich("controlled")} style={{ marginRight: 8 }}>
          Controlled Form
        </button>
        <button onClick={() => setWhich("formik")}>Formik Form</button>
      </div>

      {which === "controlled" ? <RegistrationForm /> : <FormikForm />}
    </div>
  );
}

export default App;