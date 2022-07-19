export default class Score {
  constructor({name, score}) {
    this.name = name;
    this.score = score;
  }

  getName() {
    return this.name;
  }

  getScore() {
    return this.score;
  }


}