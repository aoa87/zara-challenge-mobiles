import { fireEvent, render, screen } from "@testing-library/react";

import { mobilesMock } from "@/modules/mobiles/infrastructure/__mocks__/mobiles-fixtures";
import MobileDetail from "./mobile-detail";
import CartProvider from "@/shared/cart-provider";

jest.mock("./mobile-specs", () => jest.fn(() => <div>Mocked MobileSpecs</div>));

describe("MobileDetail", () => {
  test("should render mobile details with default values", () => {
    const mobile = mobilesMock[0];

    render(
      <CartProvider>
        <MobileDetail mobile={mobile} />
      </CartProvider>,
    );

    expect(screen.getByText(mobile.name)).toBeInTheDocument();
    expect(screen.getByText(mobile.basePrice)).toBeInTheDocument();
  });

  test("should render mobile price of selected storage", () => {
    const mobile = mobilesMock[0];

    render(
      <CartProvider>
        <MobileDetail mobile={mobile} />
      </CartProvider>,
    );

    expect(screen.getByText(mobile.name)).toBeInTheDocument();
    expect(screen.getByText(mobile.basePrice)).toBeInTheDocument();

    fireEvent.click(screen.getByText(mobile.storageOptions[1].capacity));

    expect(screen.getByText(mobile.storageOptions[1].price)).toBeInTheDocument();
  });
});
