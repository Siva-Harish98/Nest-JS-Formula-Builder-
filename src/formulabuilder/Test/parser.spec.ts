import {FormulaBuilderService} from '../formulabuilderService'

let formulaBuilderService: FormulaBuilderService;

    beforeEach(() => {
        formulaBuilderService = new FormulaBuilderService(); // Instantiate the service
    });

    describe('Lexer test',()=>{
        it('should tokenize the input it start with From',()=>{
            const Input = 'FROM Employee ValidUpto NOW WHERE(isActiveEmployee && Employee.Age <= 30 && Employee.Age >= 25) Aggregate COUNT(Employee.EmployeeId)'
            const Tokens = formulaBuilderService.TokenizeInput(Input).tokens
            const CstList = formulaBuilderService.ParsingTokens(Tokens)
           
            expect(CstList.name).toBe('expression')
            expect(CstList.children['FromKey'][0]['name']).toBe('FromKey')
            expect(CstList.children['FromKey'][0]['children']['FROM'][0]['image']).toBe('FROM')
            expect(CstList.children['FromKey'][0]['children']['Identifier'][0]['image']).toBe('Employee')
            expect(CstList.children['FromKey'][0]['children']['optionfun'][0]['name']).toBe('optionfun')
            expect(CstList.children['FromKey'][0]['children']['optionfun'][0]['children']['Timefunc'][0]['name']).toBe('Timefunc')
            expect(CstList.children['FromKey'][0]['children']['optionfun'][0]['children']['Timefunc'][0]['children']['chkValidupto'][0]['name']).toBe('chkValidupto')
            expect(CstList.children['FromKey'][0]['children']['optionfun'][0]['children']['Timefunc'][0]['children']['chkValidupto'][0]['children']['ValidUptofunct'][0]['name']).toBe('ValidUptofunct')
            expect(CstList.children['FromKey'][0]['children']['optionfun'][0]['children']['Timefunc'][0]['children']['chkValidupto'][0]['children']['ValidUptofunct'][0]['children']['NOW'][0]['image']).toBe('NOW')
            expect(CstList.children['FromKey'][0]['children']['optionfun'][0]['children']['chkWherecond'][0]['name']).toBe('chkWherecond')
            expect(CstList.children['FromKey'][0]['children']['optionfun'][0]['children']['chkWherecond'][0]['children']['WHERE'][0]['image']).toBe('WHERE')
            expect(CstList.children['FromKey'][0]['children']['optionfun'][0]['children']['chkWherecond'][0]['children']['LParen'][0]['image']).toBe('(')
            expect(CstList.children['FromKey'][0]['children']['optionfun'][0]['children']['chkWherecond'][0]['children']['Identifier'][0]['image']).toBe('isActiveEmployee')
            expect(CstList.children['FromKey'][0]['children']['optionfun'][0]['children']['chkWherecond'][0]['children']['wherecndRule'][0]['name']).toBe('wherecndRule')
            expect(CstList.children['FromKey'][0]['children']['optionfun'][0]['children']['chkWherecond'][0]['children']['wherecndRule'][0]['children']['Allogicalop'][0]['image']).toBe('&&')
            expect(CstList.children['FromKey'][0]['children']['optionfun'][0]['children']['chkWherecond'][0]['children']['wherecndRule'][0]['children']['Identifier'][0]['image']).toBe('Employee.Age')
            expect(CstList.children['FromKey'][0]['children']['optionfun'][0]['children']['chkWherecond'][0]['children']['wherecndRule'][0]['children']['NumberLiteral'][0]['image']).toBe('30')
            expect(CstList.children['FromKey'][0]['children']['optionfun'][0]['children']['chkWherecond'][0]['children']['wherecndRule'][0]['children']['NumberLiteral'][1]['image']).toBe('25')
            expect(CstList.children['FromKey'][0]['children']['optionfun'][0]['children']['chkWherecond'][0]['children']['RParen'][0]['image']).toBe(')')
            expect(CstList.children['FromKey'][0]['children']['LeastExpression'][0]['name']).toBe('LeastExpression')
            expect(CstList.children['FromKey'][0]['children']['LeastExpression'][0]['children']['AggregateKey'][0]['name']).toBe('AggregateKey')
            expect(CstList.children['FromKey'][0]['children']['LeastExpression'][0]['children']['AggregateKey'][0]['children']['Aggregate'][0]['image']).toBe('Aggregate')
            expect(CstList.children['FromKey'][0]['children']['LeastExpression'][0]['children']['AggregateKey'][0]['children']['AggregateFunc'][0]['name']).toBe('AggregateFunc')
            expect(CstList.children['FromKey'][0]['children']['LeastExpression'][0]['children']['AggregateKey'][0]['children']['AggregateFunc'][0]['children']['COUNT'][0]['image']).toBe('COUNT')
            expect(CstList.children['FromKey'][0]['children']['LeastExpression'][0]['children']['AggregateKey'][0]['children']['LParen'][0]['image']).toBe('(')
            expect(CstList.children['FromKey'][0]['children']['LeastExpression'][0]['children']['AggregateKey'][0]['children']['Identifier'][0]['image']).toBe('Employee.EmployeeId')
            expect(CstList.children['FromKey'][0]['children']['LeastExpression'][0]['children']['AggregateKey'][0]['children']['RParen'][0]['image']).toBe(')')
           })

           it("Should 'thrown an error' because after 'ValidUpto' 'NOW' or any functionality belongs to 'ValidUpto' will come",()=>{
            const Input = 'FROM Employee ValidUpto WHERE(isActiveEmployee && Employee.Age <= 30 && Employee.Age >= 25) Aggregate COUNT(Employee.EmployeeId)'
            const Tokens = formulaBuilderService.TokenizeInput(Input).tokens
            const CstList = formulaBuilderService.ParsingTokens(Tokens)
           expect(CstList).toBe("Expecting token of type --> NOW <-- but found --> 'WHERE' <--")
            
           })



           it('should tokenize the input Having LeastExpression',()=>{
            const Input = 'FROM Employee Aggregate COUNT(Employee.EmployeeId)'
            const Tokens = formulaBuilderService.TokenizeInput(Input).tokens
            const CstList = formulaBuilderService.ParsingTokens(Tokens)
            expect(CstList.name).toBe('expression')
            expect(CstList.children['FromKey'][0]['name']).toBe('FromKey')
            expect(CstList.children['FromKey'][0]['children']['FROM'][0]['image']).toBe('FROM')
            expect(CstList.children['FromKey'][0]['children']['Identifier'][0]['image']).toBe('Employee')
            expect(CstList.children['FromKey'][0]['children']['LeastExpression'][0]['name']).toBe('LeastExpression')
            expect(CstList.children['FromKey'][0]['children']['LeastExpression'][0]['children']['AggregateKey'][0]['name']).toBe('AggregateKey')
            expect(CstList.children['FromKey'][0]['children']['LeastExpression'][0]['children']['AggregateKey'][0]['children']['Aggregate'][0]['image']).toBe('Aggregate')
            expect(CstList.children['FromKey'][0]['children']['LeastExpression'][0]['children']['AggregateKey'][0]['children']['AggregateFunc'][0]['name']).toBe('AggregateFunc')
            expect(CstList.children['FromKey'][0]['children']['LeastExpression'][0]['children']['AggregateKey'][0]['children']['AggregateFunc'][0]['children']['COUNT'][0]['image']).toBe('COUNT')
            expect(CstList.children['FromKey'][0]['children']['LeastExpression'][0]['children']['AggregateKey'][0]['children']['LParen'][0]['image']).toBe('(')
            expect(CstList.children['FromKey'][0]['children']['LeastExpression'][0]['children']['AggregateKey'][0]['children']['Identifier'][0]['image']).toBe('Employee.EmployeeId')
            expect(CstList.children['FromKey'][0]['children']['LeastExpression'][0]['children']['AggregateKey'][0]['children']['RParen'][0]['image']).toBe(')')
           })

           it("Should 'thrown an error' Because of Missing Operators",()=>{
            const Input = 'FROM Employee ValidUpto NOW WHERE(isActiveEmployee && Employee.Age  30 && Employee.Age >= 25) Aggregate COUNT(Employee.EmployeeId)'
            const Tokens = formulaBuilderService.TokenizeInput(Input).tokens
            const CstList = formulaBuilderService.ParsingTokens(Tokens)
           expect(CstList).toBe("Expecting token of type --> RParen <-- but found --> '30' <--")
            
           })
        })
    
    
    
