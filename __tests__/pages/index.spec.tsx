import { render } from '@testing-library/react';
import StyledApp from 'components/pages/StyledApp';
import Index from 'pages/index';

test('renders main element', () => {
  const { getByRole } = render(
    <StyledApp>
      <Index />
    </StyledApp>
  );

  expect(getByRole('main')).toBeInTheDocument();
});
