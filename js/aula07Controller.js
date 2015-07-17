app.controller("aula07Controller", function ($scope) {
	

	$scope.nomes = ['Helder', 'Creusa', 'Ricardo', 'Luciana']

	$scope.pessoas = [];

	$scope.pessoas.push({
		nome: "Helder Lima",
		idade: 30,
		status: false,
	});

	$scope.pessoas.push({
		nome: "Ricardo Queiroz",
		idade: 30,
		status: false,
	});

	$scope.pessoas.push({
		nome: "Creusa França",
		idade: 30,
		status: false,
	});	


	console.log($scope.pessoas);

	$scope.adicionarPessoa = function(){
		var nome = document.getElementById('nomePessoa');
		var idade = document.getElementById('idadePessoa');

		$scope.pessoas.push({
			nome: nome.value,
			idade: idade.value,

		});

		nome.value = "";
		idade.value = "";

	}
});