import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import { store } from "../stores/store";
import Products from "./Products";

describe("Products Component", () => {
  test("Add to Cart Button is defined", async () => {
    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );

    // eslint-disable-next-line testing-library/await-async-query
    const buttonAdd = screen.findByTestId("addByQuant");
    expect(buttonAdd).toBeDefined();
  });

  /*test('renders products if request succeeds', async() => {
      
       window.fetch=jest.fn();
       window.fetch.mockResolvedValueOnce({
          json:async()=> [{title:'product' ,img:'p1' , decription:'products' ,price:'200' ,count:'2' ,rate:'4.5'}]
       })
        render(<Provider store={store}><Products/></Provider>)

        const productItems = await screen.findAllByRole('generic');
        expect(productItems).not.toHaveLength(0);
        
   
      
     })*/
});
