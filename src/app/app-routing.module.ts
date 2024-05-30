import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ParentComponent },
  {path: 'parent', component:ParentComponent},
  { path: 'pdf-viewer', component: PdfViewerComponent },
  { path: 'table', component: TableComponent },
  { path: 'form', component: FormComponent},
  // {path: 'sidebar',component:SidebarComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
