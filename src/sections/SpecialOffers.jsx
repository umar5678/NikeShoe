import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
    return (
        <section className="flex justify-wrap items-center max-lg:flex-col-reverse gap-10 max-container">
            <div className="flex-1"></div>
            <img src={offer} alt="offer" height={687} width={773} className="object-contain w-full" />
            <div className="flex w-full flex-col">

                <h2 className="mt-10 font-palanquin text-4xl caption-bottom font-bold lg:max-w-lg ">
                    <span className="text-coral-red inline-block mt-3">Special</span> Offer

                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                    Discover Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit numquam exercitationem atque! Lorem ipsum dolor sit.
                </p>
                <p className="mt-6 lg:max-w-lg info-text">
                    Discover Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.
                </p>
                <div className="mt-11 flex flex-wrap gap-4">
                    <Button label="Shop Now" iconUrl={arrowRight} />
                    <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
                </div>
            </div>

        </section>
    )
}

export default SpecialOffers