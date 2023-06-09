import { memo, FC } from "react";
import { Routes, Route } from "react-router-dom";

import { HomeRoutes } from "../router/HomeRouter";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home">
        {HomeRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<HeaderLayout>{route.element}</HeaderLayout>}
          ></Route>
        ))}
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
