export default function Background({prop}) {
    return (
        <div className="text-light_black text-base">
            <div>
            <div>
            <h2 className='font-semibold text-black text-2xl my-6'>Key Information</h2>
        </div>

        <div>
            <h3 className="text-light font-semibold text-base">Discipline</h3>
            <div className="my-3">
               {
                    prop.disciplines.map((discipline, index) => {
                        console.log(discipline.name)
                        return (
                           <div key={index}>
                              {discipline.name}
                           </div>
                        )
                    })
               }
            </div>
            
        </div>
        <div>
            <h3 className="text-light font-semibold text-base mt-8">Language</h3>
            <div className="my-3">
                English
            </div>
            
        </div>
        <div className="font-semibold mt-8">
            <h3 className="text-light text-base">Dates and Deadlines</h3>
            <div className="my-3">
            Starting October 2024
            </div>
            <div className="my-3">
               Starting January 2024
            </div>
            
        </div>
            </div>
        </div>
    )
}