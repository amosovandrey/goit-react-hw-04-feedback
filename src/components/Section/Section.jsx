import React from 'react';
import { SectionEl, Title } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <SectionEl>
      <Title>{title}</Title>
      {children}
    </SectionEl>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
