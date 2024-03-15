import { Injectable } from '@nestjs/common';
import { Lexer, createToken, tokenMatcher } from 'chevrotain';
@Injectable()
export class ParserService {
  async createToken(params) {
    const Identifier = createToken({
      name: 'Identifier',
      pattern: /[a-zA-Z]+(\.[a-zA-Z]+)?/,
    });

    const ArithmeticOperator = createToken({
      name: 'ArithmeticOperator',
      pattern: Lexer.NA,
    });

    const ValidUpto = createToken({
      name: 'ValidUpto',
      pattern: /validupto/i,
    });
    const NOW = createToken({
      name: 'NOW',
      pattern: /now/i,
    });

    const WHERE = createToken({
      name: 'WHERE',
      pattern: /where/i,
    });

    const FROM = createToken({
      name: 'FROM',
      pattern: /from/i,
    });

    const COUNT = createToken({
      name: 'COUNT',
      pattern: /count/i
    });

    const Aggregate = createToken({
      name: 'Aggregate',
      pattern: /aggregate/i
    });

    const LParen = createToken({
      name: 'LParen',
      pattern: /\(/,
    });

    const RParen = createToken({
      name: 'RParen',
      pattern: /\)/,
    });

    const AlllogicalOperator = createToken({
      name: 'Allogicalop',
      pattern: Lexer.NA,
    });

    const Logicalop = createToken({
      name: 'Logicalop',
      pattern: /\|\||&&|\^|==|!=|<=|>=|<|>/,
      categories: AlllogicalOperator,
    });

    const AND = createToken({
      name: 'AND',
      pattern: /and/i,
      categories: AlllogicalOperator,
    });

    const OR = createToken({
      name: 'OR',
      pattern: /or/i,
      categories: AlllogicalOperator,
    });

    const WhiteSpace = createToken({
      name: 'WhiteSpace',
      pattern: /\s+/,
      group: Lexer.SKIPPED,
    });

    const allTokens = [
      WhiteSpace,
      FROM,
      ValidUpto,
      NOW,
      WHERE,
      Aggregate,
      COUNT,
      Identifier,
      LParen,
      RParen,
      Logicalop,
      AlllogicalOperator,
    ];

    const lexer = new Lexer(allTokens);
    const lexerResult = lexer.tokenize(params);
    if (lexerResult.errors.length > 0) {
      return { error: lexerResult.errors[0].message, tokens: null };
    }
    return { error: null, tokens: lexerResult.tokens };
  }


async ParsingToken(params){

    
}





  async transformer(params) {
    let Tokens =  await this.createToken(params['formula'])
    if(Tokens.error.length){
        return Tokens.error
    }
    let ParsingToken = await this.ParsingToken(params['tokens'])

   
  }





}
