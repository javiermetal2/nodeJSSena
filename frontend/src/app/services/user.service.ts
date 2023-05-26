import {Injectable }from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import {User }from '../models/user'; 

@Injectable( {
providedIn:'root'
})
export class UserService {


selectedUser:User; 
users:User[]; 
readonly URL_API = 'http://localhost:3000/api/users';

constructor(private http:HttpClient) {
this.selectedUser = new User(); 
this.users = []; 
}

getUsers() {
return this.http.get(this.URL_API); 
}

PostUser(euser:User) {
return this.http.post(this.URL_API, euser); 
}

putUser(eUser:User) {
return this.http.put(this.URL_API + `/$ {User._id}`, User); // se utiliza la version de ecmascript, debemos darle el id del User
}

deleteUser(_id:string) {// Solo necesito el id, no todo lo del User
return this.http.delete(this.URL_API + `/$ {_id}`); // utilizamos el metodo delete
}

}