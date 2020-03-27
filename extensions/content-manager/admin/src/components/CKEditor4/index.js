import React from 'react';
import PropTypes from 'prop-types';
import CKEditor from 'ckeditor4-react';
import styled from 'styled-components';

CKEditor.editorUrl = 'https://cdn.ckeditor.com/4.14.0/full/ckeditor.js';

const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 200px;
    > div {
      min-height: 200px;
    }
  }
`;

const Editor = ({ onChange, name, value }) => {
  return (
    <Wrapper>
      <CKEditor
        data={value}
        onChange={evt => { 
            const data = evt.editor.getData();
            onChange({ target: { name, value: data } });
        }}
      />
    </Wrapper>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Editor;
