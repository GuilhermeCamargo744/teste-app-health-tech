export interface IModalEditCreateProduct {
  visible: boolean;
  titleHeader: string;
  isDelete: boolean;
  onPressCancel: () => void;
  onPressConfirm: () => void;
}
