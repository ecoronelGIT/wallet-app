import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../service/transactions.service';
import { TransactionByDate } from '../model/transaction.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent implements OnInit {

  currentTransactions: TransactionByDate[] = [];

  constructor(private transactionService: TransactionsService) {}

  ngOnInit(): void {
    this.currentTransactions = this.transactionService.getTransactionsByDate();
  }
}
