import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, getFilter } from 'redux/contactSlise';
import { Label, Text, Input } from './Filter.styled';

export const Filter = () => {
  const contactsFilter = useSelector(getFilter);
  const dispatch = useDispatch();
  const changeFieldFilter = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <Label>
      <Text>Input search query</Text>
      <Input type="text" value={contactsFilter} onChange={changeFieldFilter} />
    </Label>
  );
};
