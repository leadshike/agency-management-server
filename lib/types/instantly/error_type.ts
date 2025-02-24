export class IInstantlyError extends Error {
    reason: string;
    constructor(reason: string) {
        super(reason);
        this.reason = reason
    }
}