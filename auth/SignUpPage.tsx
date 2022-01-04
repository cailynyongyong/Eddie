import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase';
import IPageProps from '../interfaces/page.interface';
import { SignInWithSocialMedia } from '../components/modules/auth';
import { Providers } from '../firebase/index';
import { Button } from '@mui/material';
import styles from '../styles/SignUp.module.css';

interface Props {
    authenticate: any
}

const SignUp = (props: Props) => {
    const [authenticating, setAuthenticating] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const history = useHistory();

    const signInWithSocialMedia = (provider: firebase.auth.AuthProvider) => {
        if (error !== '') setError('');

        setAuthenticating(true);

        SignInWithSocialMedia(provider)
            .then(result => {
                props.authenticate();
                history.push('/');
            })
            .catch(error => {
                setAuthenticating(false);
                setError(error.message);
            });
        setAuthenticating(false);
    }

    return (
        <div className="AuthLogin">
            <div className="auth-main-container">
                <div className="auth-btn-wrapper">
                    <Button
                        disabled={authenticating}
                        onClick={() => signInWithSocialMedia(Providers.google)}
                        id={styles.btn}
                    >
                        SignUp with Google
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;