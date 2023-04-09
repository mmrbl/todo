import { Component } from "react";
import { StyledListItem } from "./ListItem.styled";

export default class ListItem extends Component {
  state = {
    isChecked: false,
  };

  handleStatusChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  render() {
    const { id, text, onDelete } = this.props;
    const { isChecked } = this.state;

    return (
      <StyledListItem isChecked={isChecked}>
        <input
          type="checkbox"
          name=""
          id={id}
          checked={isChecked}
          onChange={this.handleStatusChange}
        />
        {text}
        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </StyledListItem>
    );
  }
}