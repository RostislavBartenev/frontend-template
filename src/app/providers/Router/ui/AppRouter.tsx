import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routerConfig } from 'app/providers/Router/config/routerConfig';

const AppRouter = () => {
    return (
        <Suspense fallback={<></>}>
            <Routes>
                {Object.values(routerConfig).map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
