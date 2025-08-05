export interface IStatus {
  statusCode: number;
  statusFlag: string;
  statusMsg: string;
}

export interface IColumn {
  id: string;
  label: string;
  minWidth: number;
  isDateField?: boolean;
}
