import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from './Axios';

export default class User {
  
    constructor(name , email , password , privilege ){
        this.name = name;
        this.email = email;
        this.password = password ; 
        this.privilege = privilege;


    }
    static async setEmail(email1, email2){
      try{
        const {data} =await Axios.post('/api/users/updateemail' , {email1,email2})
        return(data)

      }catch(error){
        alert(error)

      }
     
    }

 
 

    //-------------------------------



 

   static async Login (email , password){
       try{
        const {data} = await Axios.post('/api/users/signin', {email: email , password: password}   )
        if (data){
           
            return new User(data.name , data.email , data.password, data.privilege)
        }
       }catch(err){
           console.log(err)
       }  
       return null;
    }

    

   static async Logout(){
       try {
        await    AsyncStorage.removeItem('name');
        await AsyncStorage.removeItem('email' );
        await AsyncStorage.removeItem('privilege' );
       }
       catch(error){
           return (error);
       }
   }



  static  async createTicket(title , description , adresse , produit , composant , etat , priorite , createdBy){ //creation de ticket
try {
  const  data = await Axios.post('/api/tickets/createticket' , {title , description , adresse , produit , composant , etat , priorite,createdBy});
  if (data) alert ('ticket ajouté ;)');
}catch{
  alert ('erreur');
}
}


static async reset(email){
  try{
   const  {data} = await Axios.post('/api/users/reset', {email});
   if (data){
     return data.random;
   }

  }catch(error){
    alert('ce compte n\'existe pas')
  }

}
static async valideReset(email , password){
  const {data} = await Axios.post ('/api/users/validereset' , {email , password})
  if (data){
    return (data)  // return true 
  }
  return null
}

};












