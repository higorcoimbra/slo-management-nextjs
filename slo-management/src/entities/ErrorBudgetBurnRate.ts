export default class ErrorBudgetBurnRate {
    burnRateType: string;
    burnRateValue: number;
    burnRateVisualizationEnabled: boolean;
    estimatedTimeToConsumeErrorBudget: number;
    fastBurnThreshold: number;
    sloValue: number;

    constructor(
        burnRateType: string, 
        burnRateValue: number, 
        burnRateVisualizationEnabled: boolean,
        estimatedTimeToConsumeErrorBudget: number,
        fastBurnThreshold: number,
        sloValue: number
    ) {
        this.burnRateType = burnRateType;
        this.burnRateValue = burnRateValue;
        this.burnRateVisualizationEnabled = burnRateVisualizationEnabled;
        this.estimatedTimeToConsumeErrorBudget = estimatedTimeToConsumeErrorBudget;
        this.fastBurnThreshold = fastBurnThreshold;
        this.sloValue = sloValue;
    }
}