export default function ProjectStructure({prop}) {
    return (
        <div>
             <div>
            <h2 className='font-semibold text-black text-2xl my-6'>Project Structure</h2>
        </div>
        <div dangerouslySetInnerHTML={{__html:prop.programme_structure}} id="programmes" className="text-light_black">
           
        </div>
        </div>
    )
}