import { render, screen } from "@testing-library/react";

import MobileSpecs from "./mobile-specs";
import { mobilesMock } from "@/modules/mobiles/infrastructure/__mocks__/mobiles-fixtures";

describe("MobileSpecs", () => {
  it("should render mobile specs", () => {
    const mobile = mobilesMock[0];

    render(<MobileSpecs mobile={mobile} />);

    expect(screen.getByText(mobile.brand)).toBeInTheDocument();
    expect(screen.getByText(mobile.name)).toBeInTheDocument();
    expect(screen.getByText(mobile.description)).toBeInTheDocument();
    expect(screen.getByText(mobile.specs.screen)).toBeInTheDocument();
    expect(screen.getByText(mobile.specs.resolution)).toBeInTheDocument();
    expect(screen.getByText(mobile.specs.processor)).toBeInTheDocument();
    expect(screen.getByText(mobile.specs.mainCamera)).toBeInTheDocument();
    expect(screen.getByText(mobile.specs.selfieCamera)).toBeInTheDocument();
    expect(screen.getByText(mobile.specs.battery)).toBeInTheDocument();
    expect(screen.getByText(mobile.specs.os)).toBeInTheDocument();
    expect(screen.getByText(mobile.specs.screenRefreshRate)).toBeInTheDocument();
  });
});
