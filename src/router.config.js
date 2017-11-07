import home from './components/home.vue';
import anli from './components/anli.vue';
import detail from './components/detail.vue';
import create from './components/create.vue';
import list from './components/list.vue';
import regist from './components/regist.vue';
import self from './components/self.vue';
import free from './components/free.vue';
import error from './components/error.vue';
const routes=[
  {path:'/home',component:home},
  {path:'/anli',component:anli},
  {path:'/detail/:id',component:detail},
  {path:'/create',component:create},
  {path:'/list',component:list},
  {path:'/regist',component:regist},
  {path:'/self',component:self},
  {path:'/free',component:free},
  {path:'/',redirect:'/home'},
  {path:'*',component:error},
];
export default routes
