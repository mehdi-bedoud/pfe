

export default class user {
  
    constructor(name , email , password ){
        this.name = name;
        this.email = email;
        this.password = password ; 

    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }

    save(){
        console.log('hello');

    }

};