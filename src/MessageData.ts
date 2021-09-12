export default interface MessgageData {
  read(language: string): Promise<string>
}