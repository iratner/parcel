import sinon from "sinon";
import { App } from "../src/containers";
import { mount } from "enzyme";

describe("Makes sure the application loads with Router and Redux", () => {
  let component;
  
  beforeEach(() => {
    component = mount(<App/>);  
  })
  
  it("Finds a Router", () => {
    const router = component.find("Router")
    expect(router).toExist();    
  });

  it("Finds a Redux Provider", () => {
    const provider = component.find("Provider")
    expect(provider).toExist();
  });
});