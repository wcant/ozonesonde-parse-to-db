/*
  Warnings:

  - You are about to drop the `Station` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `station` to the `L100FlightData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `station` to the `RawFlightData` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Stations" AS ENUM ('Huntsville');

-- DropForeignKey
ALTER TABLE "L100FlightData" DROP CONSTRAINT "L100FlightData_stationId_fkey";

-- DropForeignKey
ALTER TABLE "RawFlightData" DROP CONSTRAINT "RawFlightData_stationId_fkey";

-- AlterTable
ALTER TABLE "L100FlightData" ADD COLUMN     "station" "Stations" NOT NULL;

-- AlterTable
ALTER TABLE "RawFlightData" ADD COLUMN     "station" "Stations" NOT NULL;

-- DropTable
DROP TABLE "Station";
