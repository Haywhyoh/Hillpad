import Carousel from "../components/carousel";
import DisciplinesList from "../components/disciplineList";
export default function Explore() {
    return(
        <div className="max-w-full mx-auto mt-40">
        
        <section className="w-full">
          <div className=" lg:mx-4  font-bold text-2xl  md:text-3xl lg:text-5x lg:font-semibold lg:text-3xl text-left " >
            Browse By <span className="text-orange">Programme</span>
          </div>
          <div className="w-full">
            <Carousel />
          </div>
        </section>
        <section className="w-full">
        <div>
                    <h1 className="lg:mt-24 font-bold lg:text-4xl mx-auto ">Browse By Disciplines</h1>

          </div>
          <DisciplinesList />
        </section>
        
        </div>
    )
}