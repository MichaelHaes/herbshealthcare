-- DropForeignKey
ALTER TABLE `sensor_data` DROP FOREIGN KEY `sensor_data_device_id_fkey`;

-- AlterTable
ALTER TABLE `sensor_data` MODIFY `device_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `sensor_data` ADD CONSTRAINT `sensor_data_device_id_fkey` FOREIGN KEY (`device_id`) REFERENCES `devices`(`device_id`) ON DELETE SET NULL ON UPDATE CASCADE;
