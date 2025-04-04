-- AlterTable
ALTER TABLE `productcomments` ADD COLUMN `enabled` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `productratings` ADD COLUMN `enabled` BOOLEAN NOT NULL DEFAULT true;
