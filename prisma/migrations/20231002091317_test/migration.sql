/*
  Warnings:

  - Added the required column `sourceFile` to the `L100FlightData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "L100FlightData" ADD COLUMN     "sourceFile" TEXT NOT NULL;
