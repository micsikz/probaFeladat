import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IUser } from '../../interfaces/Iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public baseUrl: string = 'http://localhost:8080';

  public getUsers() {
    return this.httpClient.get(this.baseUrl + '/felhasznalok/list-felhasznalok');
  }

  public addUser(user: IUser) {
    return this.httpClient.post(this.baseUrl + '/felhasznalok/add', user);
  }

  public updateUser(user: IUser) {
    return this.httpClient.put(this.baseUrl + '/felhasznalok/update', user);
  }

  public deleteUser(userId: number) {
    console.log(this.baseUrl + '/delete/' + userId)
    return this.httpClient.delete(this.baseUrl + '/felhasznalok/delete/' + userId);
  }
}
