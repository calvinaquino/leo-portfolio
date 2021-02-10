import { useState } from "react";
import { Button, Card, Input } from "semantic-ui-react";

type SubmitViewProps = {
  onSubmit: (title: string, content: string) => void;
};

export const SubmitView: React.FC<SubmitViewProps> = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Card>
      <Card.Content>
        <Input
          placeholder={"Título"}
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <Input
          placeholder={"Conteúdo"}
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <Button onClick={() => props.onSubmit(title, content)}>Submit</Button>
      </Card.Content>
    </Card>
  );
};
