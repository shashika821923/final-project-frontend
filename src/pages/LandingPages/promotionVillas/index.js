import { Button } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import { Fragment, useEffect, useRef, useState } from "react";
import { emailPromotions } from "../SignIn/services";
import MKInput from "components/MKInput";

export default function CreatePromotionEmail() {
  const editorRef = useRef(null);
  const [subject, setSubject] = useState("");

  const sentToAllUsers = () => {
    if (editorRef.current) {
      emailPromotions.sendPromoEmails({
        content: editorRef.current.getContent(),
        subject,
      });
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
      <div style={{margin: '5px'}}>
        <MKInput
          type="text"
          label="Subject"
          fullWidth
          name="email"
          value={subject}
          style={{ backgroundColor: 'white' }}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div style={{margin: '5px'}}>
        <Editor
          apiKey="rzffzcrlwkj5modgbf99uq55qh1rxka5h4ac18wcqkgmqxzf"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </div>
      <div style={{margin: '5px'}}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => sentToAllUsers()}
          style={{color: 'white'}}
        >
          Send to all users
        </Button>
      </div>
    </>
  );
}
