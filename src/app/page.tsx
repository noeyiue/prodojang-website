import Link from 'next/link'


export default function Home() {
  return (
    <main>
      <h1>Landing Page</h1>
      <h1>หน้าแรก</h1>
      <Link href="/login">Login</Link>
    </main>
  )
}