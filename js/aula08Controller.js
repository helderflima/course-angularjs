app.controller("aula08Controller", function ($scope) {
    
    $scope.estados = ['RS', 'CE', 'SP', 'RJ'];
    $scope.pessoa = novaPessoa();
    $scope.pessoas = [];

    

    $scope.salvarPessoa = function(pessoa){

        $scope.pessoas.push(pessoa);
        $scope.pessoa = novaPessoa();

        $scope.frm.$setUntouched();
        $scope.frm.$setPristine();
    }

    console.log($scope.pessoa);
    
});



function novaPessoa(){
    return {

        nome: "",
        email: "",
        sexo: "f",
        estado: "SP"
    }
}