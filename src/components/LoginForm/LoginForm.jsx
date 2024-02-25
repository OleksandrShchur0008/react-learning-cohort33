import "./styles.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

function LoginForm() {
  return (
    <div className="form-wrapper">
      <form>
        <h2>Login Form</h2>
        <div className="inputs-container">
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
        />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        </div>
        <Button type="sumbit" name="Log in" />
      </form>
    </div>
  );
}

export default LoginForm;
