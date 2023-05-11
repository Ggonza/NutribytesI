import {ProfesorLayout, RectorLayout} from "../layouts"
import { HomeRector } from "../pages"

const routesRector = [
    {
        path:"/rector",
        layout: RectorLayout,
        component: HomeRector,
    },
];

export default routesRector;