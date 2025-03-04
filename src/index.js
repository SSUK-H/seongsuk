import figlet from "figlet";

// 텍스트 배너
console.log(
  figlet.textSync("SEONGSUK", {
    font: "Dancing Font", // Ghost , Standard , Graffiti , Dancing Font , Slant , Pagga
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  }),
);
