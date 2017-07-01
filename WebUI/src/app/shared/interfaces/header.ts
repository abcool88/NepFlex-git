
export interface MenuTopNav {
  MenuId: number;
  MenuName: string;
  MenuUrl: string;
  Active: boolean;
}

export interface MenuContainer {
  menuPopID: number;
  menuPopContainer: string;
  menuPopUrl: string;
  menuID: number;
  active: boolean;
  dateInserted: Date;
  dateUpdated: Date;
  validity: string;
  multipleMenuID: string;
}
