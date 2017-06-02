export interface IRecurrence {
    frequency?: IRecurrence.FrequencyEnum;
    dayOfMonth?: number;
    dayOfWeek?: string;
    week?: number;
}
export declare namespace IRecurrence {
    enum FrequencyEnum {
        Weekly,
        BiWeekly,
        Monthly,
        Annually,
    }
}
