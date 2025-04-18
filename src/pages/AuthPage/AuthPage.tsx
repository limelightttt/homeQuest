import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../store/api/authApi";
import { Wrapper, Form, Input, Button, ErrorText } from "./AuthPage.styled";
import { LinkText } from "../RegisterPage/RegisterPage.styled";

interface IAuthPageProps {
  onLogin: () => void;
}

// yup validation schema
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Enter your email"),
  password: yup.string().min(6, "At least 6 characters").required("Enter your password"),
});

export const AuthPage = ({ onLogin }: IAuthPageProps) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const result = await loginUser(data);
      localStorage.setItem("authToken", result.token); // save to local storage token
      onLogin();
      navigate("/main");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>

        <Input {...register("email")} placeholder="Email" />
        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

        <Input {...register("password")} type="password" placeholder="Password" />
        {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

        <Button type="submit">Log in</Button>

        <LinkText onClick={() => navigate("/register")}>Don't have an account? Sign up</LinkText>
      </Form>
    </Wrapper>
  );
};

export default AuthPage;



