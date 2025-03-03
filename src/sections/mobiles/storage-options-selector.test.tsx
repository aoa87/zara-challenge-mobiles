import { fireEvent, render, screen } from "@testing-library/react";

import StorageOptionsSelector from "./storage-options-selector";

describe("StorageOptionsSelector", () => {
  const storageOptions = [
    { capacity: "256 GB", price: 100 },
    { capacity: "512 GB", price: 200 },
  ];

  it("should render storage options", () => {
    const onSelect = jest.fn();
    render(<StorageOptionsSelector storageOptions={storageOptions} onSelect={onSelect} />);

    storageOptions.forEach((storageOption) => {
      expect(screen.getByText(storageOption.capacity)).toBeInTheDocument();
    });
  });

  it("should call onSelect when a storage option is clicked", () => {
    const onSelect = jest.fn();
    render(<StorageOptionsSelector storageOptions={storageOptions} onSelect={onSelect} />);

    fireEvent.click(screen.getByText("256 GB"));

    expect(onSelect).toHaveBeenCalledWith(storageOptions[0]);
  });

  it("should not call onSelect if a non-existing option is clicked", () => {
    const onSelect = jest.fn();
    render(<StorageOptionsSelector storageOptions={storageOptions} onSelect={onSelect} />);

    const nonExistingOption = screen.queryByText("128 GB");
    if (nonExistingOption) {
      fireEvent.click(nonExistingOption);
    }

    expect(onSelect).not.toHaveBeenCalled();
  });
});
