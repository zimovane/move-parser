// Copyright 2022 Amovane <amovane@163.com> licensed under the MIT license. see lICENSE file in the
// project root for details.

grammar Move;

//**************************************************************************************************
// file
//**************************************************************************************************

file:
  (addressBlock | module | script)*
  ;

//**************************************************************************************************
// modules
//**************************************************************************************************

module:
  docComments ( 'spec' | 'module')  (leadingNameAccess '::')? moduleName '{'
    attributes
      (useDecl | friendDecl | // specBlock 
        | (docComments moduleMemberModifiers
          (constantDecl | structDecl | functionDecl))?
      )
	'}'
  ;

useDecl:
  'use' moduleIdent useAlias ';'
  | 'use' moduleIdent '::' useMember ';'
  | 'use' moduleIdent '::' '{' useMember (',' useMember )* '}'
  ;

useMember:
  Identifier useAlias
  ;

useAlias:
  ('as' Identifier)?
  ;

//**************************************************************************************************
// scripts
//**************************************************************************************************

script:
  'script' '{'
    (attributes useDecl)*
    (attributes constantDecl)*
    attributes docComments moduleMemberModifiers functionDecl
    // TODO (attributes specBlock)*
  '}'
  ;

//**************************************************************************************************
// friend
//**************************************************************************************************

friendDecl: 
  'friend' nameAccessChain ';'
  ;

//**************************************************************************************************
// modifiers
//**************************************************************************************************

moduleMemberModifiers:
  moduleMemberModifier*
  ;

moduleMemberModifier:
  visibility | 'native'
  ;

visibility:
  'public' ( '(' 'script' | 'friend' ')' )?
  ;

attributeValue:
  value
  | nameAccessChain
  ;

attribute:
  Identifier
  | Identifier '='attributeValue
  | Identifier '(' commaAttribute ')'
  ;

commaAttribute:
  attribute (','attribute)*
  ;

attributes:
  ('#' '[' commaAttribute ']')*
  ;

//**************************************************************************************************
// types
//**************************************************************************************************

type:
  nameAccessChain ('<' types '>')?
  | '&' type
  | '&mut' type
  | '|' types '|' type // spec only
  | '(' types ')'
  ;

types:
  type (',' type)*
  ;

ability: 
  'copy' 
  | 'drop' 
  | 'store' 
  | 'key'
  ;

optionalTypeArgs:
  '<' types '>'
  ;

typeParameter:
  Identifier constraint?
  ;

typeParameters:
  typeParameter (',' typeParameter)*
  ;

constraint:
  ':' ability ('+'ability)*
  ;

typeParameterWithPhantomDecl:
  'phantom'? typeParameter
  ;

typeParameterWithPhantomDecls:
  typeParameterWithPhantomDecl (',' typeParameterWithPhantomDecl)*
  ;

optionalTypeParameters:
  ('<' typeParameters '>')?
  ;

structTypeParameter:
  ('<' typeParameterWithPhantomDecls '>')?
  ;


//**************************************************************************************************
// functions
//**************************************************************************************************

functionDecl:
  'fun' functionDefName '(' parameters ')' (':' type)? ('acquires' nameAccessChain (',' nameAccessChain)*)? ('{' sequence '}' | ';')
  ;

functionDefName:
  Identifier
  ;

parameters:
  parameter (',' parameter)*
  ;

parameter:
  var ':' type
  ;


//**************************************************************************************************
// Sequences
//**************************************************************************************************

sequence:
  useDecl*  (sequenceItem ';')* exp?
  ;

sequenceItem:
  exp
  | letBinding
  ;

letBinding:
  'let' bindList (':' type)? ('=' exp)?
  ;

//**************************************************************************************************
// Expressions
//**************************************************************************************************
term :
  'break'
  | 'continue'
  | 'vector' ('<' types '>')? '[' exps ']'
  | value
  | '(' exps ')'
  | '(' exp ':' type ')'
  | '(' exp 'as' type ')'
  | '{' sequence
  | 'if' '(' exp ')' exp 'else' '{' exp '}'
  | 'if' '(' exp ')' '{' exp '}'
  | 'if' '(' exp ')' exp ('else' exp)?
  | 'while' '(' exp ')' '{' exp '}'
