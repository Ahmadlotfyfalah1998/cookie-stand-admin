import Head from "next/head";
import { useState } from "react"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Cookie from "@/components/Cookie";
import ReportTable from "@/components/ReportTable";
export default function Home() {
  const [cookiess, serCookiess ] = useState([])




  function submitHandler(event){
    event.preventDefault()

   
    const cookiesObj={
      location  :event.target.cookiess.value,
      am6:48,
      am7:42,
      am8:30,
      am9:24,
      am10:42,
      am11:24,
      pm12:36,
      pm1:42,
      pm2:42,
      pm3:48,
      pm4:36,
      pm5:42,
      pm6:24,
      pm7:36,
      total:516


    }
    serCookiess([...cookiess,cookiesObj])


  }
  const handlecookie=()=>{
    if(cookiess.length){
      return cookiess[cookiess.length-1]
    }
    else{return "No Cookie Stands Available"}
  }
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />

      <main className="flex flex-col items-center min-h-screen ">
        <div className="flex flex-col">
          <h1>create cookies stand</h1>
        </div>
        <section className="p-8  bg-green-300  mt-8 text-black-50 w-9/12 m=auto">
          <Form handler={submitHandler} />
        </section>
        <ReportTable cookiess={cookiess}/>
       
      </main>
     <Footer cookiess={cookiess}/>
    </>
  );
}




