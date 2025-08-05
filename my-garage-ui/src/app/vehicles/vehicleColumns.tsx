import { IColumn } from "@/_utils/commonInterfaces";

export const vehicleColumns: IColumn[] = [
  {
    id: "index",
    label: "No.",
    minWidth: 50,
  },
  {
    id: "vin",
    label: "Vehicle Number",
    minWidth: 180,
  },
  {
    id: "make",
    label: "MAKE",
    minWidth: 180,
  },
  {
    id: "model",
    label: "MODEL",
    minWidth: 180,
  },
  {
    id: "make_year",
    label: "MAKE YEAR",
    minWidth: 180,
  },
  {
    id: "owner_id",
    label: "OWNER ID",
    minWidth: 180,
  },
  {
    id: "odo_reading",
    label: "ODOMETER READING",
    minWidth: 180,
  },
  {
    id: "last_service",
    label: "LAST SERVICED AT",
    minWidth: 180,
    isDateField: true,
  },
];

