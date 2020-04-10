import React from "react";
import "./App.css";
import Image from "./layout-components/Image";
import { imageAPI } from "./utility/api";
// import Amplify from 'aws-amplify';
// import awsmobile from './aws-exports';
// Amplify.configure(awsmobile);

class AppComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      photos: [],
      row1: [],
      row2: [],
    };
  }

  componentDidMount() {
    this.getPhotos();
  }

  // API call
  getPhotos = () => {
    imageAPI({}).then((res) => {
      this.setState({ photos: res.data });
      this.split();
    });
  };

  // Images are split into two separate rows
  /* TODO 13 images is what looks best on a 34" ultrawide monitor, however on any
    standard monitor, the aspect ratio is distorted. Will likely need to build
    container for the ultrawide monitor, or set a maximum width*/
  split() {
    let length = this.state.photos.length;
    let row1 = [];
    let row2 = [];
    for (let index = 0; index < length; index++) {
      const element = index;
      if (element < 11) {
        row1.push(this.state.photos[element]);
      } else {
        row2.push(this.state.photos[element]);
      }
    }
    this.setState({ row1: row1 });
    this.setState({ row2: row2 });
  }

  render() {
    return (
      <div data-test="main-content">
        <div className="row">
          {this.state.row1.map((photo: any) => (
            <Image
              key={photo.id}
              id={photo.id}
              image={photo.download_url}
            />
          ))}
        </div>
        <div className="row">
          {this.state.row2.map((photo: any) => (
            <Image
              key={photo.id}
              id={photo.id}
              image={photo.download_url}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default AppComponent;
