import React from "react";
import { redirect, RedirectType } from "next/navigation";
import { ROUTE_DASHBOARD } from "@/_utils/routes";

export default function Home() {
  redirect(ROUTE_DASHBOARD);
  return <>Home page</>;
}
