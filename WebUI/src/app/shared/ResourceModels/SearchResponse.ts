export class ItemDetails {
  postID: number;
  title: string;
  image: string;
  detail: string;
  name: string;
  email: string;
  contact: string;
  address: string;
  other: string;
  topCategory: string;
  subCategory: string;
  price: number;
  condition: string;
  brand: string;
  modal: string;
  mile_KMPH: string;
  warranty: string;
  extra_Warranty: string;
  dateAdded: Date;
}

export class SearchResponse {
  searchText: string;
  itemDetail: ItemDetails[];
}
