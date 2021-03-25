import { mount } from "@vue/test-utils";
import ProductCardComponent from "../../index";

let wrapper = "";

beforeEach(() => {
  wrapper = mount(ProductCardComponent, {
    propData: {}
  });
});

describe("Test SidebarProduct Component", () => {
  test("check the sidebar-product-card component for button", () => {
     const productCard = wrapper.find('button');
    //  finish the test later
  });
});
