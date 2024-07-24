import { Slo } from "src/entities/Slo";

export default class SloMocks {
    static getUniqueSlo() {
        return [{
            "burnRateMetricKey": "func:slo.errorBudgetBurnRate.payment_service_availability",
            "denominatorValue": 90,
            "description": "Rate of successful payments per week",
            "enabled": true,
            "error": "NONE",
            "errorBudget": 1.25,
            "errorBudgetBurnRate": {
              "burnRateType": "SLOW",
              "burnRateValue": 1.25,
              "burnRateVisualizationEnabled": true,
              "estimatedTimeToConsumeErrorBudget": 24,
              "fastBurnThreshold": 1.5,
              "sloValue": 95
            },
            "errorBudgetMetricKey": "func:slo.errorBudget.payment_service_availability",
            "evaluatedPercentage": 96.25,
            "evaluationType": "AGGREGATE",
            "filter": "type(\"SERVICE\")",
            "id": "123e4567-e89b-42d3-a456-556642440000",
            "metricDenominator": "builtin:service.requestCount.server",
            "metricExpression": "(100)*(builtin:service.errors.server.successCount:splitBy())/(builtin:service.requestCount.server:splitBy())",
            "metricKey": "func:slo.payment_service_availability",
            "metricNumerator": "builtin:service.errors.server.successCount",
            "metricRate": "builtin:service.successes.server.rate",
            "name": "Payment service availability",
            "normalizedErrorBudgetMetricKey": "func:slo.normalizedErrorBudget.payment_service_availability",
            "numeratorValue": 80,
            "problemFilters": "[type(\"SERVICE\")]",
            "relatedOpenProblems": 1,
            "relatedTotalProblems": 1,
            "status": "WARNING",
            "target": 95,
            "timeframe": "-1d",
            "useRateMetric": true,
            "warning": 97.5
          }] as Slo[];
    }
}