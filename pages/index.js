import Head from "next/head";
import { useState } from "react"
export default function Home() {
  const [cookiess, serCookiess ] = useState('no cookie yet ')

  const [cookie, serCookie ] = useState('no cookie yet ')
  const [cookie2, serCookie2 ] = useState('no cookie yet ') 
  const [cookie3, serCookie3 ] = useState('no cookie yet ')


  function submitHandler(event){
    event.preventDefault()

    serCookiess(event.target.cookiess.value)
   console.log(cookiess)
   serCookie(event.target.cookie.value)
   console.log(cookie)
   serCookie2(event.target.cookie2.value)
   console.log(cookie2)
   serCookie3(event.target.cookie3.value)
   console.log(cookie3)


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
        <Cookie cookiess={cookiess} cookie={cookie} cookie2={cookie2} cookie3={cookie3}/>
      </main>
      <footer className="p-8 mt-8 bg-green-500 text-gray-50">&copy;2023</footer>
    </>
  );
}

function Header() {
  return (
    <header className="p-8  bg-green-500 text-gray-50  " >
      <h1 className="text-4xl  text-black">cookie stand admin</h1>
    </header>
  );
}

function Form(props) {
  return (
    <form onSubmit={props.handler}>
      <div className="flex flex-row ">
        <p className="h-auto right-0 flex justify-between items-center">
          location
        </p>
        <input name="cookiess" className="m-8   w-1/2" />
      </div>
      <div className="flex flex-row ">
        <section className="w-3/12 flex flex-col justify-between items-center">
        <p className="h-auto right-0 flex justify-between items-center">minmum custmer per houer</p>
        <input name="cookie" className="m-8" />
        </section>
        <section className="w-3/12 flex flex-col justify-between items-center">
        <p className="h-auto right-0 flex justify-between items-center">maximum custmers per hour</p>
        <input name="cookie2" className="m-8" />
        </section>
        <section className="w-3/12 flex flex-col justify-between items-center">
        <p className="h-auto right-0 flex justify-between items-center">avrage cookies per sale</p>
        <input name="cookie3" className="m-8" />
        </section>
        <button className="bg-green-500 w-2/12 "  >create</button>
      </div>
    </form>
  );
}
function Cookie(props) {
  return (
    <div className="mx-auto my-4 bg-gray-0  ">

        <p className="text-xl text-center">{props.cookiess}   {props.cookie}   {props.cookie2}   {props.cookie3}</p>
      
      
    </div>

  )
}