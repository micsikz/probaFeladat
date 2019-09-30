import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from '../../service/user.service';
import { IUser } from 'src/app/interfaces/Iuser';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.css']
})
export class EditUserModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditUserModalComponent>,
              private userService: UserService,
              @Inject (MAT_DIALOG_DATA) public data: any) { }

    user: IUser;
    firstName: string = '';
    lastName: string = '';

  ngOnInit() {
    this.user = this.data;
    this.firstName = this.data.iuser.firstName;
    this.lastName = this.data.iuser.lastName;
  }

  editUser() {
    this.data.iuser.firstName = this.firstName;
    this.data.iuser.lastName = this. lastName;
    console.log(this.data.iuser)
    this.userService.updateUser(this.data.iuser).subscribe(
      (data: any) => {
        this.dialogRef.close(EditUserModalComponent);
      }
    );
  }

  exit() {
    this.dialogRef.close(EditUserModalComponent);
  }
}
