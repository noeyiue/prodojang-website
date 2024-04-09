import Link from 'next/link'
import { PAGE_ROUTES } from '../lib/constants/routes'


export default function Home() {
  return (
    <main>
      <h1>Landing Page</h1>
      <h1>หน้าแรก</h1>
      <Link href={PAGE_ROUTES.LOGIN}>Login</Link>
    </main>
  )
}