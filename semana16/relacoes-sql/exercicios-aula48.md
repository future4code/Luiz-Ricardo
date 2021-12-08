<h3>Exercício 1<h3>

A:

Chave estrangeira é responsável por fazer a relação entre duas ou mais tabelas e deve sempre se referenciar a PRIMARY KEY da outra tabela.

B:

CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (id, comment, rate, movie_id) VALUES (
	"101", "Bom!", 8, "001"
);

INSERT INTO Rating (id, comment, rate, movie_id) VALUES (
	"102", "Muito bom!", 9, "003"
);

INSERT INTO Rating (id, comment, rate, movie_id) VALUES (
	"103", "Excelente!", 10, "004"
);

C:

INSERT INTO Rating (id, comment, rate, movie_id) VALUES ("104", "Excelente!", 10, "002");

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`maryam-luiz-ricardo`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Esse erro informa que não é possível adicionar ou atualizar uma nova linha por um erro na chave estrangeira, ou seja, id informado não existe.

D:

ALTER TABLE Movie DROP COLUMN rating;

E:

DELETE FROM Movie WHERE id = "003";

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`maryam-luiz-ricardo`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Esse erro informa que não é possível excluir a linha (filme) informada por ela está relacionada a outra tabela.

<h3>Exercício 2<h3>

A:

Essa tabela consegue relacionar os atores ou atrizes com vários filmes e os filmes com vários atores ou atrizes. E para isso precisamos de duas FOREIGN KEY, uma para a PRIMARY KAY do Movie e outra para a PRIMARY KEY de Actor.

B:

INSERT INTO MovieCast (movie_id, actor_id) VALUES ("001", "001");

INSERT INTO MovieCast (movie_id, actor_id) VALUES ("001", "002");

INSERT INTO MovieCast (movie_id, actor_id) VALUES ("001", "003");

INSERT INTO MovieCast (movie_id, actor_id) VALUES ("004", "002");

INSERT INTO MovieCast (movie_id, actor_id) VALUES ("004", "001");

INSERT INTO MovieCast (movie_id, actor_id) VALUES ("004", "003");

C:

INSERT INTO MovieCast (movie_id, actor_id) VALUES ("003", "007");

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`maryam-luiz-ricardo`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Esse erro informa que não é possível adicionar ou atualizar uma nova linha por um erro na chave estrangeira, ou seja, id informado não existe, nesse caso, o id da tabela Actor.

D:

DELETE FROM Actor WHERE id = "002";

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`maryam-luiz-ricardo`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Esse erro informa que não é possível excluir a linha (Ator/Atriz) informada por ela está relacionada a outra tabela.

<h3>Exercício 3<h3>

A:

A query junta os registros relacionados das tabelas Movie e Actor em uma única resposta. O 'on' é a propriedade que determina a condição de relacionamento entre as duas tabelas.

B:

SELECT name, Movie.id, rate FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;