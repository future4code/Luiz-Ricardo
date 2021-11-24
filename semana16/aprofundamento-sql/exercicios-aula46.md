<h3>Exercício 1<h3>

A: ALTER TABLE Actor DROP COLUMN salary;

O comando apagaria a coluna salary da tabela Actor.

B: ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

O comando trocaria o nome da coluna gender para sex da tabela Actor, mantendo a quantidade de 6 caracteres.

C: ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

O comando trocaria a quantidade de caracteres da coluna gender da tabela Actor, passando de 6 para 255.

D: 

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);



<h3>Exercício 2<h3>

A:
UPDATE Actor
SET
    name = "Deborah Secco",
    birth_date = "2079-11-26"
WHERE id = "003";
);

B:
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

C:
UPDATE Actor
SET
    id "005",
    name = "Lúcio Mauro Filho",
    salary = 400000,
    birth_date = "1974-06-18",
    gender = "male"
WHERE id = "005";

D:
Error Code: 1054. Unknown column 'age' in 'field list' (Código de erro: 1054. Coluna desconhecida 'idade' na 'lista de campos').
Aconteceu o erro porque a coluna 'age' não existe. E caso existisse, não iria atualizar por causa do id inválido, mas não daria erro, porque a linha com a id inválido não seria encontrada.



<h3>Exercício 3<h3>

A:
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

B:
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;



<h3>Exercício 4<h3>

A:
SELECT MAX(salary) FROM Actor;

B:
SELECT MIN(salary) FROM Actor WHERE gender = "female";

C:
SELECT COUNT(*) FROM Actor WHERE gender = "female";

D:
SELECT SUM(salary) FROM Actor;



<h3>Exercício 5<h3>

A:
Retorna a quantidade de atores com base no gender (female e male).

B:
SELECT id, name FROM Actor ORDER BY name DESC;

C:
SELECT * FROM Actor ORDER BY salary;

D:
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

E:
SELECT AVG(salary), gender FROM Actor GROUP BY gender;



<h3>Exercício 6<h3>

A:
ALTER TABLE Movie ADD playing_limit_date DATE;

B:
ALTER TABLE Movie CHANGE rating rating FLOAT;

C:
UPDATE Movie SET playing_limit_date = "2020-01-01" WHERE id = "001";

UPDATE Movie SET playing_limit_date = "2022-01-01" WHERE id = "004";

D:
DELETE FROM Movie WHERE id = "002";

UPDATE Movie SET synopsis = 10 WHERE id = "002";

A query foi executada, porém nada foi alterado ou atualizado e nem deu erro, porque a linha com a id informado não foi encontrado.



<h3>Exercício 7<h3>

A: SELECT COUNT(*) FROM Movie WHERE rating > 7,5;

2

B: SELECT AVG(rating) FROM Movie;

8

C: SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();

1

D: SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();

0

E: SELECT MAX(rating) FROM Movie;

9

F: SELECT MIN(rating) FROM Movie;

7



<h3>Exercício 8<h3>

A:
SELECT * FROM Movie ORDER BY name ASC;

B:
SELECT * FROM Movie ORDER BY name DESC LIMIT 5;

C:
SELECT * FROM Movie WHERE release_date < CURDATE() ORDER BY release_date ASC LIMIT 3;

D:
SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;