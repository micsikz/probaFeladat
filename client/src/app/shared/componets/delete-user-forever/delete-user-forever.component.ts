import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-delete-user-forever',
  templateUrl: './delete-user-forever.component.html',
  styleUrls: ['./delete-user-forever.component.css']
})
export class DeleteUserForeverComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteUserForeverComponent>,
              private userService: UserService,
              @Inject (MAT_DIALOG_DATA) public data: any) { }


    firstName: string = '';
    lastName: string = '';

  ngOnInit() {
    this.firstName = this.data.iuser.firstName;
    this.lastName = this.data.iuser.lastName;
  }

  deleteUserForever() {
    console.log(this.data.iuser.id);
    this.userService.deleteUser(this.data.iuser.id).subscribe(
      (data: any) => {
        this.dialogRef.close(DeleteUserForeverComponent);
      }
    );
  }
  exit() {
    this.dialogRef.close(DeleteUserForeverComponent);
  }
}
