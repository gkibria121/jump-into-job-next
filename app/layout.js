import React from 'react'
import '@/Components/AllJobs/AllJobs.css'
import '@/Components/Companies/Companies.css'
import './globals.css'
import '@/Layout/Footer/Footer.css'
import '@/Layout/Header/Header.css'
import "@/Components/Login/Login.css"
import '@/Components/Register/Register.css'
import './responsive.css'
import "@/Home/UserHome/UserHome.css"
import "@/Components/UserProfile/UserProfile.css"
import "@/Components/JobDetails/JobDetails.css"
import "@/Components/JobCategory/JobCategory.css"
import "@/Components/UserMyJobs/UserMyJobs.css"
import { UserProvider } from "@/UserContext/UserContext"
function layout({children}) {
  return (
    <html lang="en">
      <body>
      <UserProvider>

        {children}

      </UserProvider>
        </body>
    </html>
  )
}

export default layout