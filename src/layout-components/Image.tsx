import React from "react";

/* This is the function to randomize the background color of each hovered image */
function RandomColor() {
  let rc = "#";
  for (let index = 0; index < 6; index++) {
    rc += Math.floor(Math.random() * 16).toString(16);
  }
  return rc;
}

function setColor(element: any, color: any) {
  element.style.backgroundColor = color;
}

export class Image extends React.Component<any, any> {

  // Function that adds and removes the class "hovered" to the hovered image, thus triggering the grow animation
  onHover = (id: any) => {
    const thisElement = document.getElementById(id);
    let element;

    // Conditional to check which row the image will be in, and divides them into two classes so one image from each row can be enlarged at a time
    if (id < 11) {
      element = document.getElementsByClassName("images1");
    } else {
      element = document.getElementsByClassName("images2");
    }

    if (thisElement != null) {
      [].forEach.call(element, (image: any) => {
        image.classList.remove("hovered");
        setColor(thisElement, RandomColor());
      });
      thisElement.classList.add("hovered");
    }
  };

  // Returns the background color to light gray
  onLeave = (id: any) => {
    const thisElement = document.getElementById(id);

    if (thisElement != null) {
      setColor(thisElement, "lightgray");
    }
  };

  render() {
    if (this.props.id < 11) {
      return (
        <div
          data-test="main-content"
          id={this.props.id}
          className="images1"
          onMouseEnter={() => this.onHover(this.props.id)}
          onMouseLeave={() => this.onLeave(this.props.id)}
        >
          <img className="tile" src={this.props.image} alt="IMG" />
        </div>
      );
    } else {
      return (
        <div
          data-test="main-content"
          id={this.props.id}
          className="images2"
          onMouseEnter={() => this.onHover(this.props.id)}
          onMouseLeave={() => this.onLeave(this.props.id)}
        >
          <img className="tile" src={this.props.image} alt="IMG" />
        </div>
      );
    }
  }
}

export default Image;
