<h3>Exercício 1<h3>

A:
PRIMARY KEY - A coluna receberá os dados que são identificadores únicos daquela tabela.
VARCHAR(255) - Recebe uma strings de até 255 caracteres.
DATE - Representa a data de nascimento. 
VARCHAR(6) - Recebe uma strings de até 6 caracteres.
NOT NULL - O valor é obrigatório, deve ser preenchido.

B:
O SHOW DATABASE nos mostra os bancos de dados disponíveis e o SHOW TABLES nos mostra as tabelas disponíveis e criadas.

C:
Descreve a tabela citada, informando o tipo e valos de cada coluna.



<h3>Exercício 2<h3>

A:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23"
);

B:
Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'.
Aconteceu esse erro porque o id 002 já está sendo utilizado, e como a PRIMARY KEY são identificadores únicos, não pode existir 2 ou mais id com o número 002.

C:
Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1.
Aconteceu porque foram incluídos os valores de birth_date e gender (birth_date e gender são nomes das colunas da tabela), mas entre os parênteses (onde vai os nomes das colunas) não foi informado esses nomes.

Correção:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

D:
Código de erro: 1364. O campo 'nome' não tem um valor padrão.
Aconteceu porque definimos o name como NOT NULL, o que quer dizer que o campo tem que ser preenchido ou irá dar erro.

Correção:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Kakarotto",
  400000,
  "1949-04-18", 
  "male"
);

E:
Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1.
Aconteceu porque faltou as aspas envolvendo a data de nascimento, e com isso, estamos informando um number no valor e o correto é uma string.

Correção:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

F:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"006",
"Selton Mello",
1000000,
"1972-12-30",
"male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"007",
"Paolla Oliveira",
1500000,
"1982-04-14",
"female"
);



<h3>Exercício 3<h3>

A:
SELECT * from Actor WHERE gender = "female";

B:
SELECT salary FROM Actor WHERE name = "Tony Ramos";

C:
SELECT * FROM Actor WHERE gender = "invalid";
Retornou uma tabela onde todos os valores das colunas vieram Null, isso porque gender = "invalid" não tem em nenhum ator ou atriz da tabela.

D:
SELECT id, name, salary FROM Actor WHERE salary >= 500000;

E:
Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'.
Aconteceu porque a coluna se chama name e não nome.

Correção:
SELECT id, name from Actor WHERE id = "002";



<h3>Exercício 4<h3>

A:
Está retornando os nomes que começa com A ou J e salários acima de R$300.000.

B:
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;

C:
SELECT * FROM Actor WHERE name LIKE "%G%";

D:
SELECT * FROM Actor WHERE (name LIKE "%A%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;



<h3>Exercício 5<h3>

A:
CREATE TABLE Movie (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR (255) NOT NULL UNIQUE,
  synopsis TEXT NOT NULL,
  release_date DATE NOT NULL,
  rating INT NOT NULL
);
Essa query vai criar a tabela de Filmes com 5 colunas: id, nome, sinopse, data de lançamento e avaliação (que pode ser de 0 a 10).

B:
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES(
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
  "2006-01-06",
  7
);

C:
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES(
  "002",
  "Doce de Mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",
  "2012-12-27",
  10
);

D:
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02",
  8
);

E:
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES(
  "004",
  "Meu Nome Não É Johnny",
  "João Guilherme Estrella é um jovem da classe média que se torna o rei do tráfico de drogas da zona sul do Rio de Janeiro. O rapaz inteligente e adorado pelos pais passa a ser investigado pela polícia e enfrenta a dura realidade de um criminoso.",
  "2008-01-04",
  9
);



<h3>Exercício 6<h3>

A:
SELECT id, name, rating FROM Movie WHERE id = "004";

B:
SELECT * FROM Movie WHERE name = "Se Eu Fosse Você";

C:
SELECT id, name, synopsis FROM Movie WHERE rating >= 7;



<h3>Exercício 7<h3>

A:
SELECT * FROM Movie WHERE name LIKE "%vida%";

B:
SELECT * FROM Movie WHERE name LIKE "%vida%" OR synopsis LIKE "%vida%";

C:
SELECT * FROM Movie WHERE release_date < "2021-11-22";

D:
SELECT * FROM Movie WHERE release_date < "2021-11-22" AND (name LIKE "%Dona%" OR synopsis LIKE "%Dona%") AND rating > 7;