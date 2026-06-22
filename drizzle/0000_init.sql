CREATE TABLE `Articles` (
	`id` int AUTO_INCREMENT NOT NULL,
	`author_id` int NOT NULL,
	`title` text NOT NULL,
	`body` text NOT NULL,
	`published` boolean,
	`created` timestamp GENERATED ALWAYS AS ((CURRENT_TIMESTAMP)) VIRTUAL,
	`update` timestamp GENERATED ALWAYS AS ((CURRENT_TIMESTAMP)) VIRTUAL,
	CONSTRAINT `Articles_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `ArticlesTags` (
	`article_id` int AUTO_INCREMENT NOT NULL,
	`tag_id` int NOT NULL,
	`created` timestamp GENERATED ALWAYS AS ((CURRENT_TIMESTAMP)) VIRTUAL,
	`update` timestamp GENERATED ALWAYS AS ((CURRENT_TIMESTAMP)) VIRTUAL,
	CONSTRAINT `ArticlesTags_article_id` PRIMARY KEY(`article_id`)
);
--> statement-breakpoint
CREATE TABLE `Tags` (
	`id` int AUTO_INCREMENT NOT NULL,
	`value` text NOT NULL,
	`created` timestamp GENERATED ALWAYS AS ((CURRENT_TIMESTAMP)) VIRTUAL,
	`update` timestamp GENERATED ALWAYS AS ((CURRENT_TIMESTAMP)) VIRTUAL,
	CONSTRAINT `Tags_id` PRIMARY KEY(`id`),
	CONSTRAINT `Tags_value_unique` UNIQUE(`value`)
);
--> statement-breakpoint
CREATE TABLE `Users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`username` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`created` timestamp GENERATED ALWAYS AS ((CURRENT_TIMESTAMP)) VIRTUAL,
	`update` timestamp GENERATED ALWAYS AS ((CURRENT_TIMESTAMP)) VIRTUAL,
	CONSTRAINT `Users_id` PRIMARY KEY(`id`),
	CONSTRAINT `Users_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `Articles` ADD CONSTRAINT `Articles_author_id_Users_id_fk` FOREIGN KEY (`author_id`) REFERENCES `Users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `ArticlesTags` ADD CONSTRAINT `ArticlesTags_article_id_Articles_id_fk` FOREIGN KEY (`article_id`) REFERENCES `Articles`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `ArticlesTags` ADD CONSTRAINT `ArticlesTags_tag_id_Tags_id_fk` FOREIGN KEY (`tag_id`) REFERENCES `Tags`(`id`) ON DELETE no action ON UPDATE no action;