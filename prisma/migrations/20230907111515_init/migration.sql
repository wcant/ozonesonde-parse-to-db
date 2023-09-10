-- CreateTable
CREATE TABLE "FlightData" (
    "id" SERIAL NOT NULL,
    "flight" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,
    "stationId" INTEGER NOT NULL,

    CONSTRAINT "FlightData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Station" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "altitude" DOUBLE PRECISION NOT NULL,
    "timezone" TEXT NOT NULL,
    "dst" TEXT NOT NULL,
    "tz" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Station_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FlightData" ADD CONSTRAINT "FlightData_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "Station"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
