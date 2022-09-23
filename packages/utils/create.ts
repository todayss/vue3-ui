
const createBem = (namespace:string,blockName:string, elementName:string, modifierName:string) => {
  let cls  = namespace;
  if(blockName) {
    cls += `-${blockName}`
  }
  if(elementName) {
    cls += `__${elementName}`
  }
  if(modifierName) {
    cls += `--${modifierName}`
  }
  return cls;
}

export function createNamespace(namespace:string) {
  const prefix = `wx-${namespace}`

  const b = (blockName='') => createBem(prefix, blockName, '', '')

  const e = (elementName= '') =>elementName? createBem(prefix, '', elementName, ''):''

  const m = (modifierName = '') => modifierName? createBem(prefix, '', '', modifierName):''

  const be = (blockName='', elementName='') => blockName && elementName ? createBem(prefix, blockName, elementName, '') : ''

  const bm = (blockName='', modifierName='') => blockName && modifierName ? createBem(prefix, blockName, '', modifierName) : ''

  const em = (elementName='', modifierName='') =>elementName && modifierName ? createBem(prefix, '', elementName, modifierName) : ''

  const bem = (blockName='', elementName='', modifierName='') => blockName && elementName && modifierName ? createBem(prefix, blockName, elementName, modifierName) : ''

  return {
    b,
    e,
    m,
    be,
    bm,
    em,
    bem
  }
}