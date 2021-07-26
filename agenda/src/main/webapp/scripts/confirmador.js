/**
 * Confirmação de exclusão de um contato 
 * @author João Otávio da Silva
 * @param idcon
 */

function confirmar(idcon){
	let resposta = confirm("Deseja excluir este contato ?")
	if (resposta === true) {
		//alert(idcon)
		window.location.href = "delete?idcon=" + idcon
	}
}