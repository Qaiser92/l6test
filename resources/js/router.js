import Vue from 'vue';
import VueRouter from 'vue-router';
const foo = {template: "<v-alert type='error'>I am Foo Component</v-alert>"}
const bar = {template: "<v-alert type='error'>I am Bar Component</v-alert>"}
const user = {template: "<v-alert type='info'>I am {{ $route.params.name }}</v-alert>"}


Vue.use(VueRouter)

const routes = [
{
path: '/foo',
compponent: foo,
},

{
path: '/bar',
compponent: bar,	
},

{
path: '/user/:name',
compponent: user,	
}



]

export default new VueRouter({routes})