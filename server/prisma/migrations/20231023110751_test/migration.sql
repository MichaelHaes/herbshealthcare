-- AddForeignKey
ALTER TABLE `devices` ADD CONSTRAINT `devices_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;
