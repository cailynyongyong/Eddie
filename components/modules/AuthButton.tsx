import { Button, Dialog, DialogContent } from "@material-ui/core";
import { useContext, useState } from "react";
import { auth } from "../../firebase";
import { AuthContext } from "../contexts/AuthContext";
import LoginDialog from "./Login";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useRouter } from "next/router";

export default function AuthButton() {
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const router = useRouter();
  const { isLoggedInValue, isAuthReadyValue, userValue } = useContext(
    AuthContext
  );
  const [isLoggedIn] = isLoggedInValue;
  const [isAuthReady] = isAuthReadyValue;
  const [user] = userValue;
  // const id = user.uid

  const openLoginForm = () => {
    setOpenLogin(true);
  };

  const closeLoginForm = () => {
    setOpenLogin(false);
  };

  const handleSignOut = () => {
    auth.signOut();
  };

  const handleProfile = () => {
    router.push(`/users/${user.uid}`);
  };

  if (isLoggedIn == false && isAuthReady) {
    return (
      <>
        <IconButton onClick={openLoginForm}>
          <AccountCircleIcon />
        </IconButton>
        <Dialog
          open={openLogin}
          onClose={closeLoginForm}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <LoginDialog />
          </DialogContent>
        </Dialog>
      </>
    );
  } else if (isLoggedIn && isAuthReady) {
    return (
      <>
        <IconButton onClick={handleProfile}>
          <AccountCircleIcon />
        </IconButton>
        <Button onClick={handleSignOut} color="inherit">
          Sign Out
        </Button>
      </>
    );
  }
  return (
    <Button disabled color="inherit">
      Loading...
    </Button>
  );
}
