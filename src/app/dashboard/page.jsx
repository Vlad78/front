"use client";
import React from "react";
import useSWR from "swr";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api/user/123", fetcher);

  const session = useSession();
  // const { data: session, status } = useSession();

  console.log(session);

  return <div className={styles.container}>Dashboard</div>;
};

export default Dashboard;
