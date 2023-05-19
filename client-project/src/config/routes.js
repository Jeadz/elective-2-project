import { GeneralLayout } from "../layouts/GeneralLayout/GeneralLayout";
import { Login_SignUp } from "../layouts/Login_SignUp/Login_SignUp";
import { AdminHome } from "../pages/Admin/AdminHome";
import { SignIn } from "../pages/Admin/SignIn";
import { Contact } from "../pages/General/Contact";
import { Home } from "../pages/General/Home";
import {List_services } from "../pages/General/List_services";
import { New_job } from "../pages/General/New_job";
import { NotFound } from "../pages/General/NotFound/NotFound";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { Main } from "../pages/Main/Main";


const AdminRoutes = [
    {path: "/admin", component: AdminHome, layout: GeneralLayout},
    {path: "/admin/sign-in", component: SignIn, layout: GeneralLayout}
];
const GeneralRoutes = [
    {path: "/home", component: Home, layout: GeneralLayout},
    {path: "/contact", component: Contact, layout: GeneralLayout},
    {path: "/services/list", component: List_services, layout: GeneralLayout},
    {path: "/services/new_job", component: New_job, layout: GeneralLayout},
    {path: "*", component: NotFound, layout: GeneralLayout},
    { path: "/login", component: Login, layout: Login_SignUp },
    { path: "/register", component: Register, layout: Login_SignUp},
    { path: "/", component: Main, layout: Login_SignUp}
];
const AllRoutesProject = [...AdminRoutes, ...GeneralRoutes];

export default AllRoutesProject;
