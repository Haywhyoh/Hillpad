export default function AdmissionReq({prop}) {
    console.log(prop)
    return(
        <>
            <div className="text-lg text-light_black" id="requirements">
                <div dangerouslySetInnerHTML={{__html:prop.admission_requirements}}>
        
                    
                    
                </div>
            </div>
        </>
    )
}