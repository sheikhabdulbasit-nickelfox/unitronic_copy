"use client"
import CommonLayout from "@local/layouts/commonLayout"
import PrivateLayout from "@local/layouts/privateLayout"
import PublicLayout from "@local/layouts/publicLayout"
import Providers from "@local/redux/Providers"
import ThemeProviders from "@local/themes/ThemeProviders"
import "../styles/globals.css"
import { CookiesProvider } from "react-cookie"
import { usePathname } from "next/navigation"

export default function RootLayout({ children }) {
  const path = usePathname()
  const isPublic = path?.includes("/auth/")
  const isPrivate = path?.includes("/user/")

  const Wrapper = isPublic ? PublicLayout : isPrivate ? PrivateLayout : CommonLayout
  return (
    <CookiesProvider>
      <Providers>
        <ThemeProviders>
          <html lang="en">
            <body className="bg-[#f5f6f8] !m-0">
              <Wrapper>{children}</Wrapper>
            </body>
          </html>
        </ThemeProviders>
      </Providers>
    </CookiesProvider>
  )
}
