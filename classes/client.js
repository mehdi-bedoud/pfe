import user from './User';


export default class client extends user{
  
    constructor(name, email , password ){
        super(name , email , password , 'client' ) 

    }

}