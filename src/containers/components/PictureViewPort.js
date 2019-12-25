import React, { Component } from 'react';
import '../App.css';

class PictureViewPort extends Component {
  onImageClick = e => {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    
    modal.style.display = "block";
    modalImg.src = e.currentTarget.src;
    captionText.innerHTML = e.currentTarget.alt;
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
      modal.style.display = "none";
    }
  }

  randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  render() {
    const paths = this.props.paths
    return (
      <div className="picture">
        <div className='gallery'>
          {
            paths.map(path => (
              <div key={ path } className={ 'gallery__item--' + this.randomInteger(1, 3) }>
                <img src={ path } className="gallery__img" alt={ path } onClick={ this.onImageClick } />
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default PictureViewPort;
