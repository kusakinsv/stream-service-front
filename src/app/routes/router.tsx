import { Navigate, RouterProvider, createHashRouter } from "react-router";

import { PATHS } from "@/app/routes/paths.ts";
import { SearchMusicPage } from "@/pages/searchMusicPage/SearchMusicPage.tsx";


const routes = [
    { path: PATHS.SEARCH, element: <SearchMusicPage/> }
]

const router = createHashRouter([
    ...routes,
    {
        path: "*",
        element: <Navigate to={PATHS.SEARCH}/>,
    }
])

export const Router = () => {
    return <RouterProvider router={router}/>;
}