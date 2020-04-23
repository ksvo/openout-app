import React from "react";

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    //add one city
  }
  render() {
    if (this.state.loading) {
      return <h1>loading ...</h1>;
    }

    const { city, description } = this.state;

    return (
      <div>
        <h1>{city}</h1>
        <button>Choose {city}</button>
        <p>{description}</p>
      </div>
    );
  }
}

export default Details;

//final single item result; where exact activity; specific location and specific site are displayed;
