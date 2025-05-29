export type FormStep = 'holdings' | 'taxPosition' | 'transactionDetails' | 'results';

export interface CryptoHolding {
  id: string;
  name: string;
  purchaseAmount: number;
  purchaseDate: string;
  pricePerUnit: number;
  currentUnits: number;
  currentValue: number;
  exchange: string;
}

export interface TaxPosition {
  taxableIncome: number;
  capitalGainsRealized: number;
  unusedAllowance: number;
  previousDisposals: boolean;
}

export interface TransactionDetails {
  saleAmount: 'full' | 'partial';
  partialAmount?: number;
  withdrawalMethod: string;
  timing: 'immediate' | 'scheduled';
}

export interface FormData {
  holdings: CryptoHolding[];
  taxPosition: TaxPosition;
  transactionDetails: TransactionDetails;
}

export interface CapitalGainsResult {
  totalGain: number;
  taxableGain: number;
  taxRate: number;
  taxLiability: number;
  remainingAllowance: number;
}

export interface FeeStructure {
  exchangeFees: number;
  networkFees: number;
  conversionCosts: number;
  bankingCharges: number;
  totalFees: number;
}

export interface SettlementSummary {
  grossProceeds: number;
  totalDeductions: number;
  netAmount: number;
  estimatedSettlementDays: number;
}

export interface CalculationResult {
  capitalGains: CapitalGainsResult;
  fees: FeeStructure;
  settlement: SettlementSummary;
}