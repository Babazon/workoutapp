import { getWeek } from "../src/util/getWeekIndex";

describe('Get Week index', () => {


  it('finds the week index for a given date between 1 and 52', () => {
    const myBirthday = new Date("1981-02-01");
    expect(getWeek(myBirthday)).toBe(5);
  })

})