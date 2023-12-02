
import Header from "@/Layout/Header/Header"
import Footer from "@/Layout/Footer/Footer"
import '@/Components/AllJobs/AllJobs.css'
import '@/Components/Companies/Companies.css'
import './globals.css'
import '@/Layout/Footer/Footer.css'
import '@/Layout/Header/Header.css'
import { UserProvider } from "@/UserContext/UserContext"
import "@/Components/Login/Login.css"
import '@/Components/Register/Register.css'
import './responsive.css'

UserProvider
export const metadata = {
  title: 'Jump Into Job',
  description: 'Powerd by Prospect BD',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
      </UserProvider>
    </html>
  )
}
