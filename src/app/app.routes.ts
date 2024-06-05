import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotImplementedComponent } from "./not-implemented/not-implemented.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Smelly Cat",
  },

  {
    path: "**",
    component: NotImplementedComponent,
    title: "Not Implemented",
  },
];
