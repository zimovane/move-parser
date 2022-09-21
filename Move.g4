// Copyright 2022 Amovane <amovane@163.com> Licensed under the MIT license. See LICENSE file in the
// project root for details.

grammar Move;

//**************************************************************************************************
// File
//**************************************************************************************************

file:
	(AddressBlock | Module | Script)*
	;

//**************************************************************************************************
// Modules
//**************************************************************************************************

Module:
	DocComments ( 'spec' | 'module') (LeadingNameAccess '::')? ModuleName '{'
			( Attributes
					( UseDecl | FriendDecl | // SpecBlock 
					| DocComments ModuleMemberModifiers
						(ConstantDecl | StructDecl | FunctionDecl) )
			)*
	'}'
	;

UseDecl:
	  'use' ModuleIdent UseAlias ';'
	| 'use' ModuleIdent '::' UseMember ';'
	| 'use' ModuleIdent '::' '{' UseMember (',' UseMember )* '}'
	;

UseMember:
  Identifier UseAlias
	;

fragment
UseAlias:
  ('as' Identifier)?
	;

//**************************************************************************************************
// Scripts
//**************************************************************************************************

Script:
	'script' '{'
			(Attributes UseDecl)*
			(Attributes ConstantDecl)*
			Attributes DocComments ModuleMemberModifiers FunctionDecl
			// TODO (Attributes SpecBlock)*
	'}'
	;

//**************************************************************************************************
// Friend
//**************************************************************************************************

FriendDecl: 
  'friend' NameAccessChain ';'
	;

//**************************************************************************************************
// Modifiers
//**************************************************************************************************

fragment
ModuleMemberModifiers:
  ModuleMemberModifier*
	;

ModuleMemberModifier:
	Visibility | 'native'
	;

Visibility:
	'public' ( '(' 'script' | 'friend' ')' )?
	;

AttributeValue:
	Value
	| NameAccessChain
	;

Attribute:
	Identifier
	| Identifier '=' AttributeValue
	| Identifier '(' CommaAttribute ')'
	;

CommaAttribute:
	Attribute (',' Attribute)*
	;

fragment
Attributes:
	('#' '[' CommaAttribute ']')*
	;

//**************************************************************************************************
// Types
//**************************************************************************************************

Type:
  NameAccessChain ('<' Types '>')?
	| '&' Type
	| '&mut' Type
	| '|' Types '|' Type // spec only
	| '(' Types ')'
	;

Types:
	Type (',' Type)*
	;

Ability: 
	'copy' 
	| 'drop' 
	| 'store' 
	| 'key'
	;

OptionalTypeArgs:
	'<' Types '>'
	;

TypeParameter:
	Identifier Constraint?
	;

TypeParameters:
	TypeParameter (',' TypeParameter)*
	;

Constraint:
	':' Ability ('+' Ability)*
	;

TypeParameterWithPhantomDecl:
	'phantom'? TypeParameter
	;

TypeParameterWithPhantomDecls:
	TypeParameterWithPhantomDecl (',' TypeParameterWithPhantomDecl)*
	;

fragment
OptionalTypeParameters:
	('<' TypeParameters '>')?
	;

fragment
StructTypeParameter:
	('<' TypeParameterWithPhantomDecls '>')?
	;


//**************************************************************************************************
// Functions
//**************************************************************************************************

FunctionDecl:
	'fun' FunctionDefName Parameters (':' Type)? ('acquires' NameAccessChain (',' NameAccessChain)*)? ('{' Sequence '}' | ';')
	;

FunctionDefName:
  Identifier
	;

Parameters:
	Parameter (',' Parameter)*
	;

Parameter:
	Var ':' Type
	;


//**************************************************************************************************
// Sequences
//**************************************************************************************************

Sequence:
 	UseDecl* (SequenceItem ';')* Exp? '}'
 	;

SequenceItem:
  Exp
  | 'let' BindList (':' Type)? ('=' Exp)?
	;

