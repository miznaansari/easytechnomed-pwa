import CustomerLoginPage from "./auth/login/LoginPageClient";

export const metadata = {
  title: "Login | EasyTechnoMed Laboratory Information Management System",
  description: "Secure laboratory login portal for EasyTechnoMed LIMS. Manage patient registrations, doctor commissions, test reports, and billing.",
};

export default function RootPage() {
  return <CustomerLoginPage />;
}
