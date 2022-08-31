import React from 'react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import { userEvent } from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../Components/App.jsx';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3000';

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

describe('Evaluate initial loading page ', () => {
  it('should open a modal when the "Add a Review" is clicked ', () => {
    // const user = userEvent.setup();

    axios.mockResolvedValue({data: firstProduct});

    render(<App />)
    return waitFor(() => expect(screen.queryByText("Nav Bar")).toBeInTheDocument());
  })
});
    // return waitFor(() => expect(screen.queryByText("Nav Bar")).toBeInTheDocument())
    //   .then(() => {
    //     expect(screen.getByTestId('reviewModal').toHaveTextContent('Add a Review'))
        // return user.click(screen.getByTestId('reviewModal'))
        // .then(()=> {
        //   expect(screen.getByTestId('modal').toHaveTextContent('Write Your Review'))
        // })

  //     })
  // })


// const server = setupServer(
//   rest.get('/products', (req, res, ctx) => {
//     return res(ctx.json(
//       {
//         id: 37311,
//         campus: "hr-rfe",
//         name: "Camo Onesie",
//         slogan: "Blend in to your crowd",
//         description:
//           "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
//         category: "Jackets",
//         default_price: "140.00",
//         created_at: "2021-08-13T14:37:33.145Z",
//         updated_at: "2021-08-13T14:37:33.145Z",
//       }))
//   }),
// )

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

// describe('Test the server', () => {
//   test('It should load initial product data', async () => {
//     render(<App />)

//     const response = await request(server).get("/products");
//     expect(response).toBe(stringify.json({
//       id: 37311,
//       campus: "hr-rfe",
//       name: "Camo Onesie",
//       slogan: "Blend in to your crowd",
//       description:
//         "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
//       category: "Jackets",
//       default_price: "140.00",
//       created_at: "2021-08-13T14:37:33.145Z",
//       updated_at: "2021-08-13T14:37:33.145Z",
//     }));
//   })
// });

