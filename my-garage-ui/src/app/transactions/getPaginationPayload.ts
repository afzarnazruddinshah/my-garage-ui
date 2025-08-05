interface ICursor {
  first?: any;
  last?: any;
}
export const getPaginationPayload = (
  direction: string = "forward",
  currentPage: number = 1,
  cursorObj: ICursor | any = {}
) => {
  let index = direction === "forward" ? currentPage - 1 : currentPage;
  let payload = {
    direction,
    first: cursorObj[index]?.first || "",
    last: cursorObj[index]?.last || "",
    pageNum: 0,
  };
  console.log("payload", payload);

  //if returning to page1 from page2
  if (direction === "backward" && currentPage === 1) {
    payload.direction = "forward";
    payload.first = "";
    payload.last = "";
  }

  if (currentPage !== 1 && !cursorObj[index]) {
    payload.direction = "jump";
    payload.pageNum = currentPage;
  }
   console.log("payload", payload);
  return payload;
};
