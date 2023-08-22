 export default function Form(props) {
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