import ButtonComponent from "../../index";
import { shallowMount } from "@vue/test-utils";


let wrapper = "";

beforeEach(() => {
  wrapper = shallowMount(ButtonComponent, {
    propData: {},
    listeners:{

    }
  })
})

describe("Test button Component", () => {

  test("check onClick trigger event", () => {
     const button =  wrapper.find("button");
    //  finish the test later
  })
})