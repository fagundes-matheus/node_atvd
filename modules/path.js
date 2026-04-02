const path = require("path")

//Basename

//Apenas o nome do arquivo local
console.log(path.basename(__filename));

// Nome do Diretorio sutsl
console.log(path.dirname(__filename));


//EXTENSÃO

console.log(path.extname(__filename));


// OBJETO PATH
console.log(path.parse(__filename))

// Juntar caminhos de arquivos
console.log(path.join(__dirname,"test"))