import { Component, OnInit } from '@angular/core';
import { DetailService } from 'app/shared/services/detail.service';
import { ActivatedRoute } from '@angular/router';
import { ItemDetail } from 'app/shared/ResourceModels/DetailResponse';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  itemID: number;
  itemDetail: ItemDetail;
  constructor(
    private detailService: DetailService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const result = this.route.params.subscribe(params => {
      this.itemID = +params['itemId'];
      this.getItemDetail(this.itemID);
    });
  }
  getItemDetail(id: number) {
    this.detailService.getItemDetail(id).subscribe((a: ItemDetail) => {
      this.itemDetail = a;
    });
  }
}
