import { Route, Routes, Navigate, BrowserRouter, createHashRouter } from "react-router";

import { PATHS } from "@/app/routes/paths.ts";
import { Layout } from "@/app/components/page/Layout.tsx";
import { NavBar } from "@/app/components/navigateBar/NavBar.tsx";
import { MusicLibraryPage } from "@/pages/musicLibrary/MusicLibraryPage.tsx";
import { SearchMusicPage } from "@/pages/searchMusicPage/SearchMusicPage.tsx";


const routes = [
  { path: PATHS.SEARCH, element: <SearchMusicPage /> },
  { path: PATHS.LIBRARY, element: <MusicLibraryPage /> },
];

const router = createHashRouter([
  ...routes,
  {
    path: "/",
    element: <Navigate to={PATHS.LIBRARY} />,
  },
]);

const routesElements = [...router.routes].map(routE => <Route key={routE.path} path={routE.path}
                                                              element={routE.element} />);

export const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <NavBar>
          <Routes>
            {routesElements}
          </Routes>
        </NavBar>
      </Layout>
    </BrowserRouter>);
};
// <RouterProvider router={router}/>;