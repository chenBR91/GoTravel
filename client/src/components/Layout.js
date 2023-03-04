import { Outlet } from "react-router-dom";
import Header from "../pages/Header/Header";
import HeaderTitle from "../pages/Header/HeaderTitle"

// function Layout() {
//   return (
//     <>
//       <Header />
//       <Outlet />
//     </>
//   );
// }

// export default Layout;


function Layout() {
  return (
    <>
      <HeaderTitle />
      {/* <Outlet /> */}
    </>
  );
}

export default Layout;
