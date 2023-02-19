import Navbar from '../src/components/navbar/Navbar'
import TitleSalesForceLab from '../src/components/titleSalesForceLab/titleSalesForceLab'
import Benefits from '../src/components/benefits/benefits'
import OurService from '../src/components/ourService/OurService'
import Contacts from '../src/components/contacts/Contacts'
import Footer from '../src/components/footer/Footer'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Apexlab | Salesforce</title>
        <meta name="keywords" content="apexlab,programming jobs, freelance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <meta charSet='utf-8' />
      </Head>
      <main >
        <Navbar/>
        <TitleSalesForceLab/>
        <Benefits/>
        <OurService/>
        <Contacts/>
        <Footer/>
      </main>
    </>
  )
}
