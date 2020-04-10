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
  
  //eslint-disable-next-line
  const styles = {
    backgroundColor: RandomColor(),
  };

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
        console.log(document.body.style.backgroundColor);
        image.style.backgroundColor = RandomColor();
      });
      thisElement.classList.add("hovered");
    }
  };

  render() {
    return (
      <div
        data-test="main-content"
        id={this.props.id}
        className="images"
        onMouseEnter={() => this.onHover(this.props.id)}
      >
        <img src={this.props.image} alt="IMG" />
      </div>
    );
  }
}

export default Image;
