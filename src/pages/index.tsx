import { Route, Routes } from 'react-router-dom';

import { routerConfig } from 'pages/config/routerConfig';

export const Routing = () => {
  return (
    <Routes>
      {Object.values(routerConfig).map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};
