import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <>
        {monsters.map(({ name }, key) => {
          return <h1 key={key}>{name}</h1>;
        })}
      </>
    );
  }
}

export default CardList;
