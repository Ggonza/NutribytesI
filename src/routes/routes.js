import routerAdmin from "./routes.admin";
import routerProfesor from "./routes.profesor";
import routerLogin from "./routes.login";
import {Error404} from "../pages";
import {Error404Layout} from "../layouts"

const routes = [...routerAdmin, ...routerProfesor, ...routerLogin,
    {
        path: "*",
        layout: Error404Layout,
        component: Error404,
    }
];

export default routes;