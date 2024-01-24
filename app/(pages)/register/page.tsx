/** @format */

import { AuthHeader } from "@/app/components/AuthHeader";
import styles from "../../assets/css/pages/Login.module.css";
import { RegisterForm } from "@/app/components/RegisterForm";

const Register = () => {
  return (
    <div className={styles.container}>
      <AuthHeader />
      <RegisterForm />
    </div>
  );
};

export default Register;
