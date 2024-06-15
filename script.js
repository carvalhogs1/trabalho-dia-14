
function registrarUsuario  (event) {
event.preventDefault()
 
    var nome = document.getElementById('nome'). value;
 
    var email = document.getElementById('email'). value;
 
   
 
    console.log(nome, email);
 
    var mysql = require('mysql2');
 
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "electronteste",
 
    });
 
    connection.connect(function(error) {
 
        if (error) {
            console.log(error.code);
            console.log(error.fatal);
        }
    })  
 
    var query = `INSERT INTO cadastro (nome, email) VALUES ("${nome}", "${email}")`;
 
    connection.query(query, function(error) {
        if(error) {
            console.log("ocorreu um erro ao inserir no banco de dados");
        } else {
            alert("usuario cadastrado com sucesso")
        }
    })
}
 
// adicionar evento de submit no formulario
var formulario = document.getElementById('formulario')
formulario.addEventListener('submit', registrarUsuario)