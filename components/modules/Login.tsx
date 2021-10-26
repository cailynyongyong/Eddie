import {
    Box,
    Button,
    Container,
    Divider,
    Paper,
    TextField,
    Typography,
  } from "@material-ui/core";
  import Alert from "@material-ui/lab/Alert";
  import * as yup from "yup";
  import { useFormik } from "formik";
  
  import styles from "../../styles/Login.module.css";
  import { LOGO } from "../constants/global";
  import { auth } from "../../firebase/index";
  import { useState } from "react";
  import { useRouter } from "next/router";
  
  const validationSchema = yup.object({
    email: yup.string().email().required("Required!"),
    password: yup.string().min(6).max(50).required("Required!"),
  });
  
  export default function LoginDialog() {
    const router = useRouter();
  
    const [disableLogin, setDisableLogin] = useState<boolean>(false);
    const [errMsg, setErrMsg] = useState<string>("");
    const [successMsg, setSuccessMsg] = useState<string>("");
  
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        handleLogin(values);
      },
    });
  
    const handleLogin = async ({ email='', password='' }) => {
      setErrMsg("");
      setSuccessMsg("");
      setDisableLogin(true);
      await auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          setSuccessMsg("Login Success");
        })
        .catch((err) => {
          setErrMsg(err.message);
          setDisableLogin(false);
        });
    };
  
    return (
      <Container className={styles.container} maxWidth="xs">
        <Box className={styles.box}>
          <img className={styles.logo} src={LOGO} alt="" />
        </Box>
        <Typography variant="h4">Login</Typography>
        {errMsg.length > 0 ? <Alert severity="error">{errMsg}</Alert> : <div />}
  
        {successMsg.length > 0 ? (
          <Alert severity="success">{successMsg}</Alert>
        ) : (
          <div />
        )}
  
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <br /> <br />
          <Button
            disabled={disableLogin}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            Login
          </Button>
          <br /> <br />
          <Divider />
          <br />
          <Button
            onClick={() => router.push("/signup")}
            color="primary"
            variant="outlined"
            fullWidth
            type="submit"
          >
            Sign Up
          </Button>
        </form>
      </Container>
    );
  }
  