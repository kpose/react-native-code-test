import { AuthProvider } from "Navigation/AuthProvider";

import React from "react";
import Routes from "./Routes";

export default function Providers() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
