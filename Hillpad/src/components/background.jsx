import { useSelector } from "react-redux"
import { useState } from "react"
import { useLocation, useParams } from "react-router-dom"

export default function Background({ prop }) {
    const location = useLocation();

    const [loading, setLoading] = useState(false)
    const param = useParams();
    const courses = useSelector((state) => state.courses.coursesList);
    let disciplines = {}

    const month = {
        '1': 'January',
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

    if (prop) {
        console.log(prop)
        disciplines = prop.disciplines;
    }

    return (
        <>


            <div className="py-4">
                <h3 className="text-light font-semibold text-lg">Discipline</h3>
                <div className="text-base">
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
                <h3 className="text-light lg:font-semibold text-lg mt-4">Language</h3>
                <div className="my-3 text-base">
                    {prop.language.name}
                </div>

            </div>
            <div className="lg:font-semibold mt-4 text-base">
                <h3 className="text-light text-lg">Dates and Deadlines</h3>
                <div className="my-3"> <span>Application Deadline: </span>
                    {month[prop.course_dates.deadline_month]} {prop.course_dates.deadline_year}
                </div>
                <div className="my-3"> <span>Session Starts: </span>
                    {month[prop.course_dates.start_month]} {prop.course_dates.start_year}
                </div>


            </div>
    </>
        
    )
}