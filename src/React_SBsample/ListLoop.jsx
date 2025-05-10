import React from 'react';
import LIstComponent from './ListComponent';

const ListLoop = ({list}) => {
    return (
        <dl>
            {list.map((elem, index) => (
                <LIstComponent elem={elem} key={elem.id} />
            ))}
        </dl>
    )
}

export default ListLoop;
