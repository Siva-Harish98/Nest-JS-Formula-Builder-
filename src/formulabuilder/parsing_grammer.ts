import { CstParser, CstNode } from 'chevrotain';
import {
  AlllogicalOperator,
  FROM,
  NOW,
  HAPPENDIN,
  ValidUpto,
  WHERE,
  LParen,
  NumberLiteral,
  RParen,
  Identifier,
  allTokens,
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
      T.CONSUME(HAPPENDIN);
    });

    T.RULE('chkWherecond', () => {
      T.CONSUME(WHERE);
      T.CONSUME(LParen);
      T.AT_LEAST_ONE(() => {
        T.OR([
          {
            ALT: () => {
              T.CONSUME(Identifier);
              this.WhereOporId = true;
            },
          },
          {
            ALT: () => {
              T.CONSUME(AlllogicalOperator);
            },
          },
        ]);

        T.SUBRULE(T.wherecndRule);
      });
      T.CONSUME(RParen);
    });

    T.RULE('wherecndRule', () => {
      T.OPTION(()=>{
        T.OR([
          {GATE:()=> this.WhereOporId,
            ALT:()=>{
            T.CONSUME(AlllogicalOperator)
            T.SUBRULE(T.checkNumcondtion)
          }},
          {ALT:()=>{
            T.CONSUME(Identifier)
            T.OPTION2(()=>{
              T.CONSUME2(AlllogicalOperator)
              T.OPTION3(()=>{
                
              })
              T.SUBRULE2(T.checkNumcondtion)
            })
           
          }}
        ])
       
       
      })
     
    });

T.RULE('checkNumcondtion',()=>{
  T.OR([
    {ALT:()=> {T.CONSUME(NumberLiteral)}},
    {ALT:()=> {T.CONSUME(Identifier)}}
  ])
})



    T.performSelfAnalysis();
    this.WhereOporId = false;
  }
}

export const GrammerInstance = new GrammerExpression();
