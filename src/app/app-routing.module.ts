import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { OffreComponent } from './offre/offre.component';
import { AjoutReclamationComponent } from './components/ajout-reclamation/ajout-reclamation.component';
import { HomeComponent } from './components/home/home.component';
import { ReclamationsComponent } from './components/reclamations copy/reclamations.component';
import { ModifierReclamationComponent } from './components/modifier-reclamation/modifier-reclamation.component';
import { AdminmainComponent } from './components/admin/adminmain/adminmain.component';
import { HomeoffreComponent } from './homeoffre/homeoffre.component';
import { ModifierOffreComponent } from './modifier-offre/modifier-offre.component';
import { PostulationComponent } from './postulation/postulation.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventsComponent } from './events/events.component';
import { EvenementComponent } from './evenement/evenement.component';

const routes: Routes = [
  
  { path: 'register', component: RegisterComponent },

  { path: '', component: HomeComponent }, 
  { path: 'reclamations', component: ReclamationsComponent },
  { path: 'ajouter-reclamation', component: AjoutReclamationComponent },
  { path: 'modifier-reclamation/:id', component: ModifierReclamationComponent },
  { path: 'admin', component:  AdminmainComponent },
  { path: 'offre', component: OffreComponent },
   
  { path: 'offres', component: HomeoffreComponent },
  { path: 'modifier-offre/:id', component: ModifierOffreComponent },
  { path: 'postulation', component: PostulationComponent},
  { path: 'event', component: CreateEventComponent},
  { path: 'events', component: EventsComponent},
  {path:'front', component:EvenementComponent},

 
  { path: '**', redirectTo: '' } // Handle unknown routes
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
