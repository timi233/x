import { render, waitFor } from '@testing-library/react';
import StyledApp from 'components/pages/StyledApp';
import Index from 'pages/index';

test('renders index page', async () => {
  const { getByText } = render(
    <StyledApp>
      <Index />
    </StyledApp>
  );

  await waitFor(() => expect(getByText('Hello, world!')).toBeInTheDocument());
});
