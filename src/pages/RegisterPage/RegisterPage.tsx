import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../store/api/authApi"; 
import { Wrapper, Form, Input, Button, ErrorText, LinkText } from "./RegisterPage.styled";

// yup validation schema
const schema = yup.object().shape({
  username: yup.string().min(3, "Minimum 3 characters").required("Enter a username"),
  email: yup.string().email("Invalid email").required("Enter an email"),
  password: yup.string().min(6, "Minimum 6 characters").required("Enter a password"),
});

const RegisterPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: { username: string; email: string; password: string }) => {
    try {
      await registerUser(data);
      navigate("/"); 
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign Up</h2>

        <Input {...register("username")} placeholder="Username" />
        {errors.username && <ErrorText>{errors.username.message}</ErrorText>}

        <Input {...register("email")} placeholder="Email" />
        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

        <Input {...register("password")} type="password" placeholder="Password" />
        {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

        <Button type="submit">Register</Button>

        <LinkText onClick={() => navigate("/")}>Already have an account? Sign in</LinkText>
      </Form>
    </Wrapper>
  );
};

export default RegisterPage;




