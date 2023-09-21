/*
  Warnings:

  - You are about to drop the column `dataResolution` on the `L100FlightData` table. All the data in the column will be lost.
  - You are about to drop the column `stationId` on the `L100FlightData` table. All the data in the column will be lost.
  - You are about to drop the column `totalO3` on the `L100FlightData` table. All the data in the column will be lost.
  - You are about to drop the column `stationId` on the `RawFlightData` table. All the data in the column will be lost.
  - Added the required column `background` to the `L100FlightData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `flowrate` to the `L100FlightData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rhCorr` to the `L100FlightData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sondeTotalO3DU` to the `L100FlightData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sondeTotalO3SBUV` to the `L100FlightData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "L100FlightData" DROP COLUMN "dataResolution",
DROP COLUMN "stationId",
DROP COLUMN "totalO3",
ADD COLUMN     "background" TEXT NOT NULL,
ADD COLUMN     "flowrate" TEXT NOT NULL,
ADD COLUMN     "rhCorr" TEXT NOT NULL,
ADD COLUMN     "sondeTotalO3DU" TEXT NOT NULL,
ADD COLUMN     "sondeTotalO3SBUV" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "RawFlightData" DROP COLUMN "stationId";
