declare module "petname" {
  class PetName {
    generate(words: number, separator?: string): string;
    adverb(): string;
    adjective(): string;
    name(): string;
  }
  
  export = PetName;
}

