import user from './user';

export default class client extends user   {
  

    constructor(name, email , password ){
        super(name , email , password )
        this.privilege = 'client' ; 

    }
    getName(){
        return this.name;
    }
    setName(name){
        this.nom = name;
    }
    getEmail(){
        return this.email;
    }
    setEmail(email){
        this.email = email;
    }
    getPassword(){
        return this.password;
    }
    setPassword(password){
        this.password = password;
    }

    save(){
        console.log('hello');

    }

}