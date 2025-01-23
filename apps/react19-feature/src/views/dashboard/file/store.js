import { create } from "zustand";

export const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🫐", label: "Blueberries" },
  { icon: "🥂", label: "Champers?" }
];

const [tomato, lettuce, cheese, Carrot] = allIngredients;
const tabs = [tomato, lettuce, cheese, Carrot];

export const useStore = create(set => {
  return {
    tabs,
    selectedTab: tabs[0],
    setSelectedTab: item => set(() => ({ selectedTab: item }))
  };
});
