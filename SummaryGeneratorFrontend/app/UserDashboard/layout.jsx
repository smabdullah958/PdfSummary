import CheckAdminLoginChecker from "@/app/UserDashboard/CheckAdminLoginChecker";

export default function RootLayout({ children }) {
  return (
    <div>
      <CheckAdminLoginChecker>
        {" "}
        {/*it will check weateher the user is login or not  */}
        {children}
      </CheckAdminLoginChecker>
    </div>
  );
}
