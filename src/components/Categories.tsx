import React from 'react'

type CategoriesProps = {
  activeCategory: number | null,
  items: string[],
  onClickItem: (index: number | null) => void,
}
const Categories = ({ activeCategory, items, onClickItem }: CategoriesProps) => {

  const onClickCategory = (index: number | null):void => {
    onClickItem(index);
  }

  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeCategory === index ? 'active' : ''}
              onClick={() => onClickCategory(index)}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Categories;
