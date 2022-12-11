import { acquireReading } from "./6-9.js";

const reading = acquireReading();

const basicChargeAmount = reading.calculateBaseCharge;
console.log(basicChargeAmount);
