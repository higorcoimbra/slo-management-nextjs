import ErrorBudgetBurnRate from "./errorBudgetBurnRate";

export class Slo {
    burnRateMetricKey: string;
    denominatorValue: number;
    description: string;
    enabled: boolean;
    error: string;
    errorBudget: number;
    errorBudgetBurnRate: ErrorBudgetBurnRate;
    errorBudgetMetricKey: string;
    evaluatedPercentage: number;
    evaluationType: string;
    filter: string;
    id: string;
    metricDenominator: string;
    metricExpression: string;
    metricKey: string;
    metricNumerator: string;
    metricRate: string;
    name: string;
    normalizedErrorBudgetMetricKey: string;
    numeratorValue: number;
    problemFilters: string;
    relatedOpenProblems: number;
    relatedTotalProblems: number;
    status: string;
    target: number;
    timeframe: string;
    useRateMetric: boolean;
    warning: number;

    constructor(data: {
        burnRateMetricKey: string;
        denominatorValue: number;
        description: string;
        enabled: boolean;
        error: string;
        errorBudget: number;
        errorBudgetBurnRate: {
            burnRateType: string;
            burnRateValue: number;
            burnRateVisualizationEnabled: boolean;
            estimatedTimeToConsumeErrorBudget: number;
            fastBurnThreshold: number;
            sloValue: number;
        };
        errorBudgetMetricKey: string;
        evaluatedPercentage: number;
        evaluationType: string;
        filter: string;
        id: string;
        metricDenominator: string;
        metricExpression: string;
        metricKey: string;
        metricNumerator: string;
        metricRate: string;
        name: string;
        normalizedErrorBudgetMetricKey: string;
        numeratorValue: number;
        problemFilters: string;
        relatedOpenProblems: number;
        relatedTotalProblems: number;
        status: string;
        target: number;
        timeframe: string;
        useRateMetric: boolean;
        warning: number;
    }) {
        this.burnRateMetricKey = data.burnRateMetricKey;
        this.denominatorValue = data.denominatorValue;
        this.description = data.description;
        this.enabled = data.enabled;
        this.error = data.error;
        this.errorBudget = data.errorBudget;
        this.errorBudgetBurnRate = new ErrorBudgetBurnRate(
            data.errorBudgetBurnRate.burnRateType,
            data.errorBudgetBurnRate.burnRateValue,
            data.errorBudgetBurnRate.burnRateVisualizationEnabled,
            data.errorBudgetBurnRate.estimatedTimeToConsumeErrorBudget,
            data.errorBudgetBurnRate.fastBurnThreshold,
            data.errorBudgetBurnRate.sloValue,
        );
        this.errorBudgetMetricKey = data.errorBudgetMetricKey;
        this.evaluatedPercentage = data.evaluatedPercentage;
        this.evaluationType = data.evaluationType;
        this.filter = data.filter;
        this.id = data.id;
        this.metricDenominator = data.metricDenominator;
        this.metricExpression = data.metricExpression;
        this.metricKey = data.metricKey;
        this.metricNumerator = data.metricNumerator;
        this.metricRate = data.metricRate;
        this.name = data.name;
        this.normalizedErrorBudgetMetricKey = data.normalizedErrorBudgetMetricKey;
        this.numeratorValue = data.numeratorValue;
        this.problemFilters = data.problemFilters;
        this.relatedOpenProblems = data.relatedOpenProblems;
        this.relatedTotalProblems = data.relatedTotalProblems;
        this.status = data.status;
        this.target = data.target;
        this.timeframe = data.timeframe;
        this.useRateMetric = data.useRateMetric;
        this.warning = data.warning;
    }
}