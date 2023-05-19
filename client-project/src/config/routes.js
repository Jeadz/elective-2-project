import { GeneralLayout } from "../layouts/GeneralLayout/GeneralLayout";
import { AdminHome } from "../pages/Admin/AdminHome";
import { SignIn } from "../pages/Admin/SignIn";
import { Contact } from "../pages/General/Contact";
import { Home } from "../pages/General/Home";
import {List_services } from "../pages/General/List_services";
import { New_job } from "../pages/General/New_job";
import { NotFound } from "../pages/General/NotFound/NotFound";

const AdminRoutes = [
    {path: "/admin", component: AdminHome, layout: GeneralLayout},
    {path: "/admin/sign-in", component: SignIn, layout: GeneralLayout}
];
const GeneralRoutes = [
    {path: "/", component: Home, layout: GeneralLayout},
    {path: "/contact", component: Contact, layout: GeneralLayout},
    {path: "/services/list", component: List_services, layout: GeneralLayout},
    {path: "/services/new_job", component: New_job, layout: GeneralLayout},
    {path: "*", component: NotFound, layout: GeneralLayout}
];
const AllRoutesProject = [...AdminRoutes, ...GeneralRoutes];

export default AllRoutesProject;
