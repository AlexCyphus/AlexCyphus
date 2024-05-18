"use client";

import { HStack } from "@chakra-ui/react";
import { useModals } from "../../_providers/ModalContext";
import { useSystemContext } from "../../_providers/SystemContext";
import useWobblies from "../Wobblies/utils/useWobblies";
import { generateRandomWobblie } from "../Wobblies/utils/wobblieUtils";
import Time from "./Time";
import TopBarDropdown, { TopBarDropdownProps } from "./TopBarDropdown";

const TopBar = () => {
  const { setState } = useSystemContext();
  const { closeAllModals } = useModals();
  const { addWobblie, removeAllWobblies } = useWobblies();

  const topBarData: TopBarDropdownProps[] = [
    {
      title: "🥭",
      options: [
        {
          title: " 🥭 Built by Alex",
          action: () => {
            window.open("https://github.com/AlexCyphus/alexcyphus");
          },
        },
        {
          title: "🔌 Power off",
          action: () => {
            setState({
              isOn: false,
              highestZIndex: 0,
            });
          },
        },
      ],
    },
    {
      title: "Contact",
      options: [
        {
          title: "✉️ Send me an email",
          action: () => {
            window.open("mailto:alexjcyphus@gmail.com");
          },
        },
        {
          title: "👨‍💼 LinkedIn",
          action: () => {
            window.open("https://www.linkedin.com/in/alexcyphus/");
          },
        },
        {
          title: "🧑‍💻 GitHub",
          action: () => {
            window.open("https://github.com/alexcyphus");
          },
        },
        {
          title: "🏃‍♂️ Strava",
          action: () => {
            window.open("https://www.strava.com/athletes/77231772");
          },
        },
      ],
    },
    {
      title: "View",
      options: [
        {
          title: "❌ Close all windows",
          action: closeAllModals,
        },
      ],
    },
    {
      title: "Wobblies",
      options: [
        {
          title: "➕ Add a wobblie",
          action: () => {
            addWobblie(generateRandomWobblie());
          },
        },
        {
          title: "❌ Remove all wobblies",
          action: removeAllWobblies,
        },
      ],
    },
  ];

  return (
    <HStack
      justifyContent={"space-between"}
      px={4}
      align={"center"}
      borderBottom={"1px"}
      borderColor={"black"}
    >
      <HStack gap={2}>
        {topBarData.map((item) => {
          return <TopBarDropdown key={item.title} {...item} />;
        })}
      </HStack>
      {/* <Time /> */}
    </HStack>
  );
};

export default TopBar;
