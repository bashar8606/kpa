import Header from "@/components/Header/header";
import "../Style/global.scss";
import { Barlow_Semi_Condensed, Barlow, Karla } from 'next/font/google'

const fontPrimary = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: [ '300', '400', '500', '600', '700']
})
const fontHead = Barlow({
  subsets: ['latin'],
  weight: [ '300', '400', '500', '600', '700']
})
const fontSecondary = Karla({
  subsets: ['latin'],
  weight: [ '300', '400', '500', '600', '700']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
       style={{
        "--ff-primary": fontPrimary.style.fontFamily,
        "--ff-secondary": fontHead.style.fontFamily,
        "--ff-tertiary": fontSecondary.style.fontFamily,
      }} 
      >
        <Header/>
        {children}</body>
    </html>
  )
}
