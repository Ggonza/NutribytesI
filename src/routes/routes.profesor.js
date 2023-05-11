import {ProfesorLayout} from "../layouts"
import { HomeProfesor } from "../pages"

const routesProfesor = [
    {
        path:"/profesor",
        layout: ProfesorLayout,
        component: HomeProfesor,
    },
]

export default routesProfesor;