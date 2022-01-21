var bdc = require('./Banco_Dados');

exports.criar = function() {

const con = bdc.BDbanco();
var sql = 'INSERT INTO services(banco, id, nome, saldo, tipo-de-conta) VALUES (?, ?, ?, ?, ?)'

    con.query(sql,['Test-Bank', '1', 'Wesley Rodio', '10000', 'corrente' ],function(err, result){
        if(err) throw err;

        console.log(result);
    })
}