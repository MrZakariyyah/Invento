
import { Card } from "flowbite-react";

export function Meal() {
    const Meal = ({error, loading, meals}) => {
        return(
            <>
                <h1 className="text-center text-3xl py-5 font-extrabold">Latest Meal Category</h1>
                <div className="grid gap-2 px-5 py-10 bg-amber-50 grid-cols-3 justify-center">
                

                    <div className="text-center">
                         {
                        loading && !error && <spinner aria-label="Extra large spinner example " size="xl"></spinner>
                        }

                        {
                            !error && !loading && meals.length > 0 && meals.map(function(me){
                                return (
                                        <Card
                                        className="max-w-sm"
                                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                                        imgSrc={me.strThumb}
                                        >
                                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            Noteworthy technology acquisitions 2021
                                        </h5>
                                        <p className="font-normal text-gray-700 dark:text-gray-400">
                                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                        </p>
                                        
                                        </Card>
                                    );
                            })
                        } 

                    </div>

                   

                </div> 
            </>
        )
    }

       
}


    

export default Meal
