import React from "react";


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
      });

      thisElement.classList.add("hovered");
    }
  };

  render() {
    return (
      <div
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
