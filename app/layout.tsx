import FooterSection from '@components/sections/footer'
import './globals.css'
import NavigationSection from '@components/sections/navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavigationSection />
        {children}
        <FooterSection />
      </body>
    </html>
  )
}
