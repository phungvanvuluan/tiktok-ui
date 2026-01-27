import config from '~/config';

//layoyt
import HeaderOnly from '~/layouts/HeaderOnly';

//pages
import Folowing from '~/pages/Folowing';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import UpLoad from '~/pages/Upload';
import Search from '~/pages/Search';

//public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Folowing },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: UpLoad, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
