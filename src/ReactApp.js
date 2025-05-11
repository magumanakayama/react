// ライブラリのインポート
import React from 'react';
import books from './React_SBsample/books';
import ListTemplate from './React_SBsample/ListTemplate';
import LIstComponent from './React_SBsample/ListComponent';
import Counter from './React_SBsample/Counter';

const ReactApp = () => {
    return (
      <>
        <StyledPanel>
            <ListTemplate list={books}>
                { elem => <LIstComponent elem={elem} key={elem.id} />} 
            </ListTemplate>
        </StyledPanel>

        <Counter />
      </>
    )
}

const StyledPanel = ({children}) => {
    return (
        <div style={{
          margin: 50,
          padding: 20,
          border: '1px solid #000',
          width: 'fit-content',
          boxShadow: '10px 5px 5px #999',
          backgroundColor: '#fff'
        }}>
          {children}
        </div>
      );
}

export default ReactApp;