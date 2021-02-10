import { Button, Card, Container, Label } from "semantic-ui-react";

type ArticleViewProps = {
  title: string;
  content: string;
  onDelete: () => void;
};

export const ArticleView: React.FC<ArticleViewProps> = (props) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Description>{props.content}</Card.Description>
      </Card.Content>
      <Card.Content>
        <Button basic onClick={() => props.onDelete()}>
          {"Delete"}
        </Button>
      </Card.Content>
    </Card>
  );
};
