### HERANÇA

<h3>Exercício 1<h3>

A: Sim e Não. Se eu chamar a nova instância toda, eu consigo. Caso queira chamar só a senha, não seria possível, porque o atributo é privada e não há método para acessá-la de fora da classe.

B: Apenas uma vez.

<h3>Exercício 2<h3>

A: Apenas uma vez.

B: Duas vezes. A primeira vez foi iniciada com referência ao Cliente e depois mais uma vez, pois  o Cliente herdou informações do Usuário.

<h3>Exercício 3<h3>

A: Sim. Ao imprimir a instância inteira, os atributos privados também serão mostrados.



### POLIMORFISMO

<h3>Exercício 1<h3>

A: Imprimir todas, não, porque as propriedades estão como informações publica. No entretanto, a função calculateBill não apresentou o valor retornado, e sim uma mensagem "[Function: calculateBill]".

<h3>Exercício 2<h3>

A: Cannot create an instance of an abstract class.

B: Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?
Para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.

<h3>Exercício 3<h3>

A: Para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.

B: Place é uma classe porque precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se fazer em interfaces.

C: Place é abstrata porque não enxergamos uma situação em que seria necessário criar uma instância dessa classe.

<h3>Exercício 4<h3>

A: Possui os métodos getCpf e calculateBill, e as propriedades "name", "registrationNumber", "consumedEnergy", "cpf", "residentsQuantity" e "cep". Porque ela herdou da classe Residence, Place e da interface Client.

<h3>Exercício 5<h3>

A:. Herda todos os métodos e atributos da classe Commerce e Place, assim como a interface Client.

B: A diferença é que cada classe tem um atributo original privado, como no caso CPF e CNPJ.

<h3>Exercício 6<h3>

A: Ela é filha da Industry, porque precisa herdar todos os atributos dela.

B: Ela implementa o Client, porque é uma interface própria para pegar todas os atributos do cliente.

C: Porque não há nenhuma propriedade da classe que deva ser alterada.