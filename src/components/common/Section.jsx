import React from 'react';
import './Section.css';

const Section = ({
  children,
  background = 'white',
  spacing = 'normal',
  container = true,
  className = '',
  id,
  ...props
}) => {
  const sectionClasses = [
    'section',
    `section--${background}`,
    `section--spacing-${spacing}`,
    className
  ].filter(Boolean).join(' ');

  const content = container ? (
    <div className="container">{children}</div>
  ) : (
    children
  );

  return (
    <section id={id} className={sectionClasses} {...props}>
      {content}
    </section>
  );
};

export default Section;
