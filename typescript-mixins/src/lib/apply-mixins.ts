function applyMixins(derivedConstructor: any, constructors: Array<any>): void {

  constructors.forEach(construct => {
    Object.getOwnPropertyNames(construct.prototype).forEach(elem => {
      const description = Object.getOwnPropertyDescriptor(construct.prototype, elem) || Object.create(null)

      Object.defineProperty(derivedConstructor.prototype, elem, description)
    });
  });
}

export default applyMixins