import { Injectable } from '@nestjs/common';
import { Lexer } from 'chevrotain';
import { lexer } from './lexer';
import { GrammerInstance as Parser } from './parsing_grammer';

@Injectable()
export class FormulaBuilderService {
  transformer(params) {
    console.log(params);
    let Tokens = this.TokenizeInput(params['formula']);
    if (Tokens.error) {
      return Tokens.error;
    }
    let Parsing = this.ParsingTokens(Tokens.tokens);
    return Parsing
  }

  TokenizeInput(params) {
    let lexerResult = lexer.tokenize(params);
    if (lexerResult.errors.length > 0) {
      return { error: lexerResult.errors[0].message, tokens: null };
    }
    return { error: null, tokens: lexerResult.tokens };
  }

  ParsingTokens(tokens) {
    Parser.input = tokens;
    let Cstformat = Parser.expression();
    Parser.WhereOporId = false
   if(Parser['_errors'].length > 0){
    return Parser['_errors'][0]['message']
   }
    return Cstformat;
  }
}
