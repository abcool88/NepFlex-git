
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

export interface ClearenceList {
  clearenceId: number;
  clearenceName: string;
  clearenceUrl: string;
  clearencePercent: string;
  menuId: number;
  dateInserted: Date;
  active: boolean;
  dateUpdate: Date;
  dateValidity: Date;
  remarks: string;
}
export interface Fashion {
  fashionId: number;
  fashionName: string;
  fashionUrl: string;
  active: boolean;
  dateInserted: Date;
  menuId: number;
  remarks: string;
  dateValidity: Date;
  dateUpdate: Date;
}
export interface NewArrivals {
  newArrivalId: number;
  newArivalBrand: string;
  url: string;
  active: boolean;
  dateInserted: Date;
  menuId: number;
  remarks: string;
  dateUpdated: Date;
}

