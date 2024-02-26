
export class TransactionByDate {
    date!: string;
    transactions!: Transaction[];
}

export class Transaction {
    img!: string;
    name!: string;
    date!: string;
    amount!: string;
    type!: string;
}