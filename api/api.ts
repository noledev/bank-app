export * from './AccountApi';
import { AccountApi } from './AccountApi';
export * from './AccountsApi';
import { AccountsApi } from './AccountsApi';
export * from './DepositApi';
import { DepositApi } from './DepositApi';
export * from './PayeeApi';
import { PayeeApi } from './PayeeApi';
export * from './PaymentApi';
import { PaymentApi } from './PaymentApi';
export * from './TransferApi';
import { TransferApi } from './TransferApi';
export const APIS = [AccountApi, AccountsApi, DepositApi, PayeeApi, PaymentApi, TransferApi];
