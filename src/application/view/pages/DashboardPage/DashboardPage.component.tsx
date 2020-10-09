import React, { FC } from "react";

export interface IDashboardPageOwnProps {}
export interface IDashboardPageInjectedProps {}
export interface IDashboardPageProps extends IDashboardPageOwnProps, IDashboardPageInjectedProps {}

const DashboardPage: FC<IDashboardPageProps> = () => {
  return (
    <div>
      Dashboard Page
    </div>
  )
};

export default DashboardPage;
