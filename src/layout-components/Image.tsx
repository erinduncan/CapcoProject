import React from "react";

/* This is the function to randomize the background color of each tile,
  once/if I switch to transparent pngs*/
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
  constructor(props: any) {
    super(props);
    this.state = {
      hovered: false,
    };
  }

  onHover = (id: any) => {
    const thisElement = document.getElementById(id);
    let element;

    if (thisElement != null) {
      element = document.getElementsByClassName("images");
      [].forEach.call(element, (image: any) => {
        image.classList.remove("hovered");
        setColor(thisElement, RandomColor());
      });
      thisElement.classList.add("hovered");
    }
  };

  onLeave = (id:any) => {
    const thisElement = document.getElementById(id);

    if (thisElement != null) {
        setColor(thisElement, 'lightgray');
    }
  };
  

  render() {
    return (
      <div
        data-test="main-content"
        id={this.props.id}
        className="images"
        onMouseEnter={() => this.onHover(this.props.id)}
        onMouseLeave={() => this.onLeave(this.props.id)}
      >
        <img className="tile" src={this.props.image} alt="IMG" />
      </div>
    );
  }
}

export default Image;
