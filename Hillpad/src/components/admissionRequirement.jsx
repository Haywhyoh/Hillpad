export default function AdmissionReq() {
    return(
        <>
            <div className="text-lg">
                <div>
                    <h2 className='font-semibold text-black text-2xl my-6'>Admission Requirement</h2>
                    <h3 className="font-semibold text-light">Academic requirement</h3>
                    <p className="py-2">
                        We are not aware of any requirements for now.
                    </p>
                    <div className="py-5">
                    <h3 className="font-semibold text-light my-3">Other requirement</h3>
                    <h3 className="font-semibold my-2 pt-2">General requirement</h3>
                    <p>
                    Ontario Secondary School Diploma (OSSD) or equivalent with a minimum of six Grade 12
                    U or M courses including the following program specific requirements.
                    Typically, a minimum overall average of 70%
                    establishes eligibility for admission consideration;
                    subject to competition individual programs may require
                    higher prerequisite grades and/or higher overall averages:
                    </p>
                    <ul className=" list-disc px-8 py-4">
                        <li>English Language</li>
                        <li>IELTS</li>
                        <li>SAT</li>
                        <li>WAEC</li>
                        <li>Physics</li>
                        <li>Jamb Result</li>
                    </ul>
                    </div>
                    
                    
                </div>
            </div>
        </>
    )
}