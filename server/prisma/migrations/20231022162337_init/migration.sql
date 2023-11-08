/*
  Warnings:

  - A unique constraint covering the columns `[sensor_id]` on the table `sensor_data` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `sensor_data_sensor_id_key` ON `sensor_data`(`sensor_id`);
