import Axios from './Axios';
import user from './User';

 export default class employe extends user   {
  

    constructor(name, email , password ){
        super(name , email , password  , 'employe')
        

    }

    static async  getAssignedTickets(email){
        const {data} = await Axios.post('/api/tickets/assigned',{email})
       if(data)  return data
       else alert('erreur du réseau')
      
      
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

}