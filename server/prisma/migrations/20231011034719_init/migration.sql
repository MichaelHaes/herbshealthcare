/*
  Warnings:

  - Added the required column `sensor_id` to the `sensor_data` table without a default value. This is not possible if the table is not empty.
  - Added the required column `device_id` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `sensor_data` ADD COLUMN `sensor_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`sensor_id`);

-- AlterTable
ALTER TABLE `user` ADD COLUMN `device_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_device_id_fkey` FOREIGN KEY (`device_id`) REFERENCES `devices`(`device_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
