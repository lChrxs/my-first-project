export interface CharacterHp {
  name:         string,
  healthPoints: number,
  live:         boolean,
  skills:       string[],
  color?:       string,
  showHp(): void
}