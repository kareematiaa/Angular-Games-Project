import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { RegisterComponent } from './register/register.component';
import { SortByComponent } from './sort-by/sort-by.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

 {path:'' , redirectTo:'home',pathMatch:'full'},
 {path:'home' , canActivate:[AuthGuard], component:HomeComponent},
 {path:'gamedetails/:id' ,canActivate:[AuthGuard], component:GameDetailsComponent},
 {path:'platforms' ,canActivate:[AuthGuard], component:PlatformsComponent},
 {path:'sort-by' ,canActivate:[AuthGuard], component:SortByComponent},
 {path:'categories' ,canActivate:[AuthGuard], component:CategoriesComponent},
 {path:'all' ,canActivate:[AuthGuard], component:AllComponent},
 {path:'login' , component:LoginComponent},
 {path:'register' , component:RegisterComponent},
 {path:'**' , component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
