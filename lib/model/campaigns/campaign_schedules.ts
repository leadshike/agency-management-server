
export interface ICampaignSchedule {
    name: string;
    timing: {
        from: string; // Format: HH:mm
        to: string;   // Format: HH:mm
    };
    days: {
        [key: number]: boolean; // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    };
    timezone: string; // Example: "Etc/GMT+12"
}
