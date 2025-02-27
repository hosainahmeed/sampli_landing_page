import React from 'react';

function PageHeader({ title, updateDate }) {
  return (
    <div>
      <h1>{title}</h1>
      <h1>Last updated:{updateDate}</h1>
    </div>
  );
}

export default PageHeader;
