import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical.jsx";
import {useLogin} from "./useLogin.js";
import SpinnerMini from "../../ui/SpinnerMini.jsx";

function LoginForm() {
  const [email, setEmail] = useState("yiming@test.com");
  const [password, setPassword] = useState("123456");
  const {login, isLoading} = useLogin();
  function handleSubmit(e) {
        e.preventDefault();
        if (!email ||!password) return;
        login({email, password},{onSettled:()=>{
            setEmail('');
            setPassword('');
            }});
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address" >
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Password" >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRow orientation="vertical">
        <Button size="large">{isLoading? <SpinnerMini/> : "Log in"}</Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
