import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { BehaviorSubject } from 'rxjs';
import { IUser } from 'src/app/interfaces/Iuser';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  constructor(private userService: UserService) { }

  private readonly _users = new BehaviorSubject<IUser[]>([]);

  readonly users$ = this._users.asObservable();

  get users(): IUser[] {
    return this._users.getValue();
  }
  set users(val: IUser[]) {
    this._users.next(val);
  }
/*
  getUsers() {
    return this.userService.getUsers().subscribe(
      users => {
        this.users = users;
      }
    );
  }*/
}
