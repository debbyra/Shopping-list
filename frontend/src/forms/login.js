import { Link } from "react-router-dom";
import "./form.css";

export function Login() {
  return (
    <div class="form-container">
      <form class="register-form">
        {/* Uncomment the next line to show the success message */}
        {/* <div class="success-message">Success! Thank you for registering</div> */}
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="Enter Name"
          name="Name"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}

        <input
          id="password"
          class="form-field"
          type="password"
          placeholder="Password"
          name="password"
        />
        <Link to="/todo">
          <button class="form-field" type="submit">
            Login
          </button>
        </Link>
      </form>
    </div>
  );
}
