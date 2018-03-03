export class ButtonProperties {
  buttonId: number;
  buttonLabel?: string;
  buttonRoute?: string;
  canRoute?: boolean;
  HasDropDown?: boolean;
  DropDownList?: [{ id: number; label: string; url: string }];
  hasPopUp?: boolean;
  popUpName?: string;
}

export class HeadersNavigation {
  headerId?: number;
  header?: string;
  headerRoute?: string;
  canRoute?: boolean;
  hasDropDown?: boolean;
  dropDownList?:DropDownList[];
}

class DropDownList {
  id?: number;
  label?: string;
  url?: string;
}
