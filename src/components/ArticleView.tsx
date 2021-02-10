import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: inline;
`;

type ArticleViewProps = {
  title: string;
  content: string;
  onDelete: () => void;
};

export const ArticleView: React.FC<ArticleViewProps> = (props) => {
  return (
    <Container>
      <p>{props.title}</p>
      <p>{props.content}</p>
      <button onClick={() => props.onDelete()}>
        <p>Delete</p>
      </button>
    </Container>
  );
};
