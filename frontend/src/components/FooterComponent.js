import React from 'react';

export let FooterComponent = () => {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">This is a example of web-application with React and Express
                            NodeJS</h5>
                        <div className="row">
                            <a href="https://reactjs.org">
                                <img className="col s8 m4 l2" alt="React" src={window.location.origin + "/img/react.png"}/>
                            </a>
                            <a href="https://nodejs.org/en/">
                                <img className="col s8 m4 l2" alt="NodeJS" src={window.location.origin + "/img/nodejs.png"}/>
                            </a>
                        </div>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Contact me</h5>
                        <div className="row">
                            <a href="https://github.com/gerasimovv88">
                                <img alt="GitHub" className="col s3 m3 l3" src={window.location.origin + "/img/github.png"}/>
                            </a>
                            <a href="mailto:gerasimov.v88@gmail.com">
                                <img alt="Gmail" className="col s3 m3 l3" src={window.location.origin + "/img/gmail.jpg"}/>
                            </a>
                            <a href="tg://resolve?domain=vladi_geras">
                                <img alt="Telegram" className="col s3 m3 l3" src={window.location.origin + "/img/telegram.png"}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2018 All rights reserved
                </div>
            </div>
        </footer>
    );
};