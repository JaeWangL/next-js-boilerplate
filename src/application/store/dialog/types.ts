export type DialogButtonModel = {
  text: string;
  onClick: () => void | Promise<void>;
};

export type DialogState = {
  isOpen: boolean;
  data?: {
    message: string;
    title?: string;
    buttons: DialogButtonModel[];
  };
};
