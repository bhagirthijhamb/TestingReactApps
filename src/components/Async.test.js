import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });

    render(<Async />);

    // const listItemElements = screen.getAllByRole("listitem"); // fails we fetching posts takes some time
    const listItemElements = await screen.findAllByRole("listitem"); // findAllByRole will wait for the data to arrive
    expect(listItemElements).not.toHaveLength(0);
  });
});
