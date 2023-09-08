import Image from 'next/image'
import HomeBanner from '@/components/HomeBanner'
import HomeAbout from '@/components/HomeAbout'
import HomeDonate from '@/components/HomeDonate'
import HomeSupport from '@/components/HomeSupport'

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <HomeAbout/>
      <HomeDonate/>
      <HomeSupport/>
    </main>
  )
}
