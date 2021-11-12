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
        protected: true
    },
    {
        path: '/auth/signup',
        exact: true,
        component: SignUpPage,
        name: 'Login Page',
        protected: true
    },
    {
        path: '/students&tas',
        exact: true,
        component: Students,
        name: 'Student Page',
        protected: true
    },
    {
        path: '/Insights',
        exact: true,
        component: Insights,
        name: 'Insights Page',
        protected: true
    },
];
export default routes;