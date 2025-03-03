import { render, screen } from "@testing-library/react";
import MobileItem from "./mobile-item";
import { mobileListItemMock } from "@/modules/mobiles/infrastructure/__mocks__/mobiles-fixtures";

describe("MobileItem", () => {
  it("should render a mobile item", () => {
    const mobile = mobileListItemMock[0];

    render(<MobileItem mobile={mobile} />);

    expect(screen.getByText(mobile.name)).toBeInTheDocument();
    expect(screen.getByText(`${mobile.basePrice} EUR`)).toBeInTheDocument();
    expect(screen.getByText(mobile.brand)).toBeInTheDocument();
  });
});
