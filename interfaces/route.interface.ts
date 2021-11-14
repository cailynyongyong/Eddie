export default interface IRoute {
    path: string;
    exact: boolean;
    component: any;
    name: string; // Used to update page info and title. 
    protected: boolean; // This will defines if the route is protected or not
}