import user from './user';

 export default class employe extends user   {
  

    constructor(name, email , password ){
        super(name , email , password )
        this.privilege = 'employe' ; 

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

    editState(ticketId){
        // modification de l'etat de  ticket 
    }

}