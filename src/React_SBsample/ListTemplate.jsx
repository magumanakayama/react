import React from 'react';
import ListComponent from './ListComponent';

const ListTemplate = ({list, children}) => {

    // const filteredList = listFilter(list);
    const sortedList = listSort(list);

    return (
        <dl>
            {sortedList.map((elem) => (
                // <ListComponent elem={elem} key={elem.id} />
                <React.Fragment key={elem.isbn}>
                    {children(elem)}
                </React.Fragment>
            ))}
        </dl>
    )
}

const listFilter = (list) => list.filter((elem) => elem.price > 3000);

const listSort = (list) => list.sort((a, b) => a.price - b.price);


export default ListTemplate;
