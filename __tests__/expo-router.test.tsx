import * as React from "react";
import { renderRouter, screen } from "expo-router/testing-library";
import { View } from "react-native";

it("my-test", async () => {
  const MockComponent = jest.fn(() => <View />);

  renderRouter(
    {
      index: MockComponent,
      "folder/a": MockComponent,
      "(group)/b": MockComponent,
    },
    {
      initialUrl: "/folder/a",
    }
  );

  expect(screen).toHavePathname("/folder/a");
});
