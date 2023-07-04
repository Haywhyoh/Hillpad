import {FiExternalLink} from 'react-icons/fi'

export default function AboutCountry({props}) {
    return (
        <div>
            <section >
                <div>
                    <div className="text-light_black">
                       <p>{props.about}</p>
                    </div>
                    <div>
                        <a href={props.about_wiki_link} target="_blank" className="text-light my-3 flex gap-2 items-center"><div><FiExternalLink /></div><div>Wikipedia</div></a>
                    </div>
                </div>
                <div>
                    <div><h2 className="font-bold text-xl mt-6">Trivia and Fun Facts</h2></div>
                    <div className="text-light font-bold mt-10 text-sm lg:text-base">Trivia and fun facts about {props.name}</div>
                    <ul className="text-light_black list-disc mx-8">
                        <li>After Russia, Canada is the second largest country in the world in terms of land mass.</li>
                        <li>Canada has more lakes than the rest of the world’s lakes combined. Plenty of opportunities to go for a swim!</li>
                        <li>The Blackberry Smartphone is developed in Waterloo, Ontario.</li>
                        <li>Canada is home to approximately 55,000 different insect species.</li>
                        <li>Canada has a prison for polar bears who break into people’s homes.</li>
                    </ul>
                </div>
            </section>

        </div>

    )
}