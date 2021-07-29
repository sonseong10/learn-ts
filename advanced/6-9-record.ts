type Pet = {
  name: string
}

type PetKind = "Dog" | "Cat" | "Bird" | "Pig"

const nav: Record<PetKind, Pet> = {
  Dog: { name: "foo" },
  Cat: { name: "boo" },
  Bird: { name: "too" },
  Pig: { name: "soo" },
}
