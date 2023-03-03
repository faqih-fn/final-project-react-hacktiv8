import Search from "./Search";

const Header = () => {
    const listMenuItem = [<Search className='text-right'/> ]
    return (
      <nav className='sticky top-0 bg-orange-400 h-[5rem] flex justify-between items-center'>
        <h1 className='text-xl text-cyan-50 font-bold text-left'>Final Project Hacktiv8</h1>
        <ul className='flex gap-[3rem] font-medium'>
          {
            listMenuItem.map((menuItem,idx)=>(
              <li key={idx} className='cursor-pointer hover:text-black'>{menuItem}</li>
            ))
          }
        </ul>
      </nav>
    )}

//     <nav style={{backgroundColor:'orange'}}>
//         <h1 className=''>Final Project Hacktiv8</h1>
//         <ul className=''>
//           {
//             listMenuItem.map((menuItem, idx)=>(
//               <li key={idx} className=''>{menuItem}</li>
//             ))
//           }
//         </ul>
//       </nav>
//     )
//   }
  
  export default Header







  
/*export default function Header() {
    return (
        <>
            <nav className=" bg-orange-600 h-24 w-full">
                <div className=" relative flex justify-between h-full w-full">
                    <div className="ml-5 my-6 text-white text-2xl" >Final Project Hacktiv8</div>
                    <div className="flex-wrap w-10/11">
                        <Search/>
                    </div>
                </div>
            </nav>
        </>
    )
}*/


