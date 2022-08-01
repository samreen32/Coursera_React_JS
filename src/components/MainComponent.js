import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import { DISHES} from '../shared/dishes';
import Footer from './FooterComponent';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    return (
      <div>
        <Header/>
        <Menu  dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/> {/*only pass dish id bz no need to pass whole dish details as ' dishes: DISHES,' is already passed as props in constructor*/}
        <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
        <Footer/>
      </div>
    );
  }
}


export default Main;
