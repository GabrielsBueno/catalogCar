import './catalogCars.scss'
import Categories from '../categories/categories';
import CarsList from '../CarsList/CarsList';

export default function catalogCars(){
    return(
        <div className="catalogCarsContainer">
            <Categories></Categories>
            <CarsList></CarsList>
        </div>
    );
}