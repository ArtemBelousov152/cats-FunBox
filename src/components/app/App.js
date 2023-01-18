import Card from '../card/Card';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.scss';

function App() {
    const [catsData, setCatsData] = useState([
        {
            portions: 10,
            mice: 'мышь в подарок',
            weight: '0,5',
            flavored: 'с фуа-гра',
            activeText: 'Печень утки разварная с артишоками.',
            disable: false
        },
        {
            portions: 40,
            mice: '2 мыши в подарок',
            weight: '2',
            flavored: 'с рыбой',
            activeText: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
            disable: false
        },
        {
            portions: 100,
            mice: '5 мышей в подарок заказчик доволен',
            weight: '5',
            flavored: 'с курой',
            activeText: 'Филе из цыплят с трюфелями в бульоне.',
            disable: true
        }
    ]);

    return (
        <div className="app">
            <div className='app__container'>
                <h1 className='app__title'>Ты сегодня покормил кота?</h1>
                <div className='app__cards'>
                    {catsData.map(item => {
                        return <Card
                            activeText={item.activeText}
                            flavored={item.flavored}
                            mice={item.mice}
                            portions={item.portions}
                            weight={item.weight}
                            key={uuidv4()} 
                            disable={item.disable}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
