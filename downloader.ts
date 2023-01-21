import {createWriteStream} from "fs";
export default async function handle() {

        let path = `your-link`;
   await fetch(`your-link`,
        {
        method: 'GET',

        })
       .then(response => response.arrayBuffer())
       .then(imageBlob => {
           const imageObjectURL = new Uint8Array(imageBlob);
           createWriteStream(path).write(imageObjectURL,
               function(err){
                   if(err) throw err
                   console.log('Date written to file')
                   console.log(page)

               }

           )

       })

}
