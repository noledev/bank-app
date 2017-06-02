export interface ITransaction {
    id?: string;
    accountId?: string;
    type?: ITransaction.TypeEnum;
    description?: string;
    amount?: number;
    postDate?: Date;
}
export declare namespace ITransaction {
    enum TypeEnum {
        Deposit,
        Fee,
        Withdrawal,
        Transfer,
    }
}
