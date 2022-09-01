import React from 'react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../Components/App.jsx';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

jest.mock("axios");

const firstProduct = [
  {
    id: 37311,
    campus: "hr-rfe",
    name: "Camo Onesie",
    slogan: "Blend in to your crowd",
    description:
      "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    category: "Jackets",
    default_price: "140.00",
    created_at: "2021-08-13T14:37:33.145Z",
    updated_at: "2021-08-13T14:37:33.145Z",
  },
];
// setup(options?: Options): UserEvent

describe('Evaluate initial loading page ', () => {
  it('should render the initial page', () => {

    axios.mockResolvedValue({ data: firstProduct });
    render(<App />)

    return waitFor(() => expect(screen.queryByText("Nav Bar")).toBeInTheDocument());
  })

  // it('should click a button', () => {
  //   const user = userEvent.setup();
  //   return user.click(screen.getByTestId('reviewModal'))
  //     // .then(() => {
      //   expect(screen.getByTestId('modal').toHaveTextContent('Write Your Review'))
      // })

  // });
})