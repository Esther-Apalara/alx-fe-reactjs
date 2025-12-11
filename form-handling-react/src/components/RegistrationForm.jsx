// src/components/RegistrationForm.jsx
import React, { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
  }

  function validate() {
    const e = {};
    if (!form.username.trim()) e.username = "Username is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Email is invalid";
    if (!form.password) e.password = "Password is required";
    else if (form.password.length < 6) e.password = "Password must be at least 6 characters";
    return e;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      setSubmitted(false);
      return;
    }
    // Simulate API call — here we just log and show success
    console.log("Registering user:", form);
    setSubmitted(true);
    // Clear form (optional)
    setForm({ username: "", email: "", password: "" });
  }

  return (
    <div style={{ maxWidth: 420, margin: "20px auto", padding: 12 }}>
      <h2>Registration (Controlled)</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: 8 }}>
          <label>Username</label><br />
          <input name="username" value={form.username} onChange={handleChange} />
          {errors.username && <div style={{ color: "red" }}>{errors.username}</div>}
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>Email</label><br />
          <input name="email" value={form.email} onChange={handleChange} />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>Password</label><br />
          <input name="password" type="password" value={form.password} onChange={handleChange} />
          {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
        </div>

        <button type="submit">Register</button>
      </form>

      {submitted && (
        <div style={{ marginTop: 12, color: "green" }}>
          Registration simulated — check console for details.
        </div>
      )}
    </div>
  );
}