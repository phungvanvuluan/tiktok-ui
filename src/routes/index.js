
import routesConfig from '~/config/routers';

//layoyt
import HeaderOnly from '~/components/Layout/HeaderOnly';

//pages
import Folowing from '~/pages/Folowing';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import UpLoad from '~/pages/Upload';
import Search from '~/pages/Search';

//public routes
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Folowing },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: UpLoad, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
