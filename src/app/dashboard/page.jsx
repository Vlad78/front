"use client";
import React from "react";
import useSWR from "swr";
import styles from "./page.module.css";

const Dashboard = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api/user/123", fetcher);

  return <div>Dashboard</div>;
};

export default Dashboard;
