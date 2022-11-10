import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-delete-transaction',
  templateUrl: './delete-transaction.component.html',
  styleUrls: ['./delete-transaction.component.css']
})
export class DeleteTransactionComponent implements OnInit {

  transactionId = 0
  constructor(
    private transactionService: TransactionService, 
    private toastr: ToastrService, 
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const tid = this.activatedRoute.snapshot.paramMap.get("transactionId");
    this.transactionId = Number(tid);

    this.transactionService.CancelTransaction(this.transactionId).subscribe(
      (resp) => {
        this.toastr.success('Booking is Canceled Successfuly','Success!', {
          timeOut: 3000,
        });
        this.router.navigate(['/transaction-list'])
      },
      (err) => {
        this.toastr.error('Internal Error','Error!', {
          timeOut: 3000,
        });
        this.router.navigate(['/transaction-list'])
      }
    )
  }
}
