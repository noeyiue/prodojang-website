import { Outfit, Bai_Jamjuree } from 'next/font/google'
 
export const baiJamjuree = Bai_Jamjuree({
  weight: "400",
  subsets: ['thai'],
  variable: '--font-baiJamjuree',
  display: 'swap',
})
 
export const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})