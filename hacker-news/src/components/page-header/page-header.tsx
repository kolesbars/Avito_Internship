import { Container, Icon } from 'semantic-ui-react';

function PageHeader() {
  return (
    <Container
      as="h1"
      textContent="center"
      color="black"
      inverted
      floated="left"
    >
      <Icon name="hacker news square" color="orange"></Icon>
      Hacker news
    </Container>
  );
}

export default PageHeader;
