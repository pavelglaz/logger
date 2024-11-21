import { LogLevel } from '@pavelglaz/types'

export interface TrimmerOptions {
  maxStringLength: number, 
  endLengthToLog: number,
  maxArrayLength: number,
  maxObjectBreadth: number,
  maxObjectDepth?: any,
  redact: {
    fields: Set<string>,
    fieldsToRedactFullname: Set<string>
    paths: Set<string>,
  }
}

export interface LoggerConfig {
  logLevel: LogLevel,
  maxObjectDepth: 5
}
