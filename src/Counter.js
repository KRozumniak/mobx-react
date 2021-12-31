import React from 'react';
import counter from './store/counter';
import {observer} from "mobx-react-lite";

const Counter = observer(() => {

  console.log('Counter render')

  return (
    <div className={'container'}>
      <div className="btns-box">
        <button className='btn'
                onClick={() => counter.increment()}>+</button>
        <div className={'counter'}>
          {counter.count}
          {/*{counter.total}*/}
        </div>
        <button className='btn'
                onClick={() => counter.decrement()}>-</button>
      </div>
    </div>
  );
});

export default Counter;