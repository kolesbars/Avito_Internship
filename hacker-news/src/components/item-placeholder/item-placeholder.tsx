import { Placeholder } from 'semantic-ui-react';

function ItemPlaceholder() {
  return (
    <Placeholder data-testid="placeholder">
      <Placeholder.Header />
      <Placeholder.Line />
    </Placeholder>
  );
}

export default ItemPlaceholder;
