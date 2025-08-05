import * as React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
} from "@mui/material";
import { AccordionTitle } from "./AccordionTitle";
import { IAssignForm } from "./NewAssignmentForm";
import { AssignmentContext, IAssignmentContext } from "./NewAssignmentDialog";

export interface IAssignmentDetails {
  formData: IAssignForm;
  isFilled: boolean;
  onInputChange: (e: React.SyntheticEvent) => void;
}

export const AssignmentDetails = () => {
  return (
    <AssignmentContext.Consumer>
      {({
        formData,
        onInputChange,
        isAssignmentDetailsFilled,
      }: IAssignmentContext) => (
        <Accordion defaultExpanded>
          <AccordionTitle
            title="Assignment Details"
            isCompleted={isAssignmentDetailsFilled}
          />
          <AccordionDetails>
            <div className="form-group">
              <div className="form-field">
                <p>
                  <label htmlFor="vehicleNum">Vehicle Number:</label>
                </p>
                <TextField
                  name="vehicleNum"
                  fullWidth
                  required={true}
                  onChange={onInputChange}
                  type="text"
                  value={formData.vehicleNum}
                  placeholder="Enter Vehicle Number"
                  id="vehicleNum"
                  tabIndex={0}
                  variant="outlined"
                />
              </div>
              <div className="form-field">
                <p>
                  <label htmlFor="issue">Issue Reported:</label>
                </p>
                <TextField
                  name="issue"
                  fullWidth
                  value={formData.issue}
                  required={true}
                  onChange={onInputChange}
                  type="text"
                  placeholder="Enter Issue Description"
                  id="issue"
                  tabIndex={0}
                  variant="outlined"
                />
              </div>
              <div className="form-field">
                <p>
                  <label htmlFor="checkInDate">Check-in Date:</label>
                </p>
                <TextField
                  name="checkInDate"
                  fullWidth
                  value={formData.checkInDate}
                  onChange={onInputChange}
                  required={true}
                  type="date"
                  placeholder="Enter Check-in Date"
                  id="checkInDate"
                  tabIndex={0}
                  variant="outlined"
                />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      )}
    </AssignmentContext.Consumer>
  );
};
