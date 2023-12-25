/** @format */

import { AuthHeader } from "@/app/components/AuthHeader";
import { LoginForm } from "@/app/components/LoginForm";
import styles from "../../assets/css/pages/Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <AuthHeader />
      <LoginForm />
    </div>
  );
};

export default Login;
