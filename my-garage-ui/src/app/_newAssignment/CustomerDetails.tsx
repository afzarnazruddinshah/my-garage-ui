import * as React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
} from "@mui/material";
import { AccordionTitle } from "./AccordionTitle";
import { IAssignmentDetails } from "./AssignmentDetails";
import { AssignmentContext, IAssignmentContext } from "./NewAssignmentDialog";

interface ICustomerDetails extends IAssignmentDetails {}
export const CustomerDetails = () => {
  return (
    <AssignmentContext.Consumer>
      {({
        formData,
        onInputChange,
        isCustomerDetailsFilled,
      }: IAssignmentContext) => (
        <Accordion>
          <AccordionTitle
            title="Customer Details"
            isCompleted={isCustomerDetailsFilled}
          />
          <AccordionDetails>
            <div className="form-group">
              <div className="form-field">
                <p>
                  <label htmlFor="customerName">Customer Name:</label>
                </p>
                <TextField
                  name="customerName"
                  fullWidth
                  required={true}
                  type="text"
                  placeholder="Enter Customer Name"
                  id="customerName"
                  tabIndex={0}
                  variant="outlined"
                  value={formData.customerName}
                  onChange={onInputChange}
                />
              </div>
              <div className="form-field">
                <p>
                  <label htmlFor="gender">Gender:</label>
                </p>
                <TextField
                  name="gender"
                  fullWidth
                  required={true}
                  type="text"
                  placeholder="Gender"
                  id="gender"
                  tabIndex={0}
                  variant="outlined"
                  value={formData.gender}
                  onChange={onInputChange}
                />
              </div>
              <div className="form-field">
                <p>
                  <label htmlFor="customerPhone">Contact Number:</label>
                </p>
                <TextField
                  name="customerPhone"
                  required={true}
                  fullWidth
                  type="number"
                  // value={garageInfo.}
                  placeholder="(eg., +919988776655)"
                  id="customerPhone"
                  tabIndex={0}
                  variant="outlined"
                  value={formData.customerPhone}
                  onChange={onInputChange}
                />
              </div>
              <div className="form-field">
                <p>
                  <label htmlFor="customerEmail">Email:</label>
                </p>
                <TextField
                  name="customerEmail"
                  required={true}
                  fullWidth
                  type="email"
                  placeholder="customer.name@email.com"
                  id="customerEmail"
                  tabIndex={0}
                  variant="outlined"
                  value={formData.customerEmail}
                  onChange={onInputChange}
                />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      )}
    </AssignmentContext.Consumer>
  );
};
