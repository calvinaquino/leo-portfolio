import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
`;

type SubmitViewProps = {
  onSubmit: (title: string, content: string) => void;
};

export const SubmitView: React.FC<SubmitViewProps> = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Container>
      <input
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <input
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <button onClick={() => props.onSubmit(title, content)}>
        <p>Submit</p>
      </button>
    </Container>
  );
};
