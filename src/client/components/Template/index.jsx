import React from 'react';
import { node } from 'prop-types';
import { TemplateWrapper } from './atom';

export default function Template({ children }) {
  return (
    <TemplateWrapper>
      {children}
    </TemplateWrapper>
  );
}

Template.propTypes = {
  children: node.isRequired,
};
