import { IPosts } from "./Interface";

export const MOCK_POLL:IPosts[] = [  {
    "created_at": new Date(),
    "title": "Hot Coffee Case",
    "url": "https://en.wikipedia.org/wiki/Liebeck_v._McDonald%27s_Restaurants",
    "author": "jameslk",
  },
  {
    "created_at": new Date(),
    "title": "Demo Testing Data 2",
    "url": "https://en.wikipedia.org/wiki/Liebeck_v._McDonald%27s_Restaurants",
    "author": "Sohen",
  }]

export const Mock_Data={
   hits:MOCK_POLL
}