import * as METHODS from '../methods';

export const listProducts = async () => {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`, METHODS.GET());
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}

export const searchProducts = async (name) => {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`, METHODS.POST());
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}