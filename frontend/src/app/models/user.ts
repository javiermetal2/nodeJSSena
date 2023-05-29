export class User {
    constructor(_id = "", name = "", username = "", password = "", updatedAt = new Date()) {
        this._id = _id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.updatedAt = updatedAt;
      }
      
    _id?: string; // Sub guión id porque los datos van a venir de MOngodb
    name: string;
    username: string;
    password: string;
    updatedAt: Date;

}