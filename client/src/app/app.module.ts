import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatIconModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateUserModalComponent } from './shared/componets/create-user-modal/create-user-modal.component';
import { EditUserModalComponent } from './shared/componets/edit-user-modal/edit-user-modal.component';
import { DeleteUserConfirmComponent } from './shared/componets/delete-user-confirm/delete-user-confirm.component';
import { DeleteUserForeverComponent } from './shared/componets/delete-user-forever/delete-user-forever.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CreateUserModalComponent,
    EditUserModalComponent,
    DeleteUserConfirmComponent,
    DeleteUserForeverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatSliderModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule
  ],
  entryComponents: [
  CreateUserModalComponent,
  EditUserModalComponent,
  DeleteUserConfirmComponent,
  DeleteUserForeverComponent
  ],
})
export class AppModule { }
