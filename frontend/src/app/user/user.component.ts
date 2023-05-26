import {Component, OnInit }from '@angular/core'; 
import {UserService }from '../services/user.service'; 
import {NgForm }from '@angular/forms'; 
import {User }from '../models/user'; 

declare var M:any; 
@Component( {
selector:'app-user', 
templateUrl:'./user.component.html', 
styleUrls:['./user.component.css'], 
 providers: [UserService]
})
export class UserComponent implements OnInit {

constructor(public userService:UserService) {}

ngOnInit():void {
}

addUser(form?:NgForm) {
//console.log(form?.value);
this.userService.PostUser(form?.value)
//.subscribe(res => {console.log(res)});
.subscribe(res =>  {
this.resetForm(form); 
M.toast( {html:'Usuario agregado correctamente'}); 
}); 
}

resetForm(form?:NgForm) {// Limpiar el formulario, recibe un formulario como parametro
if (form) {
form.reset(); 
this.userService.selectedUser = new User(); 
}
}

}