//  | 'while' '(' <Exp> ')' <Exp>  specBlock)?  tODO
  | 'loop' exp
  | 'loop' '{' exp '}'
  | 'return' '{' exp '}'
  | 'return' exp?
  | 'abort' '{' exp '}'
  | 'abort' exp
  ;

exp:
  lambdaBindList exp   // spec only
  | quantifier           // spec only
  | binOpExp
  | unaryExp '=' exp
  ;

binOp : 
  '==>'                                       // spec only
  | '||'
  | '&&'
  | '==' | '!=' | '<' | '>' | '<=' | '>='
  | '..'                                      // spec only
  | '|'
  | '^'
  | '&'
  | '<<' | '>>'
  | '+' | '-'
  | '*' | '/' | '%'
  ;

binOpExp:
  unaryExp (binOp unaryExp)*	
  ;

unaryExp:
  '!' unaryExp
  | '&mut' unaryExp
  | '&' unaryExp
  | '*' unaryExp
  | 'move' var
  | 'copy' var
  | dotOrIndexChain
  ;

dotOrIndexChain:
  term ('.' Identifier)*
  | term ('[' exp ']')*                      // spec only
  ;

quantifier:
  ( 'forall' | 'exists' ) quantifierBindings ('{' (exp)* '}')* ('where' exp)? ':' exp
  | ( 'choose' '[' 'min' ']' ) quantifierBind 'where' exp
  ;

quantifierBindings:
  quantifierBind (',' quantifierBind)*
  ;

quantifierBind:
  Identifier ':' type 
  | Identifier 'in' exp
  ;

exps:
  exp (',' exp)*
  ;


//**************************************************************************************************
// Fields and Bindings
//**************************************************************************************************

expField: 
  field ('<' ':' exp '>')?
  ;

bindField:
  field ('<' ':'bind '>')?
  ;

bindFields:
  bindField (','bindField)*
  ;

bind:
  var
  | nameAccessChain optionalTypeArgs? '{' bindFields '}'
  ;

binds:
  bind (','bind)*
  ;

bindList:
  bind
  | '('binds ')'
  ;

lambdaBindList:
  '|'binds '|'
  ;


//**************************************************************************************************
// values
//**************************************************************************************************

Alphanumeric:
  [0-9a-zA-Z]
  ;

Digit:
  [0-9]
  ;

number:
  Digit+
  ;

numberTyped:
  number ('u8' | 'u64' | 'u128')
  ;

byteString:
  ('b"' | 'x"') Alphanumeric* '"'
  ; 

value:
  '@' leadingNameAccess
  | 'true'
  | 'false'
  | number
  | numberTyped
  | byteString
  ;

//**************************************************************************************************
// Constants
//**************************************************************************************************

constantDecl:
  'const' Identifier ':' type '=' exp ';'
  ;


//**************************************************************************************************
// Structs
//**************************************************************************************************

structDecl:
  'struct' structDefName ('has'ability (','ability)*)?
  ('{' fieldAnnots '}' | ';')
  ;

structDefName: 
  Identifier optionalTypeParameters
  ;

fieldAnnots:
  fieldAnnot (',' fieldAnnot)*
  ;


fieldAnnot:
  docComments field ':' type
  ;

docComments:
  '/"' .*? '"/'
  | '//' .*?
  | '///' .*?
  ;

//**************************************************************************************************
// Identifiers, Addresses, and Names
//**************************************************************************************************

Identifier:
  [a-zA-Z_]+
  ;

NumericalAddress: 
  '0x' ([0-9a-zA-Z])*
  ;

leadingNameAccess: 
  NumericalAddress 
  | Identifier
  ;

var:
  Identifier
  ;

field:
  Identifier
  ;

moduleIdent:
  leadingNameAccess '::' moduleName
  ;

moduleName:
  Identifier
  ;

nameAccessChain:
  leadingNameAccess ('::' Identifier('::' Identifier)? )?
  ;

//**************************************************************************************************
// AddressBlock
//**************************************************************************************************

addressBlock:
  'address' leadingNameAccess '{' (attributes module)* '}'
  ;