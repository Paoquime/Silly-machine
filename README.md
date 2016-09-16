# Silly-machine

+ Crear tres circulos en la pantalla con colores  distintos y bordes negros, debajo de ellos un input y dos botones con los nombres Cri y Super Cri respectivamente.

![Sin titulo](http://i63.tinypic.com/2wmnj49.jpg)


**Casos a resolver**

1. En este caso cuando el usurio de click  se asignara un color al borde del primer circulo, que cambiara de sitio (hacia el siguiente circulo) cuando haga click en el boton CRI.

      ![Sin titulo](http://i67.tinypic.com/afbqsn.jpg)

2. En este segundo caso el usuario escribira el nombre del color del circulo donde quiere que tenga el borde resaltado y dara click en el boton SUPER CRI, si quiere que otro circulo tenga el borde resaltado escribira su nombre tambien.

      ![Sin titulo](http://i66.tinypic.com/30cps1e.jpg)

**CRI**

+ soluciòn:

1. Para lograr el efecto presentado creamos en nuestro main.js dos variables boton y Contador; el primero para cuando el usuario haga click en CRI y el segundo para contabilizar el nùmero de clicks que el usuario haga en el boton. 
2. Despues de ello igualamos el contador a 1 para que sea activado cuando el usurio de el primer click.
3. Una vez hecho esto creamos una condiciòn que que nos muestre el primer circulo con borde amarillo, cuando el contador sea igual a 1, mientras que los otros dos mantienen su borde negro.
4. Mientras esto ocurre el placeholder mostrara el nombre del color que esta siendo resaltado.
4. La condiciòn se repite dos veces màs para los siguientes circulos, solo cambia el valor al que esta igualado el contador en nuestro caso a 2 y 3 respectivamente.
5. Terminando las condiciones el contador sera igualado a cero(aquì se cierran los if) y sumara de uno en uno (despues de las condiciones), de esta manera cuando el usuario haga click màs de tres veces volvera a comenzar en el primer circulo.


**SUPER CRI**

+ soluciòn:
