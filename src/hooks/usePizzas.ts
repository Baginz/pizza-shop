import { useMemo } from "react";
import { IPizzas } from "../interfaces/interfaces";

export const useCategoryPizzas = (pizzas: IPizzas[], category: number | null) => {
    if (category == null) return pizzas;
    const categoryPizzas = [...pizzas].filter(
        (item) => item.category === category
    );
    return categoryPizzas;
};

export const usePizzas = (pizzas: IPizzas[], category: number | null, sortBy: keyof IPizzas) => {
    const categoryPizzas = useCategoryPizzas(pizzas, category);
    const sortedAndCategoryPizzas = useMemo(() => {
        if(categoryPizzas.length !== 0){
         
            return [...categoryPizzas].sort((a, b) => a[sortBy] < b[sortBy] ? 1 : -1);
        }
        return categoryPizzas;
    }, [sortBy, categoryPizzas]);

    return sortedAndCategoryPizzas;
};
