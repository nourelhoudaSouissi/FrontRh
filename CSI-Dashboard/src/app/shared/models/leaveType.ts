export class LeaveType  {
    id?: number;
    name?: string;
    description?: string;
    duration?: number;
    timeOffType?:TimeOffType;

    
}

export enum TimeOffType{
    PAID_LEAVE = "PAID_LEAVE", 
    SPECIAL_PAID_LEAVE = "SPECIAL_PAID_LEAVE",
    UNPAIED_TIME_OFF = "UNPAIED_TIME_OFF", 
    SICKNESS_LEAVE = "SICKNESS_LEAVE", 
    OTHER = "OTHER"
  
  }