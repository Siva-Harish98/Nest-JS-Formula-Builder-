-- CreateTable
CREATE TABLE `Employee` (
    `employee_id` INTEGER NOT NULL AUTO_INCREMENT,
    `employee_name` VARCHAR(191) NOT NULL,
    `employee_dob` DATETIME(3) NOT NULL,

    PRIMARY KEY (`employee_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
