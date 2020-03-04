DROP DATABASE IF EXISTS `Checkpoint4`;
CREATE DATABASE `Checkpoint4`;
USE Checkpoint4;

CREATE TABLE characters (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	name VARCHAR(155) NOT NULL,
	presentation TEXT NOT NULL
) ENGINE = InnoDB;

CREATE TABLE dragons (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	name VARCHAR(155) NOT NULL,
    race TEXT NOT NULL,
	presentation TEXT NOT NULL,
    ability TEXT NOT NULL
) ENGINE = InnoDB;

INSERT INTO characters (name, presentation)
VALUES
('Hiccup', 'Chief of Berk '),
('Astrid', 'Wife of Hiccup and Chieftess of Berk'),
('Zephyr', 'Daughter of Hiccup and Astrid'),
('Nuffink', 'Son of Hiccup and Astrid');

INSERT INTO dragons (name, race, presentation, ability)
VALUES
('Toothless', 'Night Fury', 'King of dragon and last Night Fury', 'His scales color allow him to hide in the night/darkness. Also, he can use lightning energy to become invisible for a few seconds'),
('Name unknown', 'Light Fury', 'Queen of Dragons', 'By using the heat of one of her shoots, she can reflect light on her scales and become invisible for a few seconds');