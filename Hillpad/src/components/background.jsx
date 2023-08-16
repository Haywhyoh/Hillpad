import { useSelector } from "react-redux"
import { useState } from "react"
import { useLocation, useParams } from "react-router-dom"

export default function Background({prop}) {
    const location = useLocation();
    const [data, setData] = useState(location.state);
    const param = useParams();
    const courses = useSelector((state) => state.courses.coursesList);    

    const month = {
        '1': 'Januaru',
        '2': 'February',
        '3': 'March',
        '4': 'April',
        '5': 'May ',
        '6': 'June',
        '7': 'July',
        '8': 'August',
        '9': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December',
    }

    if(location.state === undefined) {
        const course = courses.find(course => course.slug === param.slug);
        setData(course);
        
    }
    const disciplines = data.disciplines;
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
                    disciplines.map((discipline, index) => {
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
               {data.language.name}
            </div>
            
        </div>
        <div className="font-semibold mt-8">
            <h3 className="text-light text-base">Dates and Deadlines</h3>
            <div className="my-3"> <span>Application Deadline: </span>
            {month[data.course_dates.deadline_month]} {data.course_dates.deadline_year}
            </div>
            <div className="my-3"> <span>Session Starts: </span>
            {month[data.course_dates.start_month]} {data.course_dates.start_year}
            </div>
            
            
        </div>
            </div>
        </div>
    )
}