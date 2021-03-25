import { mount } from "@vue/test-utils";
import HeaderComponent from "../../index";

let wrapper = "";

beforeEach(() => {
  wrapper = mount(HeaderComponent, {
    propData: {}
  });
});

describe("Test HomePage Page", () => {
  test("check the HeaderComponent for logo lumin", () => {
    const headerComponent = wrapper.find("img");
    //  finish the test later
  });
});
