import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should the render heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the font correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ color: '#fff' })
  })
})
