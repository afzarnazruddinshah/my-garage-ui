import * as React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  IconButton,
} from "@mui/material";

import SyncIcon from "@mui/icons-material/Sync";
import { AccordionTitle } from "./AccordionTitle";
import { IAssignmentDetails } from "./AssignmentDetails";
import { AssignmentContext, IAssignmentContext } from "./NewAssignmentDialog";

interface VehicleDetails extends IAssignmentDetails {}
export const VehicleDetails = () => {
  return (
    <AssignmentContext.Consumer>
      {({
        formData,
        onInputChange,
        isVehicleDetailsFilled
        ,
      }: IAssignmentContext) => (
        <Accordion>
          <AccordionTitle
            title="Vehicle Details"
            isCompleted={isVehicleDetailsFilled}
          />
          <AccordionDetails>
            <div className="form-group">
              <div className="form-field">
                <p>
                  <label htmlFor="vehicleNum">
                    Vehicle Number:{" "}
                    <IconButton
                      color="primary"
                      title="Check Existing Vehicle Info"
                      size="small"
                    >
                      <SyncIcon />
                    </IconButton>
                  </label>
                </p>
                <TextField
                  name="vehicleNum"
                  fullWidth
                  required={true}
                  type="text"
                  value={formData.vehicleNum}
                  placeholder="Enter Vehicle Number"
                  id="vehicleNum"
                  tabIndex={0}
                  variant="outlined"
                />
              </div>

              <div></div>
              <div className="form-field">
                <p>
                  <label htmlFor="make">Make:</label>
                </p>
                <TextField
                  name="make"
                  fullWidth
                  required={true}
                  type="text"
                  value={formData.make}
                  onChange={onInputChange}
                  placeholder="Enter Manufacturer Name"
                  id="make"
                  tabIndex={0}
                  variant="outlined"
                />
              </div>
              <div className="form-field">
                <p>
                  <label htmlFor="model">Model:</label>
                </p>
                <TextField
                  name="model"
                  fullWidth
                  required={true}
                  type="model"
                  placeholder="Enter Model Name"
                  id="model"
                  tabIndex={0}
                  variant="outlined"
                  value={formData.model}
                  onChange={onInputChange}
                />
              </div>
              <div className="form-field">
                <p>
                  <label htmlFor="year">Year:</label>
                </p>
                <TextField
                  name="year"
                  fullWidth
                  required={true}
                  type="year"
                  placeholder="Enter Year"
                  id="year"
                  tabIndex={0}
                  variant="outlined"
                  value={formData.year}
                  onChange={onInputChange}
                />
              </div>
              <div className="form-field">
                <p>
                  <label htmlFor="odoReading">Odometer Reading:</label>
                </p>
                <TextField
                  name="odoReading"
                  fullWidth
                  required={true}
                  type="odo-reading"
                  placeholder="Enter Odometer Reading"
                  id="odoReading"
                  tabIndex={0}
                  variant="outlined"
                  value={formData.odoReading}
                  onChange={onInputChange}
                />
              </div>
              <div className="form-field">
                <p>
                  <label htmlFor="lastServiceDate">Last Serviced At:</label>
                </p>
                <TextField
                  name="lastServiceDate"
                  fullWidth
                  required={true}
                  type="date"
                  placeholder="Enter Last Serviced Date"
                  id="lastServiceDate"
                  tabIndex={0}
                  variant="outlined"
                  value={formData.lastServiceDate}
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
