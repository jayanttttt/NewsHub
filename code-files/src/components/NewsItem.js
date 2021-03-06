import React, { Component } from 'react'

export class NewsItem extends Component { 
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (

            <div className="my-3">
                <div className="card">
                    <img src={imageUrl?imageUrl:"https://images.news18.com/ibnlive/uploads/2021/10/pm-modi-163359924616x9.jpg"} className="card-img-top" alt="..."/>
                    <div className ="card-body">
                        <h5 className ="card-title">{title}...</h5>
                        <p className ="card-text">{description}...</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className ="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
