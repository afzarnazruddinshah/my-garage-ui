"use client";
import { IStoreState } from "@/store";
import { updateNewAssgnView } from "@/store/reducers/assignmentsReducer";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
} from "@mui/material";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Title } from "./Title";
import { ActionsBar } from "./ActionsBar";
import { NewAssignmentForm } from "./NewAssignmentForm";
import { createContext } from "react";
import { IAssignmentDetails } from "./AssignmentDetails";
import { createNewCustomer } from "@/services/customers/fetchCustomers";
import { addNewVehicle } from "@/services/vehicles/fetchVechicles";
import { createNewAssignment } from "@/services/assignments/fetchAssignments";
// import { useRouter } from "next/router";
import { ROUTE_ASSIGNMENTS } from "@/_utils/routes";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { ASSIGNMENT_SUCCESSFUL } from "@/_utils/constants";

export const isTabCompleted = (obj: any) => {
  let isComplete = Object.keys(obj).findIndex((property) => !obj[property]);
  return isComplete === -1 ? true : false;
};
export interface IAssignmentContext {
  formData: IAssignForm;
  isAssignmentDetailsFilled: boolean;
  isVehicleDetailsFilled: boolean;
  isCustomerDetailsFilled: boolean;
  onInputChange: (e: React.SyntheticEvent) => void;
}
const initialFormData = {
  vehicleNum: "",
  issue: "",
  checkInDate: "",
  make: "",
  model: "",
  year: "",
  odoReading: "",
  lastServiceDate: "",
  customerName: "",
  gender: "",
  customerPhone: "",
  customerEmail: "",
};
export const AssignmentContext = createContext<IAssignmentContext>({
  isAssignmentDetailsFilled: false,
  isVehicleDetailsFilled: false,
  isCustomerDetailsFilled: false,
  onInputChange: () => {},
  formData: initialFormData,
});

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

export const NewAssignmentDialog = ({}: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [assignFormData, setAssignFormData] =
    React.useState<IAssignForm>(initialFormData);

  const isDialogOpen = useSelector(
    (state: IStoreState) => state.assignments.isNewAssignDialogOpen
  );

  const onInputChange = (e: React.BaseSyntheticEvent) => {
    setAssignFormData((prev) => {
      e.target.value;
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const onNewAssignDialogClose = () => {
    dispatch(updateNewAssgnView(false));
  };

  const onCreateAssignClick = () => {
    (async () => {
      const newCustResponse = await createNewCustomer({
        name: assignFormData.customerName,
        gender: assignFormData.gender,
        phone: assignFormData.customerPhone,
        email: assignFormData.customerEmail,
        vehicleNum: assignFormData.vehicleNum,
      });
      if (newCustResponse.status.statusFlag === "SUCCESS") {
        console.log(newCustResponse.data);
        const newVehicleResponse = await addNewVehicle({
          vehicleNum: assignFormData.vehicleNum,
          make: assignFormData.make,
          model: assignFormData.model,
          year: Number(assignFormData.year),
          owner_id: newCustResponse.data.cust_id,
          odo_reading: Number(assignFormData.odoReading),
          last_service: assignFormData.lastServiceDate,
        });

        if (newVehicleResponse.status.statusFlag === "SUCCESS") {
          const newAssignResponse = await createNewAssignment({
            vehicleNum: assignFormData.vehicleNum,
            owner_id: newCustResponse.data.cust_id,
            checkin_date: assignFormData.checkInDate,
            issue: assignFormData.issue,
          });
          if (newAssignResponse.status.statusFlag === "SUCCESS") {
            toast(ASSIGNMENT_SUCCESSFUL, { type: "success" });
            dispatch(updateNewAssgnView(false));
            router.push(ROUTE_ASSIGNMENTS);
          }
        }
      }
    })();
  };

  const isAssignmentDetailsFilled = isTabCompleted({
    vehicleNum: assignFormData.vehicleNum,
    issue: assignFormData.issue,
    checkInDate: assignFormData.checkInDate,
  });

  const isVehicleDetailsFilled = isTabCompleted({
    vehicleNum: assignFormData.vehicleNum,
    make: assignFormData.make,
    model: assignFormData.model,
    year: assignFormData.year,
    lastServiceDate: assignFormData.lastServiceDate,
    odoReading: assignFormData.odoReading,
  });

  const isCustomerDetailsFilled = isTabCompleted({
    customerName: assignFormData.customerName,
    gender: assignFormData.gender,
    customerPhone: assignFormData.customerPhone,
    customerEmail: assignFormData.customerEmail,
  });
  return (
    <>
      <Dialog
        sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: "80vh" } }}
        maxWidth={"xl"}
        PaperComponent={Paper}
        open={isDialogOpen}
        keepMounted={true}
        onClose={onNewAssignDialogClose}
      >
        <Title onClose={onNewAssignDialogClose} />
        <DialogContent dividers>
          <AssignmentContext.Provider
            value={{
              formData: assignFormData,
              onInputChange: onInputChange,
              isAssignmentDetailsFilled,
              isCustomerDetailsFilled,
              isVehicleDetailsFilled,
            }}
          >
            <NewAssignmentForm />
          </AssignmentContext.Provider>
        </DialogContent>
        <ActionsBar
          onClose={onNewAssignDialogClose}
          onCreateClick={onCreateAssignClick}
          isSubmitDisabled={
            !(
              isAssignmentDetailsFilled &&
              isVehicleDetailsFilled &&
              isCustomerDetailsFilled
            )
          }
        />
      </Dialog>
    </>
  );
};
