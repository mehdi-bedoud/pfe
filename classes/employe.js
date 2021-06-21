import Axios from './Axios';
import user from './User';

 export default class employe extends user   {
  

    constructor(name, email , password ){
        super(name , email , password  , 'employe')
        

    }

    static async  getAssignedTickets(email){
      try {
        const {data} = await Axios.post('/api/tickets/assigned',{email})
        return data
      }catch(error){
        alert (error)
      }
    }

}