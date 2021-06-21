import user from './User';
import Axios from './Axios';

export default class client extends user{
  
    constructor(name, email , password ){
        super(name , email , password , 'client' ) 

    }

   static async getCreatedTickets(email) {
    try {
      const {data} = await Axios.post('/api/tickets/created',{email})
      return data
    }catch(error){
      alert (error)
    }
  }


}