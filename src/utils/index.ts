// Utils
export function capsFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function debounce(limit, callback) {
  let timeoutId
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(callback, limit, args)
  }
}

export function percentage(x, y) {
  return 100 / (y / x)
}

// Constants
export const APP_NAME = "Cloud City"

export const VIDEOS = [
  "https://player.vimeo.com/video/676724837?h=06c9ea4559&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  "https://player.vimeo.com/video/675587695?h=9273bda325&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  "https://player.vimeo.com/video/675587174?h=918d5a1313&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  "https://player.vimeo.com/video/675587396?h=7f162c73aa&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  "https://player.vimeo.com/video/675587549?h=61506a8fb6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  "https://player.vimeo.com/video/675587695?h=9273bda325&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
]

export const KEYS = [
  {
    id: 1,
    name: "Key 1",
    image:
      "https://imagedelivery.net/MNQzO2u-Hvj0wZ9WwT5rHQ/34510aa7-9738-4cf5-8155-42daaaa1ba00/public",
  },
  {
    id: 2,
    name: "Key 1",
    image:
      "https://imagedelivery.net/MNQzO2u-Hvj0wZ9WwT5rHQ/34510aa7-9738-4cf5-8155-42daaaa1ba00/public",
  },
  {
    id: 3,
    name: "Key 1",
    image:
      "https://imagedelivery.net/MNQzO2u-Hvj0wZ9WwT5rHQ/34510aa7-9738-4cf5-8155-42daaaa1ba00/public",
  },
  {
    id: 4,
    name: "Key 1",
    image:
      "https://imagedelivery.net/MNQzO2u-Hvj0wZ9WwT5rHQ/34510aa7-9738-4cf5-8155-42daaaa1ba00/public",
  },
  {
    id: 5,
    name: "Key 1",
    image:
      "https://imagedelivery.net/MNQzO2u-Hvj0wZ9WwT5rHQ/34510aa7-9738-4cf5-8155-42daaaa1ba00/public",
  },
  {
    id: 6,
    name: "Key 1",
    image:
      "https://imagedelivery.net/MNQzO2u-Hvj0wZ9WwT5rHQ/34510aa7-9738-4cf5-8155-42daaaa1ba00/public",
  },
  {
    id: 7,
    name: "Key 1",
    image:
      "https://imagedelivery.net/MNQzO2u-Hvj0wZ9WwT5rHQ/34510aa7-9738-4cf5-8155-42daaaa1ba00/public",
  },
  {
    id: 8,
    name: "Key 1",
    image:
      "https://imagedelivery.net/MNQzO2u-Hvj0wZ9WwT5rHQ/34510aa7-9738-4cf5-8155-42daaaa1ba00/public",
  },
  {
    id: 9,
    name: "Key 1",
    image:
      "https://imagedelivery.net/MNQzO2u-Hvj0wZ9WwT5rHQ/34510aa7-9738-4cf5-8155-42daaaa1ba00/public",
  },
  {
    id: 10,
    name: "Key 1",
    image:
      "https://imagedelivery.net/MNQzO2u-Hvj0wZ9WwT5rHQ/34510aa7-9738-4cf5-8155-42daaaa1ba00/public",
  },
  {
    id: 11,
    name: "Key 1",
    image:
      "https://imagedelivery.net/MNQzO2u-Hvj0wZ9WwT5rHQ/34510aa7-9738-4cf5-8155-42daaaa1ba00/public",
  },
  {
    id: 12,
    name: "Key 1",
    image:
      "https://imagedelivery.net/MNQzO2u-Hvj0wZ9WwT5rHQ/34510aa7-9738-4cf5-8155-42daaaa1ba00/public",
  },
]
