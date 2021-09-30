export default interface DriveSession {
  created_at: string
  id: number,
  metaData: string,
  raceWeekendIndex: number,
  serverName: string,
  sessionIndex: number,
  sessionType: string,
  trackName: string,
  updated_at: string
  bestLapTime: number
  bestLapTimeFormatted: string
  bestDriver: string
}
