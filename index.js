const axios = require("axios")
let dados 


const Post= () => {
    return axios.post("http://jsonplaceholder.typicode.com/posts")
}

dados = Post()
dados.then( (resultado) => {
    console.log(resultado)
})

//

axios.post("http://jsonplaceholder.typicode.com/posts").then ( (resultado) => {
    console.log (resultado.data)
 // console.log(resultado.headers)
// console.log(resultado.status)
    } 
)
    
    //teste erro
    .catch ( (error) => {
        if (error){
            console.log(error)
        }
    })
    
    
    //exemplo 
    axios.post("http://minha.api/registrar/user", { email: "email@exemplo.com", senha:000000})
        