import Car from "./Car";
import Driver from "./Driver";
import DriveSession from "./DriveSession";
import {Lap} from "./Lap";

export default interface SessionBigData{
  cars?: Car[],
  drivers?: Driver[],
  laps?: Lap[],
  session: DriveSession
}
