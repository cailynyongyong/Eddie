import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase';
import IPageProps from '../interfaces/page.interface';
import { SignInWithSocialMedia } from '../components/modules/auth';
import { Providers } from '../firebase/index';

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
    }

    return (
        <div className="AuthLogin">
            <div className="auth-main-container">
                <div className="auth-btn-wrapper">
                    <button
                        disabled={authenticating}
                        onClick={() => signInWithSocialMedia(Providers.google)}
                    >
                        SignUp with Google
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;