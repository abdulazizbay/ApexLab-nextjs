import Navbar from '../src/components/navbar/Navbar'
import TitleSalesForceLab from '../src/components/titleSalesForceLab/titleSalesForceLab'
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
      </main>
    </>
  )
}
