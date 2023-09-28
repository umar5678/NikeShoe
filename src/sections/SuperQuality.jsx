import { shoe6 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
    return (
        <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container" >
            <div className="flex flex-1 flex-col">

                <h2 className="mt-10 font-palanquin text-4xl caption-bottom font-bold lg:max-w-lg ">
                    We Provide You <span className="text-coral-red inline-block mt-3">Super</span>
                    <br />
                    <span className="text-coral-red inline-block mt-3">Quality</span> Shoes
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                    Discover Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit numquam exercitationem atque!
                </p>
                <p className="mt-6 lg:max-w-lg info-text">
                    Discover Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis
                </p>
                <div className="mt-11">
                    <Button label="View Details" />
                </div>
            </div>

            <div className="flex-1 flex justify-center items-center">
                <img src={shoe6} alt="shoe" width={570} height={522} className="object-contain" />
            </div>
        </section>
    )
}

export default SuperQuality