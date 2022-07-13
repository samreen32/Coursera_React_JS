import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

export class Dishdetail extends Component {

constructor(props) {
    super(props);
    this.state = {
        selectedDish: null,
    };
}



//function
renderDish(dish) {
  if (dish != null){
      return(
        <div className="col-12 col-md-5 m-1">
          <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
          </Card>
        </div>
      );
      }
      else{
        return(
            <div></div>
        );
      }
}


//comment function
renderComments(comments){
  if (comments === null) {
    return (<div></div>);
  }
  const com = comments.map((comment) => {
    return (
      <ul className="list-unstyled" key={comment.id}>
      <li>
        <p>{comment.comment}</p>
        <p>
          -- {comment.author}, {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(new Date(comment.date))}
        </p>
      </li>
      </ul>
    );
  });
  return (
    <div className="col-12 col-md-5 m-1">
      <h4> Comments </h4>
      {com}
    </div>
  );
}




render() {
    const dish=this.props.dish;
    if (dish === null) {
      return (<div></div>);
    }

      return (
        <div className="container">
          <div className="row">
              {this.renderDish(dish)}
              {this.renderComments(dish.comments)}
          </div>
        </div>
      );
    }
  
}


export default Dishdetail;