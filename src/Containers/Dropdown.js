import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function FilterDropDown({style}) {
  return (
    <DropdownButton id="dropdown-basic-button" title="Dropdown button" style={style}>
      <Dropdown.Item href="#/action-1">Approved</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Rejected</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Pending</Dropdown.Item>
    </DropdownButton>
  );
}

export default FilterDropDown;