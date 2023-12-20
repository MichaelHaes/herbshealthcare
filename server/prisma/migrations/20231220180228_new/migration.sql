/*
  Warnings:

  - You are about to alter the column `humidity` on the `sensor_data` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `luminosity` on the `sensor_data` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to drop the column `device_id` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `session` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `user_id` on table `devices` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `user_id` to the `sensor_data` table without a default value. This is not possible if the table is not empty.
  - Added the required column `waterLevel` to the `sensor_data` table without a default value. This is not possible if the table is not empty.
  - Made the column `device_id` on table `sensor_data` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `devices` DROP FOREIGN KEY `devices_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `sensor_data` DROP FOREIGN KEY `sensor_data_device_id_fkey`;

-- AlterTable
ALTER TABLE `devices` MODIFY `user_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `sensor_data` ADD COLUMN `user_id` INTEGER NOT NULL,
    ADD COLUMN `waterLevel` INTEGER NOT NULL,
    MODIFY `device_id` INTEGER NOT NULL,
    MODIFY `humidity` INTEGER NOT NULL,
    MODIFY `luminosity` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `device_id`;

-- DropTable
DROP TABLE `session`;

-- AddForeignKey
ALTER TABLE `devices` ADD CONSTRAINT `devices_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sensor_data` ADD CONSTRAINT `sensor_data_device_id_fkey` FOREIGN KEY (`device_id`) REFERENCES `devices`(`device_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
