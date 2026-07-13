ALTER TABLE `Articles` MODIFY COLUMN `body` blob NOT NULL;--> statement-breakpoint
ALTER TABLE `Tags` MODIFY COLUMN `value` varchar(64) NOT NULL;--> statement-breakpoint
ALTER TABLE `Users` MODIFY COLUMN `email` varchar(320) NOT NULL;