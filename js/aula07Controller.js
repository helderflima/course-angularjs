app.controller("aula07Controller", function($scope){

    $scope.nomes = ['Helder', 'Ricardo', 'Elane', 'Gregório'];
    $scope.pessoas = [];

    $scope.pessoas.push(
        {nome: "Helder Lima", idade: 31, status: false}
    );
    $scope.pessoas.push(
        {nome: "Denize Urbado", idade: 26, status: true}
    );
    $scope.pessoas.push(
        {nome: "Thiago Colares", idade: 25, status: false}
    );
    $scope.pessoas.push(
        {nome: "Ricardo Queiroz", idade: 54, status: false}
    );
    $scope.pessoas.push(
        {nome: "Luciana", idade: 31, status: false}
    );

    $scope.addPessoa = function(){
        var nome = document.getElementById("nomePessoa");
        var idade = document.getElementById("idadePessoa");

        $scope.pessoas.push(
            {nome: nome.value, idade: idade.value, status: false}
        );

        nome.value = "";
        idade.value = "";

    }
    console.log($scope.pessoas);
});