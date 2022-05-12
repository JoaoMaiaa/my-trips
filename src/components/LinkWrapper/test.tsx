import LinkWrapper from '.'
import { render, screen } from '@testing-library/react'

describe('<LinkWrapper />', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="/my-link">Anything</LinkWrapper>)

    // const children = screen.getByText(/anything/i)
    const children = screen.getByRole('link', {
      name: /anything/i
    })

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/my-link')
    screen.logTestingPlaygroundURL()
    // expect(
    //   screen.getByRole('link', {
    //     name: /anything/i
    //   })
    // ).toBeInTheDocument()
  })
})
