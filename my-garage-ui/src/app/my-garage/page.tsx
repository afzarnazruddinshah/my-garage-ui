import React from "react";
import { Metadata } from "next";
import { MyGarageForm } from "./MyGarageForm";
import { Header } from "./MyGarageHeader";

export const metadata: Metadata = {
  title: {
    default: "My Garage Details",
    template: "%s | My Garage",
  },
  description:
    "My Garage Details Form to View and Update Garage Name, Address, Contact Details, Owner Info etc.,",
};

export default function MyGarage() {
  return (
    <>
      <Header />
      <MyGarageForm />
    </>
  );
}
