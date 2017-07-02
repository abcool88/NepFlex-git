
export interface MenuTopNav {
  menuId: number;
  menuName: string;
  menuUrl: string;
  active: boolean;
}

export interface MenuContainer {
  menuName: string;
  menuUrl: string;
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

export interface ClothingBrand {
  brandId: number;
  menuId: number;
  brandName: string;
  brandUrl: string;
  active: boolean;
  dateInserted: Date;
  dateUpdated: Date;
  remarks: string;
}
