import * as React from "react";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  DialogActions,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { AssignmentDetails } from "./AssignmentDetails";
import { VehicleDetails } from "./VehicleDetails";
import { CustomerDetails } from "./CustomerDetails";
type Props = {};

export interface IAssignForm {
  vehicleNum: string;
  issue: string;
  checkInDate: string;
  make: string;
  model: string;
  year: string;
  odoReading: string;
  lastServiceDate: string;
  customerName: string;
  gender: string;
  customerPhone: string;
  customerEmail: string;
}
export const NewAssignmentForm = (props: Props) => {
  return (
    <form>
      <AssignmentDetails />
      <VehicleDetails />
      <CustomerDetails />
    </form>
  );
};
