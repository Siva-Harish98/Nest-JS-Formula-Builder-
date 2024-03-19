import {FormulaBuilderService} from '../formulabuilderService'

let formulaBuilderService: FormulaBuilderService;

    beforeEach(() => {
        formulaBuilderService = new FormulaBuilderService(); // Instantiate the service
    });

    describe('Lexer test',()=>{
        it('should tokenize the input it start with From',()=>{
            const Input = 'FROM Employee ValidUpto NOW WHERE(isActiveEmployee && Employee.Age <= 30 && Employee.Age >= 25) Aggregate COUNT(Employee.EmployeeId)'
            const Tokens = formulaBuilderService.TokenizeInput(Input).tokens
           expect(Tokens).toMatchObject([
            {image:'FROM',startOffset:0,endOffset:3,tokenType:{name:'FROM'}},
            {image:'Employee',startOffset:5,endOffset:12,tokenType:{name:'Identifier'}},
            {image:'ValidUpto',startOffset:14,endOffset:22,tokenType:{name:'ValidUpto'}},
            {image:'NOW',startOffset:24,endOffset:26,tokenType:{name:'NOW'}},
            {image:'WHERE',startOffset:28,endOffset:32,tokenType:{name:'WHERE'}},
            {image:'(',startOffset:33,endOffset:33,tokenType:{name:'LParen'}},
            {image:'isActiveEmployee',startOffset:34,endOffset:49,tokenType:{name:'Identifier'}},
            {image:'&&',startOffset:51,endOffset:52,tokenType:{name:'Logicalop'}},
            {image:'Employee.Age',startOffset:54,endOffset:65,tokenType:{name:'Identifier'}},
            {image:'<=',startOffset:67,endOffset:68,tokenType:{name:'Logicalop'}},
            {image:'30',startOffset:70,endOffset:71,tokenType:{name:'NumberLiteral'}},
            {image:'&&',startOffset:73,endOffset:74,tokenType:{name:'Logicalop'}},
            {image:'Employee.Age',startOffset:76,endOffset:87,tokenType:{name:'Identifier'}},
            {image:'>=',startOffset:89,endOffset:90,tokenType:{name:'Logicalop'}},
            {image:'25',startOffset:92,endOffset:93,tokenType:{name:'NumberLiteral'}},
            {image:')',startOffset:94,endOffset:94,tokenType:{name:'RParen'}},
            {image:'Aggregate',startOffset:96,endOffset:104,tokenType:{name:'Aggregate'}},
            {image:'COUNT',startOffset:106,endOffset:110,tokenType:{name:'COUNT'}},
            {image:'(',startOffset:111,endOffset:111,tokenType:{name:'LParen'}},
            {image:'Employee.EmployeeId',startOffset:112,endOffset:130,tokenType:{name:'Identifier'}},
            {image:')',startOffset:131,endOffset:131,tokenType:{name:'RParen'}},
           ])
    
        })
    
    
        it('Should tokenize the input that contains a WHERE clause with only one condition',()=>{
            const Input = 'FROM Employee ValidUpto NOW WHERE(isActiveEmployee) Aggregate COUNT(Employee.EmployeeId)'
            const Tokens = formulaBuilderService.TokenizeInput(Input).tokens
           expect(Tokens).toMatchObject([
            {image:'FROM',startOffset:0,endOffset:3,tokenType:{name:'FROM'}},
            {image:'Employee',startOffset:5,endOffset:12,tokenType:{name:'Identifier'}},
            {image:'ValidUpto',startOffset:14,endOffset:22,tokenType:{name:'ValidUpto'}},
            {image:'NOW',startOffset:24,endOffset:26,tokenType:{name:'NOW'}},
            {image:'WHERE',startOffset:28,endOffset:32,tokenType:{name:'WHERE'}},
            {image:'(',startOffset:33,endOffset:33,tokenType:{name:'LParen'}},
            {image:'isActiveEmployee',startOffset:34,endOffset:49,tokenType:{name:'Identifier'}},
            {image:')',startOffset:50,endOffset:50,tokenType:{name:'RParen'}},
            {image:'Aggregate',startOffset:52,endOffset:60,tokenType:{name:'Aggregate'}},
            {image:'COUNT',startOffset:62,endOffset:66,tokenType:{name:'COUNT'}},
            {image:'(',startOffset:67,endOffset:67,tokenType:{name:'LParen'}},
            {image:'Employee.EmployeeId',startOffset:68,endOffset:86,tokenType:{name:'Identifier'}},
            {image:')',startOffset:87,endOffset:87,tokenType:{name:'RParen'}},
           ])
    
          
    
        })
    
        it('Should tokenize the input that contains a LeastExpression',()=>{
            const Input = 'FROM Employee Aggregate COUNT(Employee.EmployeeId)'
            const Tokens = formulaBuilderService.TokenizeInput(Input).tokens
           expect(Tokens).toMatchObject([
            {image:'FROM',startOffset:0,endOffset:3,tokenType:{name:'FROM'}},
            {image:'Employee',startOffset:5,endOffset:12,tokenType:{name:'Identifier'}},
            {image:'Aggregate',startOffset:14,endOffset:22,tokenType:{name:'Aggregate'}},
            {image:'COUNT',startOffset:24,endOffset:28,tokenType:{name:'COUNT'}},
            {image:'(',startOffset:29,endOffset:29,tokenType:{name:'LParen'}},
            {image:'Employee.EmployeeId',startOffset:30,endOffset:48,tokenType:{name:'Identifier'}},
            {image:')',startOffset:49,endOffset:49,tokenType:{name:'RParen'}},
           ])
        })
    
    })