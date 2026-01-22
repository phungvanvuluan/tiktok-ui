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
    { path: '/', component: Home },
    { path: '/following', component: Folowing },
    { path: '/@:nickname', component: Profile },
    { path: '/upload', component: UpLoad, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
