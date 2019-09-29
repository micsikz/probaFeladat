import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort, MatDialogConfig, MatDialog, MatDialogRef } from '@angular/material';
import { UserService } from 'src/app/shared/service/user.service';
import { CreateUserModalComponent } from 'src/app/shared/componets/create-user-modal/create-user-modal.component';
import { EditUserModalComponent } from 'src/app/shared/componets/edit-user-modal/edit-user-modal.component';
import { IUser } from 'src/app/interfaces/Iuser';
import { DeleteUserConfirmComponent } from 'src/app/shared/componets/delete-user-confirm/delete-user-confirm.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService,
              private dialog: MatDialog) { }

    displayedColumns: string[] = ['id', 'lastName', 'firstName', 'actions'];
    dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
    searchKey: string;


    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    ngOnInit() {
      this.getData();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }

    newUser() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '30%';
      dialogConfig.height = '50%';
      this.dialog.open(CreateUserModalComponent, dialogConfig).afterClosed().subscribe(
          (data: any) => {
            this.getData();
          }
      );

    }

    editUser(user: IUser) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '30%';
      dialogConfig.height = '50%';
      dialogConfig.data = {iuser: user};
      this.dialog.open(EditUserModalComponent, dialogConfig).afterClosed().subscribe(
        (data: any) => {
          this.getData();
        }
      );
    }

    deleteUser(user: IUser) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      dialogConfig. width = '30%';
      dialogConfig.height = '50%';
      dialogConfig.data = {iuser: user};
      this.dialog.open(DeleteUserConfirmComponent, dialogConfig).afterClosed().subscribe(
        (data: any) => {
          this.getData();
        }
      );
    }


    getData() {
      this.userService.getUsers().subscribe(
        (data: any) => {
          this.dataSource = new MatTableDataSource(data);
        }
      );
    }

    applyFilter() {
      this.dataSource.filter = this.searchKey.trim().toLowerCase();
    }

    searchClear() {
      this.searchKey = '';
      this.applyFilter();
    }
  }
  
  const ELEMENT_DATA: IUser[] = [
    {id: 1, firstName: 'Laci', lastName: 'Maci', deleted: false},
    {id: 2, firstName: 'Jakab', lastName: 'Gipsz', deleted: false},
    {id: 3, firstName: 'Tamás', lastName: 'Tamás', deleted: false},
    {id: 4, firstName: 'Mária', lastName: 'Kiss', deleted: false},
    {id: 5, firstName: 'János', lastName: 'János', deleted: true},
    {id: 6, firstName: 'Aladár', lastName: 'Kiss', deleted: false},
    {id: 7, firstName: 'Géza', lastName: 'Tóth', deleted: false},
    {id: 8, firstName: 'Éva', lastName: 'Kovács', deleted: false},
  ];
