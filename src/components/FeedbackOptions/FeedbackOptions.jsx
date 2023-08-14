import React from 'react';
import { ButtonWrapper, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrapper>
      <Button onClick={() => onLeaveFeedback('good')}>Good</Button>
      <Button onClick={() => onLeaveFeedback('neutral')}>Neutral</Button>
      <Button onClick={() => onLeaveFeedback('bad')}>Bad</Button>
    </ButtonWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
