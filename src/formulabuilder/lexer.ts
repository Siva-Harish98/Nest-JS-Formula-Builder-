import {
    CstNode,
    CstParser,
    Lexer,
    createToken,
    tokenMatcher,
  } from 'chevrotain';
  
 export const Identifier = createToken({
    name: 'Identifier',
    pattern: /[a-zA-Z]+(\.[a-zA-Z]+)?/,
  });
  
  export const ArithmeticOperator = createToken({
    name: 'ArithmeticOperator',
    pattern: Lexer.NA,
  });
  
  export const ValidUpto = createToken({
    name: 'ValidUpto',
    pattern: /validupto/i,
  });
  export const NOW = createToken({
    name: 'NOW',
    pattern: /now/i,
  });
  
  export const WHERE = createToken({
    name: 'WHERE',
    pattern: /where/i,
  });
  
  export const FROM = createToken({
    name: 'FROM',
    pattern: /from/i,
  });
  
  export const COUNT = createToken({
    name: 'COUNT',
    pattern: /count/i,
  });
  export const MAX = createToken({
    name: 'MAX',
    pattern: /max/i,
  });
  export  const NumberLiteral = createToken({
    name: 'NumberLiteral',
    pattern: /[0-9]\d*/,
  });
  export  const Aggregate = createToken({
    name: 'Aggregate',
    pattern: /aggregate/i,
  });

  export  const HAPPENDEDIN = createToken({
    name: 'HAPPENDEDIN',
    pattern: /\bHappenedIn\b/i,
  });
  
  export  const LParen = createToken({
    name: 'LParen',
    pattern: /\(/,
  });
  
  export const RParen = createToken({
    name: 'RParen',
    pattern: /\)/,
  });

  export const NotOperator = createToken({
    name: 'NotOperator',
    pattern: /!/,
  });
  // export  const NOT = createToken({
  //   name: 'NOT',
  //   pattern: /not/i,
  //   categories: NotOperator,
  // });

  // export  const NotOp = createToken({
  //   name: 'NotOp',
  //   pattern: /!/,
  //   categories: NotOperator,
  // });

  export const AlllogicalOperator = createToken({
    name: 'Allogicalop',
    pattern: Lexer.NA,
  });
  
  export  const Logicalop = createToken({
    name: 'Logicalop',
    pattern: /\|\||&&|\^|==|!=|<=|>=|<|>/,
    categories: AlllogicalOperator,
  });
  
  export const AND = createToken({
    name: 'AND',
    pattern: /and/i,
    categories: AlllogicalOperator,
  });
  
  export  const OR = createToken({
    name: 'OR',
    pattern: /or/i,
    categories: AlllogicalOperator,
  });
  
  export const WhiteSpace = createToken({
    name: 'WhiteSpace',
    pattern: /\s+/,
    group: Lexer.SKIPPED,
  });
  
 export const allTokens = [
    WhiteSpace,
    FROM,
    HAPPENDEDIN,
    ValidUpto,
    NOW,
    WHERE,
    Aggregate,
    COUNT,
    MAX,
    NotOperator,
    Identifier,
    NumberLiteral,
    LParen,
    RParen,
    Logicalop,
    AlllogicalOperator,
  ];
  
  export  const lexer = new Lexer(allTokens);