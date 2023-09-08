import HomeBanner from '@/components/HomeBanner'
import HomeAbout from '@/components/HomeAbout'
import HomeDonate from '@/components/HomeDonate'
import HomeSupport from '@/components/HomeSupport'
import HomeVolunteer from '@/components/HomeVolunteer'
import HomeEvents from '@/components/HomeEvents'
import HomeNews from '@/components/HomeNews'

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <HomeAbout/>
      <HomeDonate/>
      <HomeSupport/>
      <HomeNews/>
      <HomeVolunteer/>
      <HomeEvents/>
    </main>
  )
}
