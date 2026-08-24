const works = [
  {
    id: 1,
    category: "Gallery",
    name: "Shot in Iceland",
    thumb: "/images/work/work1.jpg",
    images: ["/images/work/work1.jpg", "/images/work/work2.jpg", "/images/work/work3.jpg", "/images/work/work4.jpg"],
  },
  {
    id: 2,
    category: "Links",
    name: "Nike Red",
    thumb: "/images/work/work3.jpg",
    href: "https://google.com/",
  },
  {
    id: 3,
    category: "Video",
    name: "Fertility of Some Plants",
    thumb: "/images/work/work2.jpg",
    videoUrl: "https://www.youtube.com/embed/87Wb47fmNWA",
  },
  {
    id: 4,
    category: "Image",
    name: "Inspiration in Cap Haitian",
    thumb: "/images/work/work4.jpg",
    image: "/images/work/work4.jpg",
  },
  {
    id: 5,
    category: "Image",
    name: "Water and Shore",
    thumb: "/images/work/work7.jpg",
    image: "/images/work/work7.jpg",
  },
  {
    id: 6,
    category: "Music",
    name: "Dark Bike",
    thumb: "/images/work/work6.jpg",
    musicUrl:
      "https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&show_artwork=true",
  },
  {
    id: 7,
    category: "Gallery",
    name: "Undulating Space",
    thumb: "/images/work/work5.jpg",
    images: ["/images/work/work5.jpg", "/images/work/work1.jpg", "/images/work/work2.jpg", "/images/work/work3.jpg"],
  },
  {
    id: 8,
    category: "Content",
    name: "Curved Ceiling Ribs",
    thumb: "/images/work/work8.jpg",
    popupTitle: "Hand holding pyramid painting",
    description:
      "Saat ini sains bukan sekadar hafalan rumus. Tidak ada yang namanya sekadar tren angka. Jangan mengejar hasil akhir yang tidak esensial, bukan nilai mutlaknya, bukan bentuk grafiknya, juga bukan formalitasnya.",
    listItems: [
      "Saat ini sains bukan sekadar hafalan rumus. Tidak ada yang namanya sekadar tren angka.",
      "Jangan mengejar hasil akhir yang tidak esensial.",
      "Pikirkanlah pemahaman konsep mendalam yang ingin Anda tanamkan dalam sebuah fenomena fisika.",
      "Esensinya adalah logika berpikir Anda. Sebuah logika yang melampaui lembar teks kaku.",
    ],
    extraDescription:
      "Pikirkanlah pemahaman konsep mendalam yang ingin Anda tanamkan dalam sebuah fenomena fisika, karena dari situlah pemahaman sejati akan terbentuk. Esensinya adalah logika berpikir Anda. Sebuah logika yang melampaui lembar teks kaku.",
    link: "/works_single_1",
  },
];

export const filters = [
  { label: "All", value: ".box-item" },
  { label: "Video", value: ".f-video" },
  { label: "Music", value: ".f-music" },
  { label: "Links", value: ".f-links" },
  { label: "Image", value: ".f-image" },
  { label: "Gallery", value: ".f-gallery" },
  { label: "Content", value: ".f-content" },
];

export const categoryIcons = {
  Gallery: "fa-images",
  Links: "fa-link",
  Video: "fa-video",
  Image: "fa-image",
  Music: "fa-music",
  Content: "fa-plus",
};

export default works;