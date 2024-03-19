import { CstParser, CstNode } from 'chevrotain';
import {
  AlllogicalOperator,
  FROM,
  NOW,
  HAPPENDEDIN,
  ValidUpto,
  WHERE,
  LParen,
  NumberLiteral,
  RParen,
  Identifier,
  allTokens,
  NotOperator,
  Aggregate,
  COUNT,
  MAX
} from './lexer';

export class GrammerExpression extends CstParser {
  WhereOporId: boolean = false;
  constructor() {
    super(allTokens);
    this.createRules();
  }
  declare expression: () => CstNode;
  createRules() {
    const T: any = this;

    T.RULE('expression', () => {
      T.SUBRULE(T.FromKey);
    });

    T.RULE('FromKey', () => {
      T.CONSUME(FROM);
      T.CONSUME(Identifier);
      T.SUBRULE(T.optionfun);
      T.SUBRULE2(T.LeastExpression)
    });

    T.RULE('optionfun', () => {
      T.OPTION(() => {
        T.SUBRULE(T.Timefunc);
      });
      T.OPTION2(() => {
        T.SUBRULE2(T.chkWherecond);
      });
    });

    T.RULE('Timefunc', () => {
      T.OPTION(() => {
        T.OR([
          {
            ALT: () => {
              T.SUBRULE(T.chkValidupto);
            },
          },
          {
            ALT: () => {
              T.SUBRULE2(T.otherFunc);
            },
          },
        ]);
      });
    });

    T.RULE('chkValidupto', () => {
      T.CONSUME(ValidUpto);
      T.SUBRULE(T.ValidUptofunct);
    });

    T.RULE('ValidUptofunct', () => {
      T.CONSUME(NOW);
    });

    T.RULE('otherFunc', () => {
      T.CONSUME(HAPPENDEDIN);
      T.CONSUME(LParen)
      T.CONSUME(Identifier)
      T.CONSUME(RParen)
    });

    T.RULE('chkWherecond', () => {
      T.CONSUME(WHERE);
      T.CONSUME(LParen);
      T.OPTION(()=>{
        T.CONSUME(NotOperator)
      })
      T.CONSUME(Identifier)
      T.SUBRULE2(T.wherecndRule);    
      T.CONSUME(RParen);
    });

   

    T.RULE('wherecndRule', () => {
      T.AT_LEAST_ONE(()=>{
      T.OPTION(()=>{
        T.CONSUME(AlllogicalOperator)
        T.OPTION2(()=>{
          T.CONSUME(NotOperator)
        })
        T.OR([
          {
            ALT: () => {
              T.CONSUME(NumberLiteral);
            },
          },
          {
            ALT: () => {
              T.CONSUME(Identifier);
            },
          },
        ]);
       
      })
      
    })
      
      
    });

    T.RULE('LeastExpression',()=>{
      T.SUBRULE(T.AggregateKey)
    })

    T.RULE('AggregateKey',()=>{
      T.CONSUME(Aggregate)
      T.SUBRULE(T.AggregateFunc)
      T.CONSUME(LParen)
      T.CONSUME(Identifier)
      T.CONSUME(RParen)    
    })

     T.RULE('AggregateFunc',()=>{
      T.OR([
        {ALT:()=>{T.CONSUME(COUNT)}},
        {ALT:()=>{T.CONSUME(MAX)}}
      ])
     })



    T.performSelfAnalysis();
    this.WhereOporId = false;
  }
}

export const GrammerInstance = new GrammerExpression();
