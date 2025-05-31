// ライブラリのインポート
import React from 'react';
import books from './React_SBsample/books';
import ListTemplate from './React_SBsample/ListTemplate';
import LIstComponent from './React_SBsample/ListComponent';

// 7章
import Counter from './React_SBsample/Counter';
import StateEffect from './2025_05_component/useEffect';
import HookTimer from './2025_05_component/HookTimer';
import LayoutEffect from './2025_05_component/useLayoutEffect';

const ReactApp = () => {
    const props = {
      time: 5,
      name: 'nakayama',
    };

    const {time , name } = props;


    return (
      <>
        {/* 3章 */}
        {/* <StyledPanel>
            <ListTemplate list={books}>
                { elem => <LIstComponent elem={elem} key={elem.id} />} 
            </ListTemplate>
        </StyledPanel> */}

        {/* <Counter /> */}

        {/* 7章 */}
        {/* <StateEffect /> */}
        {/* <HookTimer startTime={time} name={name}/> */}
        <LayoutEffect />
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