import React from 'react';

export let CardComponent = (props) => {
    return (
        <div className="col s6 m4 l3">
            <div className="card">
                <div className="card-image">
                    <img alt="" src={props.img}/>
                    <span className="card-title">{props.title}</span>
                </div>
                <div className="card-content">
                    <p>{props.description}</p>
                </div>
                <div className="card-action">
                    <a href="#">{props.link}</a>
                </div>
            </div>
        </div>
    )
};

