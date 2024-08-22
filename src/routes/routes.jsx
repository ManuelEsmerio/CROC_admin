import { Route, Routes } from "react-router-dom"

// Pages Auth
import SignIn from "../pages/Auth/SignIn"
import ResetPassword from "../pages/ResetPassword/ResetPassword"

// Pages Home
import Dashboard from "../pages/Dashboard/Dashboard"
import Profile from "../pages/Profile/Profile"
import Account from "../pages/Account/Account"
import User from "../pages/User/User"

import NotFound from "../pages/NotFound/NotFound"
// import SignUp from "../pages/SignUp"
// import NotFound from "../pages/NotFound"
// import Profile from "../pages/Profile"
// import Account from "../pages/Account"
// import Home from "../pages/Home/Home"
// import ResetPassword from "../pages/ResetPassword"
// import VerifyCode from "../pages/VerifyCode"
// import User from "../pages/User/User"

const AppRoute = () => {
    return (
        <>
            <Routes>
                {/* Add pages here if you don't wanna see the Drawer layout */}
                <Route path="/">
                    <Route path="" element={<SignIn />} />
                    {/* <Route path="" element={<Home />}></Route> */}
                    {/* <Route path="Register" element={<SignUp />} /> */}
                    <Route path="ForgotPassword" element={<ResetPassword />}></Route>
                    {/* <Route path="VerifyEmail" element={<VerifyCode />}></Route> */}
                    <Route path="*" element={<NotFound />} />
                </Route>
                {/* Add all pages here inside dashboard route if you want to see the Drawer layout in all the pages  */}
                <Route path="/Dashboard/" element={<Dashboard />}>
                    <Route path="Profile" element={<Profile />}></Route>
                    <Route path="Account" element={<Account />}></Route>
                    <Route path="User" element={<User />}></Route>
                </Route>
            </Routes>
        </>
    )
}

export default AppRoute
