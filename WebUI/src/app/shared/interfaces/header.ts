
export interface MenuTopNav {
  MenuId: number;
  MenuName: string;
  MenuUrl: string;
  Active: boolean;
}

export interface MenuContainer {
  MenuPopID: number;
  MenuPopContainer: string;
  MenuPopUrl: string;
  MenuID: number;
  Active: boolean;
  DateInserted: Date;
  DateUpdated: Date;
  Validity: string;
  MultipleMenuID: string;
}
