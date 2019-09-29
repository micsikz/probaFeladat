import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UserService } from '../../service/user.service';
import { IUser } from 'src/app/interfaces/Iuser';

@Component({
  selector: 'app-create-user-modal',
  templateUrl: './create-user-modal.component.html',
  styleUrls: ['./create-user-modal.component.css']
})
export class CreateUserModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateUserModalComponent>,
    private userService: UserService) { }

    firstName: string = '';
    lastName: string = '';
    deleted: boolean;
    user: IUser;

  ngOnInit() {
  }

  createUser() {
    this.user = {firstName: this.firstName, lastName: this.lastName, deleted: false};
    this.userService.addUser(this.user).subscribe(
      (data: any) => {

        this.dialogRef.close(CreateUserModalComponent);
      }
    );
  }

  exit() {
    this.dialogRef.close(CreateUserModalComponent);
  }

}
