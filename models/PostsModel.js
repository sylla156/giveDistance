const connection = require('./dbConfig');

class PostsModels {

constructor(){
    results
}
   static get() {
       
       connection.query('select * from posts', (error, results, fields) => {
           if (error) throw error;
           this.results = results;
           
       })

   }

   static getR(){
       return this.results;
   }


   static set (message) {
       connection.query('INSERT INTO posts SET  message=?', [message], (error, results) => {
           if(error) throw error;

           this.results = results;
       })
   }
}

module.exports = PostsModels;