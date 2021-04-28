-- CreateTable
CREATE TABLE `Role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `roleType` VARCHAR(50) NOT NULL,
    `roleDesc` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(20) NOT NULL,
    `lastName` VARCHAR(20) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(20) NOT NULL,
    `roleId` INTEGER NOT NULL,
UNIQUE INDEX `User.email_unique`(`email`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Kategori` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipeAkun` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Akun` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_akun` VARCHAR(191) NOT NULL,
    `tipeId` INTEGER NOT NULL,
    `nama_akun` VARCHAR(191) NOT NULL,
    `kategoriId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Akun` ADD FOREIGN KEY (`tipeId`) REFERENCES `TipeAkun`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Akun` ADD FOREIGN KEY (`kategoriId`) REFERENCES `Kategori`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
