import React, { useEffect } from "react";
import { useLoggedInUser } from "../../hooks/auth.hook";
import { useNavigate } from "react-router-dom";
import AdminDashboard from "./admin-dashboard";

const Dashboard = () => {
  const navigate = useNavigate();
  const { data: user, isLoading } = useLoggedInUser();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/sign-in");
    }
  }, [isLoading, user]);

  if (isLoading) return <h1>Loading ...</h1>;

  return (
    <>
      {user.role === "admin" && <AdminDashboard />}
    </>
  );
};

export default Dashboard;
