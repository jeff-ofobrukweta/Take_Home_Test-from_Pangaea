import { mount } from "@vue/test-utils";
import NotFound from "../../index";

let wrapper = "";

beforeEach(() => {
  wrapper = mount(NotFound, {
    propData: {}
  });
});

describe("Test NotFound Page", () => {
  test("check the NotFound for 404 image", () => {
    const NotFoundPage = wrapper.find('img');
    //  finish the test later
  });
});
