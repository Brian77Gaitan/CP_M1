const { LinkedList } = require('../DS');

/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️


8️⃣ ***** EJERCICIO 8 LINKEDLIST ***** - entregarPedido() 8️⃣ 

Debemos encontrar a los clientes que nos pasan por props. Si están incluidos en nuestra lista enlazada, 
debemos guardar en una nueva lista el pedido y el recibo que contendra el precio de dicho trago.
Estos dos valores los obtendremos de nuestra lista anterior.

📝 EJEMPLO 📝
(INPUT) ➡ 
({nombre: "Franco", trago: "Fernet", precio: 200}) ➡ 
({nombre: "Marcos", trago: "Gancia", precio: 150}) ➡ 
({nombre: "Juan", trago: "Negroni", precio: 100}) ➡ 
({nombre: "Nico", trago: "Cerveza", precio: 260}) ➡ 
({nombre: "Mateo", trago: "Vino tinto", precio: 210})
Y los clientes que nos pasaron por parámetros son: ["Franco", "Marcos"]

lista.compra(array) ➡ (OUTPUT)
({pedido: "Fernet", recibo: 200}) ➡ ({pedido:"Gancia", recibo: 150})

REQUISITOS
  🟢 Retornar una NUEVA LinkedList en base a los elementos del arreglo recibido por parámetros.
  🟢 Debes de tener en cuenta los nombres de los clientes, y que su nombre este en nuestra lista.
  Caso contrario, ¡no deben arreglarlos en nuestra nueva lista!
*/

LinkedList.prototype.entregarPedido = function (clientes) {
    // Se crea una nueva lista para almacenar los pedidos y recibos
  let pedidos = new LinkedList();
  // Se establece el primer nodo de la lista original como el nodo actual
  let current = this.head;
  // Se itera sobre la lista original
  while (current) {
    // Se verifica si el nombre de un cliente se encuentra en la lista de clientes
    if (clientes.includes(current.value.nombre)) {
      // Si es así, se agrega el pedido y el recibo correspondientes a la nueva lista
      pedidos.add({ pedido: current.value.trago, recibo: current.value.precio });
    }
    // Se actualiza el nodo actual al siguiente
    current = current.next;
  }
  // Se devuelve la lista con los pedidos y recibos correspondientes
  return pedidos;
};

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
   LinkedList,
};
