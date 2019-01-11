import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Media } from 'reactstrap';

class DishDetail extends Component {
    
    

   
    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    renderComments(commentsArg) {
        if (commentsArg != null) {
            const comments = commentsArg.map((comment) => {
                return (
                 
                    <Media list key={comment.id} className="list-unstyled">
                        <Media tag="li">
                      
                            <p>{comment.comment}</p>
                        </Media>
                        <Media tag="li">
                            -- {comment.author}, {new Intl.DateTimeFormat('en-US',
                                { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(comment.date))}
                                              
                        </Media>
                    </Media>
                                          
                                            
                );
            });
            return (
                <div>
                
                    <Media>
                        <h4>Comments</h4>
                    </Media>
                    {comments}
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        

        let comments;
        if (this.props.dish != null) {
            comments = this.renderComments(this.props.dish.comments);
        }

        return (
            <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {comments}
                </div>
            </div>
</div>
        );
    }
}
export default DishDetail;