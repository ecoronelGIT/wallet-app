import { Injectable } from "@angular/core";
import { Transaction, TransactionByDate } from "../model/transaction.model";


const transactionsData = [
    {
      date: 'Yesterday',
      transactions: [
        {
          img: '/assets/netflix.png',
          name: 'Netflix',
          date: 'Jul 3, 2022 13:33',
          amount: '$9.99',
          type: 'DEBIT'
        },
        {
          img: '/assets/starbucks.png',
          name: 'Starbucks',
          date: 'Jul 3, 2022 09:13',
          amount: '$5.42',
          type: 'DEBIT'
        }
      ]
    },
    {
      date: 'July 2',
      transactions: [
        {
          img: '/assets/picture_person.png',
          name: 'Melania Skorokhod',
          date: 'Jul 2, 2022 13:33',
          amount: '$300',
          type: 'CREDIT'
        }
      ]
    }
  ];

@Injectable({
    providedIn: 'root'
  })
export class TransactionsService {

    getTransactionsByDate(): TransactionByDate[] { 
        return transactionsData.map(data => {
            const transactionsArray: Transaction[] = data.transactions.map(transaction => {
            const transactionInstance = new Transaction();
            transactionInstance.img = transaction.img;
            transactionInstance.name = transaction.name;
            transactionInstance.date = transaction.date;
            transactionInstance.amount = transaction.amount;
            transactionInstance.type = transaction.type;
            return transactionInstance;
            });
        
            const transactionsByDateInstance = new TransactionByDate();
            transactionsByDateInstance.date = data.date;
            transactionsByDateInstance.transactions = transactionsArray;
        
            return transactionsByDateInstance;
        });  
    }

}