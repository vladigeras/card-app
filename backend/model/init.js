let fs = require('fs');

let Card = require('./Card');
let cards = [];

cards.push(new Card(1, "IntelliJ IDEA", "The most intelligent Java IDE", readBase64ImgByPath("./img/intellijidea.jpg")));
cards.push(new Card(2, "WebStorm", "The smartest JavaScript IDE", readBase64ImgByPath("./img/webstorm.jpg")));
cards.push(new Card(3, "PyCharm", "Python IDE for professional developers", readBase64ImgByPath("./img/pycharm.png")));
cards.push(new Card(4, "CLion", "A smart cross-platform IDE for C and C++", readBase64ImgByPath("./img/clion.png")));
cards.push(new Card(5, "AppCode", "Smart IDE for iOS/macOS development", readBase64ImgByPath("./img/appcode.png")));
cards.push(new Card(6, "Rider", "Cross-platform .NET IDE", readBase64ImgByPath("./img/rider.png")));
cards.push(new Card(7, "PhpStorm", "Lightning-smart PHP IDE", readBase64ImgByPath("./img/phpstorm.jpg")));
cards.push(new Card(8, "DataGrip", "Many databases, one tool", readBase64ImgByPath("./img/datagrip.jpg")));
cards.push(new Card(9, "ReSharper", "Visual Studio extension for .NET developers", readBase64ImgByPath("./img/resharper.png")));
cards.push(new Card(10, "GoLand", "Capable and Ergonomic Go IDE", readBase64ImgByPath("./img/goland.jpg")));

module.exports = cards;

function readBase64ImgByPath(path) {
    let bitmap = fs.readFileSync(path);
    return new Buffer(bitmap).toString('base64');
}