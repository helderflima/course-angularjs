app.controller("aula08Controller", function($scope){


    $scope.estados = ['RS','CE','SP','SC'];
    $scope.pessoa = novaPessoa();
    $scope.pessoas = [];

    $scope.salvarPessoa = function(pessoa){

        $scope.pessoas.push(pessoa);
        $scope.pessoa = novaPessoa();

    }


});

function novaPessoa(){
    return {
        nome: "",
        email: "",
        sexo: "m",
        estado: "SP",
    }
}