export default  function Cookie(props) {
    console.log(111111,7777,props.cookiess['total'])
    return (
      <div className="mx-auto my-4 bg-gray-0  ">
  
          <p className="text-xl text-center">{props.cookiess['location'] || "waiting ..."}  </p>
        
        
      </div>
  
    )
  }