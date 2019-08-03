import React from "react";
import { Editor } from "@tinymce/tinymce-react";

export default class HTMLEditor extends React.Component {
  render() {
    return (
      <Editor
        apiKey='6oilfk927zaexmxx8vvo2zyy8el2i9oya4xjmclvvit7hb6x'
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          plugins: "link image code",
          toolbar:
            "undo redo | bold italic | alignleft aligncenter alignright | code"
        }}
        onChange={this.handleEditorChange}
      />
    );
  }
}
