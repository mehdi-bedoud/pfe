import user from './User';

export default class client extends user{
  
    constructor(name, email , password ){
        super(name , email , password , 'client' ) 

    }

    creerTicket(){

    }

   static getCreatedTickets() {
        var list ;
        return  list = [{title : 'hello ',
        description : 'un problème dans le compteur de l\'eau il n\'est pas strict problème dans le compteur de problème dans le compteur de '
       ,etat : 'ouvert',
        }, 
       {
         title : 'girou ',
       description : 'description ',
       etat : 'ouvert',
       }, 
       {
       title : 'girofu2',
       description : 'description ',
       etat : 'ouvert',
       }, 
       {
         title : 'girou21',
         description : 'description ',
         etat : 'ouvert',
       
         }, 
         {
           title : 'girou22',
           description : 'description ',
           etat : 'ouvert',
           }, 
           {
             title : 'gihrou2',
             description : 'description ',
             etat : 'ouvert',
             }, 
             {
               title : 'girofu2',
               description : 'description ',
               etat : 'ouvert',
               }, 
       ]
      

    };
  
}