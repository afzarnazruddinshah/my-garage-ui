"use client";
import { Title } from "@/_components/Title/Title";
import { Button, Divider, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { IGarage } from "./interfaces";
import { fetchGarageById } from "@/services/garages/fetchGarageById";

const initialState: IGarage = {
  address: "",
  city: "",
  email: "",
  garage_owner_name: "",
  gid: 0,
  name: "",
  phone: "",
  state: "",
  zipcode: "",
};
export const MyGarageForm = () => {
  const [garageInfo, setGarageInfo] = React.useState<IGarage>(initialState);
  useEffect(() => {
    (async () => {
      const data = await fetchGarageById();
      setGarageInfo(data);
    })();
  }, []);

  return (
    <div>
      <form>
        <div className="form-group">
          <div className="form-field">
            <p>
              <label htmlFor="gname-input">Garage Name:</label>
            </p>
            <TextField
              name="gname"
              fullWidth
              required={true}
              value={garageInfo?.name}
              type="text"
              placeholder="Enter Garage Name"
              id="gname-input"
              tabIndex={0}
              variant="outlined"
            />
          </div>
          <div></div>
          <div className="form-field">
            <p>
              <label htmlFor="address-input">Address:</label>
            </p>
            <TextField
              name="address"
              required={true}
              fullWidth
              type="text"
              value={garageInfo?.address}
              placeholder="Enter Garage Address"
              id="address-input"
              tabIndex={0}
              variant="outlined"
            />
          </div>
          <div className="form-field">
            <p>
              <label htmlFor="city-input">City:</label>
            </p>
            <TextField
              name="city"
              required={true}
              type="text"
              value={garageInfo?.city}
              fullWidth
              placeholder="(eg., Chennai)"
              id="city-input"
              tabIndex={0}
              variant="outlined"
            />
          </div>
          <div className="form-field">
            <p>
              <label htmlFor="state-input">State:</label>
            </p>
            <TextField
              name="state"
              required={true}
              value={garageInfo?.state}
              type="text"
              placeholder="(eg., Tamilnadu)"
              id="state-input"
              fullWidth
              tabIndex={0}
              variant="outlined"
            />
          </div>
          <div className="form-field">
            <p>
              <label htmlFor="pincode-input">Pincode:</label>
            </p>
            <TextField
              name="pincode"
              required={true}
              type="number"
              value={garageInfo?.zipcode}
              fullWidth
              placeholder="(eg., 625014)"
              id="pincode-input"
              tabIndex={0}
              variant="outlined"
            />
          </div>
          <div></div>
          <div className="form-field">
            <p>
              <label htmlFor="owner-name-input">Owner Name:</label>
            </p>
            <TextField
              name="owner-name"
              required={true}
              type="text"
              fullWidth
              value={garageInfo?.garage_owner_name}
              placeholder="Enter Garage Owner Name"
              id="owner-name-input"
              tabIndex={0}
              variant="outlined"
            />
          </div>
          <div className="form-field">
            <p>
              <label htmlFor="phone-input">Phone:</label>
            </p>
            <TextField
              name="phone"
              required={true}
              fullWidth
              type="number"
              value={garageInfo?.phone}
              // value={garageInfo.}
              placeholder="(eg., +919988776655)"
              id="phone-input"
              tabIndex={0}
              variant="outlined"
            />
          </div>
          <div className="form-field">
            <p>
              <label htmlFor="email-input">Email:</label>
            </p>
            <TextField
              name="email"
              required={true}
              fullWidth
              type="email"
              value={garageInfo?.email}
              placeholder="garage-name@email.com"
              id="email-input"
              tabIndex={0}
              variant="outlined"
            />
          </div>
          <div></div>
        </div>
      </form>
    </div>
  );
};
