import { useMemo } from "react";

export const useCategoryPizzas = (pizzas, category) => {
    if (category == null) return pizzas;
    const categoryPizzas = [...pizzas].filter(
        (item) => item.category === category
    );
    return categoryPizzas;
};

export const usePizzas = (pizzas, category, sortBy) => {
    const categoryPizzas = useCategoryPizzas(pizzas, category);
    const sortedAndCategoryPizzas = useMemo(() => {
        if(categoryPizzas.length !== 0){
         
            return [...categoryPizzas].sort((a, b) => a[sortBy] < b[sortBy] ? 1 : -1);
        }
        return categoryPizzas;
    }, [sortBy, categoryPizzas]);

    return sortedAndCategoryPizzas;
};
