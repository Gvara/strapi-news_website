import React from 'react';
import PropTypes from 'prop-types';
import { Editor as TinyMCE } from '@tinymce/tinymce-react';
import styled from 'styled-components';

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
      <TinyMCE
        initialValue={value}
        init={{
            height: 500,
            menubar: false,
            plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
            ],
            toolbar:
            'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help'
        }}
        onEditorChange={(content, editor) => {
            onChange({ target: { name, value: content } });
        }}
      />
    </Wrapper>
  );
};

// Editor.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   name: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
// };

export default Editor
