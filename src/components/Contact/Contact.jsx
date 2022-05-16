import PropTypes from 'prop-types';
import { Wrapper, Icon, Number, Button } from './Contact.styled';
import { FaUser } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';

export const Contact = ({ name, nubmber, onDeleteContact }) => {
  return (
    <>
      <Wrapper>
        <Icon>
          <FaUser />
        </Icon>
        <p>{name}</p>
      </Wrapper>
      <Wrapper>
        <Number>{nubmber}</Number>
        <Button type="button" onClick={onDeleteContact}>
          <TiDelete size="50px" />
        </Button>
      </Wrapper>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  nubmber: PropTypes.string,
};
