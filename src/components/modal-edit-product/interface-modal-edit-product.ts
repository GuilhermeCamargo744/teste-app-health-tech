export interface IModalEditProduct {
  visible: boolean;
  titleHeader: string;
  isDelete: boolean;
  onPressCancel: () => void;
  onPressConfirm: () => void;
}
