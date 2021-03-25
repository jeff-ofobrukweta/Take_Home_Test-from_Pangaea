import { mount } from "@vue/test-utils";
import ProductCardComponent from "../../index";

let wrapper = "";

beforeEach(() => {
  wrapper = mount(ProductCardComponent, {
    propData: {},
    listeners:{

    }
  });
});

describe("Test Card Component", () => {
  test("check the card-product component for button", () => {
     const productCard = wrapper.find('button');
    //  finish the test later
  });
});
