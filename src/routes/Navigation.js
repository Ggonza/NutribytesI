import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {map} from "lodash"
import routes from "./routes";

export function Navigation() {
    console.log("RUTAS===>", routes);
    console.log("Checking component types...");
    routes.forEach((route, index) => {
        if (typeof route.layout !== "function") {
            console.error(`Invalid layout type at route index ${index}. Layout:`, route.layout);
        }
        if (typeof route.component !== "function") {
            console.error(`Invalid component type at route index ${index}. Component:`, route.component);
        }
    });
    return (
        <BrowserRouter>
            <Routes>
                {map(routes, (route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <route.layout>
                                <route.component/>
                            </route.layout>
                        }
                    />
                ))}
            </Routes>
        </BrowserRouter>
    )
}