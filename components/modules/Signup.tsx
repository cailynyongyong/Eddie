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
  
  import styles from "../../styles/Signup.module.css";
  import { LOGO } from "../constants/global";
  import { auth } from "../../firebase/index";
  import { useState } from "react";
  import { useRouter } from "next/router";
  
  const validationSchema = yup.object({
    email: yup.string().email().required("Required!"),
    password: yup.string().min(6).max(50).required("Required!"),
  });
  
  export default function SignUpDialog() {
    const [errMsg, setErrMsg] = useState<string>("");
    const [successMsg, setSuccessMsg] = useState<string>("");
    const router = useRouter();
  
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values, actions) => {
        handleSignup(values);
        actions.resetForm();
      },
    });
    
    var user;
    const handleSignup = async ({ email, password}) => {
      setErrMsg("");
      setSuccessMsg("");
      await auth
        .createUserWithEmailAndPassword(email, password)
        .then(async (userCredential) => {
          user = userCredential.user;
          const data = {
            _id: userCredential.user.uid,
            email: userCredential.user.email,
          };
  
          await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify(data),
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              console.log(data);
            })
            .catch((err) => {
              console.log(err);
            });
  
          setSuccessMsg("Signup Success");
          router.push("/");
        })
        .catch((err) => {
          setErrMsg(err.message);
        });
    };
  
    return (
      <Container className={styles.container} maxWidth="sm">
        <Box className={styles.box}>
          <img className={styles.logo} src={LOGO} alt="" />
        </Box>
        <Typography variant="h5">Sign Up</Typography>
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
          <Button color="primary" variant="outlined" fullWidth type="submit">
            Sign Up
          </Button>
          <br /> <br />
        </form>
      </Container>
    );
  }
  