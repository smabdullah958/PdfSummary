// components/NavbarWrapper.jsx
"use client";

import { usePathname } from "next/navigation";

import MobileHeader from "@/Components/SimpleHeader/MobileHeader";
import Header from "@/Components/SimpleHeader/Header";
import AdminHeader from "@/Components/UserHeader/UserHeader";
import AdminMobileHeader from "@/Components/UserHeader/UserMobileHeader";
import { useSelector } from "react-redux";
export default function NavbarWrapper() {
  const pathname = usePathname();
  //checkloginslice is come froma  store
  let { Role, IsLogIn } = useSelector((state) => state.CheckLogInSlice);

  //dont show a header on a reset password
  if (pathname.startsWith("/Reset_password/")) {
    return null; // don’t show anything
  }

  if (!IsLogIn) {
    // ✅ show default header if not logged in
    return (
      <div>
        <Header />
        <MobileHeader />
      </div>
    );
  }

  return (
    <div>
      {Role === "Admin" || Role === "User" ? (
        <div>
          <AdminHeader />
          <AdminMobileHeader />
        </div>
      ) : (
        <div>
          <Header />
          <MobileHeader />
        </div>
      )}
    </div>
  );
}
