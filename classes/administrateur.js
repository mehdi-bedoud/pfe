import User from './User';
import Axios from './Axios';

export default class administrateur extends User   {
  

    constructor(name, email , password ){
        super(name , email , password ,'admin')
    }

   static async modifierEtatTicket(itemId , etat){
        // modification de l'etat de  ticket 


        try {
          await Axios.post('/api/tickets/modifieretat', {itemId , etat})
         alert ('success ;)')
        }catch (error){
          alert(error)
        }
    }
    static async assignerTicket(itemId , employeEmail){
      try {
        await Axios.post('/api/tickets/assigner', {itemId , employeEmail})
       alert ('success ;)')
      }catch (error){
        alert(error)
      }
    }

  
     static async addUser ({name, mail, password1 , privilege})  {
      
      try {
        const {data}  = await Axios.post("/api/users/register", { name , email : mail, password : password1 , privilege });
   
        if (data) alert (`${data.name} is created`);
        //Cookie.set('userInfo', JSON.stringify(data));
      } catch (error) {
        alert(error)
      }
    }
 
  
     async  deleteUser(email){ // suppression d'utilisateur soit client soit
      try {
const data = await Axios.delete('/api/users/'+email);
if (data) alert ('user removed ')

      }catch(error){
      console.log (error);
      }


    }
    static async getAll(privilege){
      try{
        const {data} = await Axios.get('/api/users/all/'+privilege )
        return (data);

      }catch (err){
        alert(err);

      }
    }
   static async addProduit(title){ // ajout produit 
      const {data}  = await Axios.post('/api/produits/createproduit' , {title})
      if (data) {

        alert ('produit ajouté')
        return true ;
      }
      alert('probleme lors de l\'ajout du produit') ; 

    }
    deleteProduit (){  // suppression produit

    }

    static async getAllProducts (){
     
      const {data} = await Axios.get('/api/produits/');
      if (data){
       
        return data
      }else{
        console.log('erreur')
        return null
      }

    }
   static async addComposant(title , produit){  //ajout composant
  
      const {data}  = await Axios.post('/api/produits/createcomposant' , {title , produit})
 
      if (data) return true ;
      return false  ; 

    }
    deleteComposant(){ //suppression composant 

    }
    static async  getComposants(produit) {
      const {data} = await Axios.get('/api/produits/composants/'+produit);

      if (data){
        return data
      }else{
        console.log('erreur')
        return null
      }

    }

    static async  getTickets( produit , composant) {
      const {data} = await Axios.get('/api/tickets/'+produit + "/" + composant);

      if (data){
        return data
      }else{
        console.log('erreur')
        return null
      }

    }
     

  }