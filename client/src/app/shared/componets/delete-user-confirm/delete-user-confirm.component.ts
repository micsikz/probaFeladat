import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-delete-user-confirm',
  templateUrl: './delete-user-confirm.component.html',
  styleUrls: ['./delete-user-confirm.component.css']
})
export class DeleteUserConfirmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteUserConfirmComponent>,
              private userService: UserService,
              @Inject (MAT_DIALOG_DATA) public data: any) { }

    firstName: string = '';
    lastName: string = '';

  ngOnInit() {
    this.firstName = this.data.iuser.firstName;
    this.lastName = this.data.iuser.lastName;
  }

  deleteUser() {
    this.data.iuser.deleted = true;
    this.userService.updateUser(this.data.iuser).subscribe(
      (data: any) => {
        this.dialogRef.close(DeleteUserConfirmComponent);
      }
    );
  }

  exit() {
  this.dialogRef.close(DeleteUserConfirmComponent);
}
}
