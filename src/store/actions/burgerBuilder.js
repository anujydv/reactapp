import * as actionTypes from "./actionTypes";
import axios from "../../axios-order";

export const addIngredient = (name)=>{
    return {
        type:actionTypes.ADD_INGREDIENT,
        ingredientName:name,        
    }
}
export const removeIngredient = (name)=>{
    return {
        type:actionTypes.REMOVE_INGREDIENT,
        ingredientName:name,        
    }
}

export const fetchIngredientsFailed = ()=>{
    return {
        type:actionTypes.FETCH_INGREDIENTS_FAILED,        
    }
}

export const setIngredient = (ingredients)=>{
    return {
        type:actionTypes.SET_INGREDIENTS,
        ingredients:ingredients

    }
}

export const initIngredient = ()=>{
    return dispatch => {
        axios.get('/ingredient.json')
            .then(response => {
                // console.log(response);
                dispatch(setIngredient(response.data));
                // this.setState({ ingredient: response.data });
            }).catch((error) => {
                dispatch(fetchIngredientsFailed());
                // this.setState({ error: true });
            });            
    }
}