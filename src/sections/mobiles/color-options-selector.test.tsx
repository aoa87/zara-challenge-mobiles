import { fireEvent, render, screen } from "@testing-library/react";

import ColorOptionsSelector from "./color-options-selector";

describe("ColorOptionsSelector", () => {
  const colors = [
    {
      name: "Titanio Negro",
      hexCode: "#2C2C2C",
      imageUrl:
        "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-I15PM-titanio-negro.png",
    },
    {
      name: "Titanio Blanco",
      hexCode: "#F0F0F0",
      imageUrl:
        "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-I15PM-titanio-blanco.png",
    },
  ];

  it("should render a list of color options", () => {
    const onSelect = jest.fn();
    render(<ColorOptionsSelector colors={colors} onSelect={onSelect} />);

    colors.forEach((color) => {
      expect(screen.getByTestId(color.hexCode)).toBeInTheDocument();
    });
  });

  it("should call onSelect when a color option is clicked", () => {
    const onSelect = jest.fn();
    render(<ColorOptionsSelector colors={colors} onSelect={onSelect} />);

    fireEvent.click(screen.getByTestId(colors[0].hexCode));

    expect(onSelect).toHaveBeenCalledWith(colors[0]);
  });
});
