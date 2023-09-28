/*
  Warnings:

  - You are about to drop the column `O3SondeId` on the `L100FlightData` table. All the data in the column will be lost.
  - Added the required column `o3SondeId` to the `L100FlightData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "L100FlightData" DROP COLUMN "O3SondeId",
ADD COLUMN     "o3SondeId" TEXT NOT NULL;
