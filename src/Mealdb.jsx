import  Meal from './mealdb_components/Meal'
import Hero from './mealdb_components/Hero'
import Nav from './mealdb_components/Nav'
import { useEffect, useState } from 'react'


const Mealdb = () => {
    // a state to track error
    const[error, setError] = useState(false);
    // a state to track loading
    const [loading, setLoading] = useState(true);
    // a state to store what we fetched
    const [meals, setMeals] = useState([]) // empty array initially after fetching we update it to whatever we fetched

    // how to connect with an api correctly

    function fetchMeal(){
        fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            if(data){
                //keep the data inside our state: meals, turn off loading , set error to false
                setMeals(data.meals)
                setError(false)
                setLoading(false)
            }
        })
        .catch(function(err){
            setMeals([])
            setError(true)
            setLoading(false)
        })
    }

    useEffect(function(){
        fetchMeal()
    }, [])

    return(
        <div className="py-10 bg-red-200 text-center min-h-100">
            <h1>Welcome to Meal Db</h1>
            <Nav />
            <Hero />
            <Meal />
            {/* <MyFooter /> */}
        </div>
    )
}


export default Mealdb