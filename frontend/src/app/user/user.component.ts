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
var toastHTML = '<span>I am toast content</span><button class="btn-flat toast-action">Usuario agregado o editado correctamente</button>'; 
M.toast( {html:toastHTML}); 

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

delete(user:User, form?:NgForm):void {
this.users = this.users.filter(h => h !== user); 
this.userService.deleteUser(user._id ! ).subscribe(); 
var toastHTML = '<span>I am toast content</span><button class="btn-flat toast-action">Usuario eliminado correctamente</button>'; 
M.toast( {html:toastHTML}); 
this.resetForm(form); 
this.getUsers(); 
}

edit(user:User, form?:NgForm):void {
form?.control.patchValue(user); 
}

}
