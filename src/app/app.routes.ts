import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';
import { EducationComponent } from './pages/education/education.component';
import { VisionComponent } from './pages/vision/vision.component';
import { DistributionComponent } from './pages/distribution/distribution.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'certificates', component: CertificatesComponent },
  { path: 'education', component: EducationComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'distribution', component: DistributionComponent }
];
