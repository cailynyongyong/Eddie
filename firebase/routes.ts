import IRoute from "../interfaces/route.interface";
import SignUpPage from "../auth/SignUpPage";
import HomePage from "../pages/HomePage";
import Students from "../pages/Students";
import Insights from "../pages/Insights";

const routes: IRoute[] = [
    {
        path: '/',
        exact: true,
        component: HomePage,
        name: 'Home Page',
        protected: false
    },
    {
        path: '/auth/signup',
        exact: true,
        component: SignUpPage,
        name: 'Login Page',
        protected: false
    },
    {
        path: '/students&tas',
        exact: true,
        component: Students,
        name: 'Student Page',
        protected: false
    },
    {
        path: '/Insights',
        exact: true,
        component: Insights,
        name: 'Insights Page',
        protected: false
    },
];
export default routes;