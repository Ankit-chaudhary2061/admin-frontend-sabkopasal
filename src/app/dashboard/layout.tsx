import Dashboard from "../../lib/components/dashboard/dashboard";

const InstituteDashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <Dashboard>
      {children}
    </Dashboard>
  );
};

export default InstituteDashboardLayout;
