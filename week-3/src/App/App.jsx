import Rate from '../Rate/Rate'
import './App.css'

const rateData = [
    {
        background_title : "#02b3bffd",
        title : "Безлимитный 300",
        price : "руб 300/мес",
        background_price: "#7ae8f0fd",
        speed : "до 10 Мбит/сек",
        limite : "Объём включенного трафика не ограничен"
    },
    {
        background_title : "#054f34fd",
        title : "Безлимитный 450",
        background_price: "#178a60fd",
        price : "руб 450/мес",
        speed : "до 50 Мбит/сек",
        limite : "Объём включенного трафика не ограничен"
    },
    {
        background_title : "#a3030efd",
        title : "Безлимитный 550",
        background_price: "#de2834fd",
        price : "руб 550/мес",
        speed : "до 100 Мбит/сек",
        limite : "Объём включенного трафика не ограничен"
    },
    {
        background_title : "#000000fd",
        title : "Безлимитный 1000",
        background_price: "#121111fd",
        price : "руб 1000/мес",
        speed : "до 200 Мбит/сек",
        limite : "Объём включенного трафика не ограничен"
    }
]

export default function App() {
    return (
        <div className='container'>
            {
                rateData.map((rate,index) => (
                    <Rate
                    {...rate} key = {index}
                    />
                ))
            }
        </div>
    )
}