//**************************************************************************************************
// Expressions
//**************************************************************************************************
Term :
	'break'
	| 'continue'
	| 'vector' ('<' Types '>')? '[' Exps ']'
	| Value
	| '(' Exps ')'
	| '(' Exp ':' Type ')'
	| '(' Exp 'as' Type ')'
	| '{' Sequence
	| 'if' '(' Exp ')' Exp 'else' '{' Exp '}'
	| 'if' '(' Exp ')' '{' Exp '}'
	| 'if' '(' Exp ')' Exp ('else' Exp)?
	| 'while' '(' Exp ')' '{' Exp '}'
//  | 'while' '(' <Exp> ')' <Exp> (SpecBlock)?  TODO
	| 'loop' Exp
	| 'loop' '{' Exp '}'
	| 'return' '{' Exp '}'
	| 'return' Exp?
	| 'abort' '{' Exp '}'
	| 'abort' Exp
	;

Exp:
		LambdaBindList Exp   // spec only
	| Quantifier           // spec only
	| BinOpExp
	| UnaryExp '=' Exp
	;

BinOp : 
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

BinOpExp:
	UnaryExp (BinOp UnaryExp)*	
	;

UnaryExp:
	'!' UnaryExp
	| '&mut' UnaryExp
	| '&' UnaryExp
	| '*' UnaryExp
	| 'move' Var
	| 'copy' Var
	| DotOrIndexChain
	;

DotOrIndexChain:
	Term ('.' Identifier)*
	| Term ('[' Exp ']')*                      // spec only
	;

Quantifier:
	( 'forall' | 'exists' ) QuantifierBindings ('{' (Exp)* '}')* ('where' Exp)? ':' Exp
	| ( 'choose' '[' 'min' ']' ) QuantifierBind 'where' Exp
	;

QuantifierBindings:
	QuantifierBind (',' QuantifierBind)*
	;

QuantifierBind:
	Identifier ':' Type 
	| Identifier 'in' Exp
	;

Exps:
	Exp (',' Exp)*
	;


//**************************************************************************************************
// Fields and Bindings
//**************************************************************************************************

ExpField: 
	Field ('<' ':' Exp '>')?
	;

BindField:
	Field ('<' ':' Bind '>')?
	;

BindFields:
	BindField (',' BindField)*
	;

Bind:
	Var
	| NameAccessChain OptionalTypeArgs '{' BindFields '}'
	;

Binds:
	Bind (',' Bind)*
	;

BindList:
	Bind
	| '(' Binds ')'
	;

LambdaBindList:
	'|' Binds '|'
	;


//**************************************************************************************************
// Values
//**************************************************************************************************

Alphanumeric:
	[0-9a-zA-Z]
	;

Digit:
	[0-9]
	;

Number:
	Digit+
	;

NumberTyped:
	Number ('u8' | 'u64' | 'u128')
	;

ByteString:
	('b"' | 'x"') Alphanumeric* '"'
	; 

Value:
	'@' LeadingNameAccess
	| 'true'
	| 'false'
	| Number
	| NumberTyped
	| ByteString
	;

//**************************************************************************************************
// Constants
//**************************************************************************************************

ConstantDecl:
  'const' Identifier ':' Type '=' Exp ';'
	;


//**************************************************************************************************
// Structs
//**************************************************************************************************

StructDecl:
	'struct' StructDefName ('has' Ability (',' Ability)+)?
	('{' FieldAnnot '}' | ';')
	;

StructDefName: 
	Identifier OptionalTypeParameters
	;

FieldAnnots:
	FieldAnnot (',' FieldAnnot)*
	;


FieldAnnot:
	DocComments Field ':' Type
	;

DocComments:
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

LeadingNameAccess: 
  NumericalAddress 
	| Identifier
	;

Var:
	Identifier
	;

Field:
	Identifier
	;

ModuleIdent:
  LeadingNameAccess '::' ModuleName
	;

ModuleName:
  Identifier
	;

NameAccessChain:
  LeadingNameAccess ('::' Identifier('::' Identifier)? )?
	;

//**************************************************************************************************
// AddressBlock
//**************************************************************************************************

AddressBlock:
	'address' LeadingNameAccess '{' (Attributes Module)* '}'
	;