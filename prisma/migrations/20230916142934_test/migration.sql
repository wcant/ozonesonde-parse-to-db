/*
  Warnings:

  - The primary key for the `Station` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `altitude` on the `Station` table. All the data in the column will be lost.
  - You are about to drop the column `dst` on the `Station` table. All the data in the column will be lost.
  - You are about to drop the column `latitude` on the `Station` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `Station` table. All the data in the column will be lost.
  - You are about to drop the column `source` on the `Station` table. All the data in the column will be lost.
  - You are about to drop the column `timezone` on the `Station` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Station` table. All the data in the column will be lost.
  - You are about to drop the column `tz` on the `Station` table. All the data in the column will be lost.
  - You are about to drop the `FlightData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FlightData" DROP CONSTRAINT "FlightData_stationId_fkey";

-- AlterTable
ALTER TABLE "Station" DROP CONSTRAINT "Station_pkey",
DROP COLUMN "altitude",
DROP COLUMN "dst",
DROP COLUMN "latitude",
DROP COLUMN "longitude",
DROP COLUMN "source",
DROP COLUMN "timezone",
DROP COLUMN "type",
DROP COLUMN "tz",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Station_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Station_id_seq";

-- DropTable
DROP TABLE "FlightData";

-- CreateTable
CREATE TABLE "L100FlightData" (
    "id" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "stationId" TEXT NOT NULL,
    "stationHeight" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "flightNum" TEXT NOT NULL,
    "launchDate" TEXT NOT NULL,
    "launchTime" TEXT NOT NULL,
    "radiosondeType" TEXT NOT NULL,
    "radiosondeNum" TEXT NOT NULL,
    "O3SondeId" TEXT NOT NULL,
    "totalO3" TEXT NOT NULL,
    "dataResolution" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "L100FlightData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RawFlightData" (
    "id" TEXT NOT NULL,
    "stationId" TEXT NOT NULL,
    "headerLines" TEXT NOT NULL,
    "dataColumns" TEXT NOT NULL,
    "flightNumber" TEXT NOT NULL,
    "dateGMT" TEXT NOT NULL,
    "timeGMT" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "launchAltitudeKm" TEXT NOT NULL,
    "surfacePressureMb" TEXT NOT NULL,
    "surfaceTempDeg" TEXT NOT NULL,
    "surfaceHumidity" TEXT NOT NULL,
    "trop1AltitudeKm" TEXT NOT NULL,
    "trop2AltitudeKm" TEXT NOT NULL,
    "turnAltitudeKm" TEXT NOT NULL,
    "turnPressureMb" TEXT NOT NULL,
    "radiosondeNumber" TEXT NOT NULL,
    "humicapSensor" TEXT NOT NULL,
    "radiationCorrection" TEXT NOT NULL,
    "pressureSensorOffset" TEXT NOT NULL,
    "geomPressOffsetCorr" TEXT NOT NULL,
    "radiosondeTotalColWater" TEXT NOT NULL,
    "instrumentType" TEXT NOT NULL,
    "originalFileSource" TEXT NOT NULL,
    "ozoneSondeNumber" TEXT NOT NULL,
    "solution" TEXT NOT NULL,
    "oltmansSolutionCorrection" TEXT NOT NULL,
    "oltmansTermA" TEXT NOT NULL,
    "oltmansTermB" TEXT NOT NULL,
    "ozonePumpTempCorrection" TEXT NOT NULL,
    "totalOzoneColumnCMR" TEXT NOT NULL,
    "totalOzoneColumnSBUV" TEXT NOT NULL,
    "totalOzoneStopPressure" TEXT NOT NULL,
    "timeToPump100Ml" TEXT NOT NULL,
    "dryFlowrateCorrection" TEXT NOT NULL,
    "cellBackgroundIB2" TEXT NOT NULL,
    "backgroundCurrent" TEXT NOT NULL,
    "coefficients" TEXT NOT NULL,
    "pumpCoefficientPC0" TEXT NOT NULL,
    "pumpCoefficientPC1" TEXT NOT NULL,
    "pumpCoefficientPC2" TEXT NOT NULL,
    "pumpCoefficientPC3" TEXT NOT NULL,
    "adSystem" TEXT NOT NULL,
    "flowrateCorrType" TEXT NOT NULL,
    "pressureDataSource" TEXT NOT NULL,
    "altitudeDataSource" TEXT NOT NULL,
    "geoAltAnchoringMethod" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RawFlightData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "L100FlightData" ADD CONSTRAINT "L100FlightData_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "Station"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RawFlightData" ADD CONSTRAINT "RawFlightData_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "Station"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
