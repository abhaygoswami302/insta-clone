import React, { Component, useEffect } from "react";
import { Slot, Stack, useRouter, useSegments } from "expo-router";
import "../global.css";
import { AuthContextProvider, useAuth } from "@/context/AuthContext";

const Mainlayout = () => {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  useEffect(() => {
    if (typeof isAuthenticated === "undefined") return;
    const inApp = segments[0] == "(app)";
    if (isAuthenticated && !inApp) {
      return router.replace("/(tab)");
    } else if (isAuthenticated === false) {
      return router.replace("/signin");
      // return router.replace("/signin");
    }
  }, [isAuthenticated]);
  return <Slot />;
};

const RootLayout = () => {
  return (
    <AuthContextProvider>
      <Mainlayout />
    </AuthContextProvider>
  );
};

export default RootLayout;
