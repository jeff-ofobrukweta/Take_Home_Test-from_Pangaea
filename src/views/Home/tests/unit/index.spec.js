import { mount } from "@vue/test-utils";
import HomePage from "../../index";
import SidebarProduct from "../../../../components/sidebarCart/index";

let wrapper = "";

beforeEach(() => {
  wrapper = mount(HomePage, {
    propData: {}
  });
});

describe("Test HomePage Page", () => {
  test("check the HomePage for sidebar component when its toogle", () => {
    const homePageView = wrapper.findComponent(SidebarProduct);
    expect(homePageView).toBeDefined();
    //  finish the test later...
  });
});
