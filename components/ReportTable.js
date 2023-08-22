import React from 'react';
function sum (arr,num){
    let summ=0
    for (var i=0; i<arr.length; i++) {
        summ+=arr[i][num]

   }
   return summ
}
const History = ({cookiess}) => {
    console.log(cookiess)

   
    return (
       <>
       { cookiess.length > 0 ?(
        
       <table className='w-1/2 mx-auto my-8 text-xl center bg-green-200'>
        <thead>
            <tr key="">
                <th className='border border-black '>location</th>
                <th className='border border-black ' >6 am</th>
                <th className='border border-black ' >7 am</th>
                <th className='border border-black ' >8 am</th>
                <th className='border border-black ' >9 am</th>
                <th className='border border-black ' >10 am</th>
                <th className='border border-black ' >11 am</th>
                <th className='border border-black ' >12pm</th>
                <th className='border border-black ' >1pm</th>
                <th className='border border-black ' >2pm</th>
                <th className='border border-black ' >3pm</th>
                <th className='border border-black ' >4pm</th>
                <th className='border border-black ' >5pm</th>
                <th className='border border-black ' >6pm</th>
                <th className='border border-black ' >7pm</th>
                <th className='border border-black ' >total</th>

            </tr>
        </thead>
        {/* table body */}
        <tbody>
            {cookiess.map(obj =>(
                <tr key={obj.location}>
                    <td className='border border-black '>{obj.location}</td>
                    <td className='border border-black '>{obj.am6}</td>
                    <td className='border border-black '>{obj.am7}</td>
                    <td className='border border-black '>{obj.am8}</td>
                    <td className='border border-black '>{obj.am9}</td>
                    <td className='border border-black '>{obj.am10}</td>
                    <td className='border border-black '>{obj.am11}</td>
                    <td className='border border-black '>{obj.pm12}</td>
                    <td className='border border-black '>{obj.pm1}</td>
                    <td className='border border-black '>{obj.pm2}</td>
                    <td className='border border-black '>{obj.pm3}</td>
                    <td className='border border-black '>{obj.pm4}</td>
                    <td className='border border-black '>{obj.pm5}</td>
                    <td className='border border-black '>{obj.pm6}</td>
                    <td className='border border-black '>{obj.pm7}</td>
                    <td className='border border-black '>{obj.total}</td>

                </tr>
            ))}
        </tbody>
        <tfoot className='bg-green-400'>
        <tr>
            <td  className='border border-black '>total</td>
            <td className='border border-black '>{sum(cookiess,'am6')}</td>
            <td className='border border-black '>{sum(cookiess,'am7')}</td>
            <td className='border border-black '>{sum(cookiess,'am8')}</td>
            <td className='border border-black '>{sum(cookiess,'am9')}</td>
            <td className='border border-black '>{sum(cookiess,'am10')}</td>
            <td className='border border-black '>{sum(cookiess,'am11')}</td>
            <td className='border border-black '>{sum(cookiess,'pm12')}</td>
            <td className='border border-black '>{sum(cookiess,'pm1')}</td>
            <td className='border border-black '>{sum(cookiess,'pm2')}</td>
            <td className='border border-black '>{sum(cookiess,'pm3')}</td>
            <td className='border border-black '>{sum(cookiess,'pm4')}</td>
            <td className='border border-black '>{sum(cookiess,'pm5')}</td>
            <td className='border border-black '>{sum(cookiess,'pm6')}</td>
            <td className='border border-black '>{sum(cookiess,'pm7')}</td>
            <td className='border border-black '>{sum(cookiess,'total')}</td>
           </tr>
        </tfoot>
       </table>
       ) : 'No Cookie Stands Available'
       }
       </>
    );
}

export default History;