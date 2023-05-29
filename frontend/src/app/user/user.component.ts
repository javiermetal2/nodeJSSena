import {Component, OnInit }from '@angular/core'; 
import {UserService }from '../services/user.service'; 
import {NgForm }from '@angular/forms'; 
import {User }from '../models/user'; 

declare var M:any; 
@Component( {
selector:'app-user', 
templateUrl:'./user.component.html', 
styleUrls:['./user.component.css'], 
providers:[UserService]
})
export class UserComponent implements OnInit {
users:User[] = []; 
constructor(public userService:UserService) {}

ngOnInit():void {
this.getUsers(); 
}

addUser(form?:NgForm) {
//console.log(form?.value);

this.userService.PostUser(form?.value)
//.subscribe(res => {console.log(res)});
.subscribe(res =>  {
this.resetForm(form); 
M.toast( {html:'Usuario agregado o editado correctamente'}); 
}); 
}

resetForm(form?:NgForm) {// Limpiar el formulario, recibe un formulario como parametro
if (form) {
form.reset(); 
this.userService.selectedUser = new User(); 
this.getUsers(); 
}
}

getUsers():void {
this.userService.getUsers()
.subscribe(users => this.users = users); 
}

delete(user:User):void {
this.users = this.users.filter(h => h !== user); 
this.userService.deleteUser(user._id).subscribe(); 
M.toast( {html:'Usuario eliminado correctamente'});
}

edit(user:User, form?:NgForm):void {

form?.control.patchValue(user); 
console.log(form); 
}

}
