import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";

const routeConfig:Routes =[
    {  path:"",
        component:HomeComponent,
        title:'Homepage',

    },
    {
      path:'details/:id'  ,
      component:DetailsComponent,
      title:'Details page',
    }
];
export default routeConfig;