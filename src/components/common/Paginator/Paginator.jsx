import React, {useState} from 'react';
import s from './Paginator.module.css';
import cn from 'classnames'; // Для более удобного написания нескольких классов у одного элемента(Через запятую как параметры функции)
let Paginator = ({totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.pagination}>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber((portionNumber - 1))
            }}>PREV</button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span onClick={(e) => {
                        onPageChanged(p)
                    }} key={p}
                                 className={currentPage === p && s.selectedPage}>{p}</span>
                })}
            {portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber((portionNumber + 1))}}>NEXT</button>}
        </div>
    )
}
export default Paginator;
