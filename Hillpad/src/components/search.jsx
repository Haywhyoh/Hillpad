import { AiOutlineSearch } from "react-icons/ai"
export default function SearchBar() {
    return (
        <form className='flex items-center border border-light_black border-opacity-20 lg:w-full'>
            <input placeholder='What to study' className='text-light_black font-normal text-sm  p-2 w-1/2 border-e border-light_black border-opacity-20 outline-none' />
            <select placeholder='What to study' className='text-light_black text-sm font-normal bg-white p-2 w-1/2 outline-none'>
                <option className='text-light_black'>Where? </option>
            </select>
            <button type='summit' className='bg-orange text-white p-3'><AiOutlineSearch /></button>
        </form>
    )
}

