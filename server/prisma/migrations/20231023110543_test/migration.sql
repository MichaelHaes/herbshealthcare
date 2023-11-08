/*
  Warnings:

  - You are about to drop the column `device_id` on the `user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_device_id_fkey`;

-- AlterTable
ALTER TABLE `devices` ADD COLUMN `user_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `device_id`;
