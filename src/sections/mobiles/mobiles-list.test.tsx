import { render, screen } from "@testing-library/react";

import MobilesList from "./mobiles-list";
import { mobileListItemMock } from "@/modules/mobiles/infrastructure/__mocks__/mobiles-fixtures";

describe("MobileList", () => {
  it("should render a list of mobiles", () => {
    render(<MobilesList mobiles={mobileListItemMock} />);

    mobileListItemMock.forEach((mobile) => {
      expect(screen.getByText(mobile.name)).toBeInTheDocument();
    });
  });

  it("should render a message when there are no mobiles", () => {
    render(<MobilesList mobiles={[]} />);

    expect(screen.getByText("No mobiles to show")).toBeInTheDocument();
  });
});
